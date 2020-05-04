const puppeteer = require('puppeteer');
const nodeID3 = require('node-id3');
const fs = require('fs');
const http = require('http');
const https = require('https');

function delay(timeout) {
    return new Promise((resolve) => {
        setTimeout(resolve, timeout);
    });
}

not = bool => !bool;

const wait = 500;

class YouTube {
    constructor() {
        //
    }

    async init(info) {
        this.info = info;

        this.browser = await puppeteer.launch({headless: true, defaultViewport: {width: 800, height: 600}, args: ['--no-sandbox', '--disable-setuid-sandbox']});
        [this.page] = await this.browser.pages();
        await this.page.setRequestInterception(true);

        this.page.on('request', async (request) => {
            if(
                request.url().includes('.png') ||
                request.url().includes('.jpg') ||
                request.url().includes('.gif') || 
                request.url().includes('.woff2')
            )
                request.abort();
            else
                request.continue();
        });

        this.page.on('response', async (response) => {
            // console.log(response.url());
        });
    }

    async download(type) {
        try {
            const fileName = `${this.info.artist} - ${this.info.title}.mp3`;

            console.log(`${fileName} ::: Start!`);
            await this.page.goto('https://www.y2mate.com/youtube-mp3' + `/${this.info.id}`, { waitUntil : "networkidle2" });

            await this.page.waitForSelector('.video-thumbnail img');
            const thumbnailLink = await this.page.$eval('.video-thumbnail img', img => img.getAttribute('src'));
            const thumbnailFile = fs.createWriteStream(`music/cover/${this.info.id}.jpg`);
            https.get(thumbnailLink, (response) => {
                response.pipe(thumbnailFile);
            });

            await this.page.waitForSelector('.btn-group span.caret');
            await this.page.click('.btn-group span.caret');
            await this.page.click('.col-xs-5 ul.list-unstyled li:first-child');
            await this.page.click('#process_mp3');

            await this.page.waitForSelector('.has-success .btn-success');

            let link = '';
            let counter = 0;
            while(true) {
                await delay(1000);
                try {
                    await this.page.hover('.has-success .btn-success');
                    link = await this.page.$eval('.has-success .btn-success', a => a.getAttribute('href'));
                    break;
                } catch(e) {
                    console.log(`${fileName} ::: Ready... ${++counter}`);
                    // ERROR
                }
            }

            console.log(`${fileName} ::: Search Metadata...`);
            await this.page.goto('https://music.naver.com/home/index.nhn');
            await this.page.waitForSelector('#baseSearchForm #query');
            await this.page.type('#baseSearchForm #query', `${this.info.artist} ${this.info.title}`);
            await this.page.keyboard.press('Enter');
            
            let tags = {};
            try {
                await delay(1000);
                await this.page.hover('.name .ellipsis');
                tags.title = await this.page.$eval(`.name .ellipsis`, element => element.textContent.trim());
                tags.artist = await this.page.$eval(`.artist .ellipsis`, element => element.textContent.trim());
                tags.album = await this.page.$eval(`.album .ellipsis`, element => element.textContent.trim());
                console.log(`${fileName} ::: Metadata Found :)`);
            } catch(e) {
                tags.ttitle = this.info.title;
                tags.artist = this.info.artist;
                tags.album = this.info.title;
                console.log(`${fileName} ::: Metadata Not Found :(`);
            }
            tags.image = `./cover/${this.info.id}.jpg`;
            
            this.browser.close();

            const file = fs.createWriteStream(`music/${fileName}`);
            http.get(link, (response) => {
                const fileSize = response.headers["content-length"];
                const meta = tags;
                let size = 0;
                let percent = 0;
                response.pipe(file);
        
                response.on('data', (data) => {
                    size += data.length;
                    if(fileSize) {
                        let tempPercent = Math.floor(size / fileSize * 100);
                        if(percent !== tempPercent) {
                            percent = tempPercent;
                            console.log(`${fileName} ::: ${percent}%`);
                        }
                    }
                    else
                        console.log(data);
                });
        
                response.on('end', () => {
                    console.log(`${fileName} ::: Done!`);
                    nodeID3.removeTags(`music/${fileName}`);
                    nodeID3.write(meta, `music/${fileName}`);
                    // process.exit(0);
                });
            });
        } catch(e) {
            console.log(e);
        }
    }
}

(async () => {
    const infoList = [
        {
            id: `b7t5Of_jbhQ`,
            title: `그럴거면`,
            artist: `FREDEN`,
        }, {
            id: `g-mh4JTOhVw`,
            title: `Tú`,
            artist: `Maye`,
        }
    ];

    fs.mkdirSync('music', { recursive: true });
    fs.mkdirSync('music/cover', { recursive: true });

    for(let info of infoList) {
        const youTube = new YouTube();
        await youTube.init(info);
        await youTube.download('mp3');
    }
})();
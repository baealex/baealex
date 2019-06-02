import requests
import urllib.request
from bs4 import BeautifulSoup as bs

import private_infomation # Custom Lib

execpt_text = ['ipynb', 'zip', 'xlsx', 'csv', 'youtube']

with requests.Session() as s:
    login_req = s.post(private_infomation.LOGIN_PAGE , data=private_infomation.LOGIN_INFO)
    print('Status Code : ' + str(login_req.status_code))

    if login_req.status_code != 200:
        raise Exception('Login Faild!')

    board = s.get(private_infomation.POST_LIST)
    soup = bs(board.text, 'html.parser')
    title_list = soup.select('tr > td > a')
    count = 0
    total = 0
    for title in title_list:
        if title.text.find(execpt_text[0]) != -1 or \
           title.text.find(execpt_text[1]) != -1 or \
           title.text.find(execpt_text[2]) != -1 or \
           title.text.find(execpt_text[3]) != -1 or \
           title.get('href').find(execpt_text[4]) != -1 :
            continue
        total += 1
    for title in title_list:
        if title.text.find(execpt_text[0]) != -1 or \
           title.text.find(execpt_text[1]) != -1 or \
           title.text.find(execpt_text[2]) != -1 or \
           title.text.find(execpt_text[3]) != -1 :
            # urllib.request.urlretrieve(private_infomation.ASSETS_URL + title.get('href'), 'private_craw/resource/data/' + title.text.strip())
            res = s.get(private_infomation.ASSETS_URL + title.get('href'))
            with open('private_craw/resource/data/' + title.text.strip(), 'wb') as f:
                f.write(res.content)
            continue
        elif title.get('href').find(execpt_text[4]) != -1:
            continue
        else:
            split_link = title.get('href').split('f_read(')
            # print(split_link)
            link = split_link[1].split(')')

            post = s.get(private_infomation.READ_POST(link[0]))
            post_soup = bs(post.text, 'html.parser')
            post_soup_content = post_soup.select('table > tr')

            save_html = open('private_craw/'+ title.text + '.html', 'w')
            save_html.write(str(post_soup_content[1]))
            save_html.close()

            img_count = 0
            apply_link = ''
            img_type = ''
            for img in post_soup_content[1].select('img'):
                if img.get('src').find(private_infomation.ASSETS_URL) != -1:
                    apply_link = img.get('src')
                elif img.get('src').find('http') != -1:
                    continue
                else:
                    apply_link = private_infomation.ASSETS_URL + img.get('src')

                if apply_link.find('jpg') != -1 or apply_link.find('jpg') != -1:
                    img_type = '.jpg'
                elif apply_link.find('gif') != -1 or apply_link.find('GIF') != -1:
                    img_type = '.gif'
                elif apply_link.find('png') != -1 or apply_link.find('PNG') != -1:
                    img_type = '.png'
                else:
                    img_type = '.unknown'

                # urllib.request.urlretrieve(apply_link, 'private_craw/resource/img/' + str(count) + '-' + str(img_count) + img_type)
                print(apply_link)
                print(img_type)
                res = s.get(apply_link)
                with open('private_craw/resource/img/' + str(count) + '-' + str(img_count) + img_type, 'wb') as f:
                    f.write(res.content)
                img_count += 1

            count += 1
            print('Progress... ' + str((count/total)*100))
import { loading } from './popup.js';

const baseURL = './local-dataset';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function Requests(url) {
    loading.start();
    try {
        await sleep(Math.random() * 4000);
        const response = await fetch(url);
        loading.end();
        return response;
    } catch(e) {
        loading.end();
        alert('에러가 발생했습니다.');
    }
}

export const getDirectoryContent = (() => {
    const memo = {};

    /**
     * @param {number} pk?
     */
    return async (pk) => {
        const key = pk ? pk.toString() : 'null';

        if (memo[key]) {
            return memo[key];
        }

        const response = await Requests(`${baseURL}/dev${pk ? `/${pk}.json` : '.json'}`);
        memo[key] = await response.json();
        return memo[key];
    }
})();
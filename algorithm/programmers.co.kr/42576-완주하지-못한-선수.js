
// URL   : https://programmers.co.kr/learn/courses/30/lessons/42576
// STATE : DONE(2021-10-27)

function solution(participant, completion) {
    const dict = new Map();

    for (const name of completion) {
        if (!dict.has(name)) {
            dict.set(name, 0);
        }
        dict.set(name, dict.get(name) + 1);
    }

    for (const name of participant) {
        if (!dict.has(name) || dict.get(name) == 0) {
            return name;
        }
        dict.set(name, dict.get(name) - 1);
    }
}
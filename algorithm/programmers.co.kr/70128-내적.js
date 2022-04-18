
// URL   : https://programmers.co.kr/learn/courses/30/lessons/70128
// STATE : DONE(2022-04-18)

function solution(a, b) {
    return a.reduce((acc, cur, idx) => acc + cur * b[idx], 0)
}

// URL   : https://programmers.co.kr/learn/courses/30/lessons/76501
// STATE : DONE(2022-04-18)

function solution(absolutes, signs) {
    return absolutes.reduce((acc, cur, idx) => (
        acc += signs[idx] ? cur * 1 : cur * -1
    ), 0)
}

// URL   : https://programmers.co.kr/learn/courses/30/lessons/12903
// STATE : DONE(2022-04-29)

function solution(s) {
    const center = Math.ceil(s.length / 2)

    if (s.length % 2 === 0) {
        return s.slice(center - 1, center + 1)
    }

    return s.slice(center - 1, center)
}
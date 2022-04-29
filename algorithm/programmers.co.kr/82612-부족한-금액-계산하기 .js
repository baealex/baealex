
// URL   : https://programmers.co.kr/learn/courses/30/lessons/82612
// STATE : DONE(2022-04-29)

function solution(price, money, count) {
    const total = [...Array(count).keys()].reduce((acc, cur) => acc += price * (cur + 1), 0)
    return money > total ? 0 : total - money
}
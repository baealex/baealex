
// URL   : https://programmers.co.kr/learn/courses/30/lessons/12901
// STATE : DONE(2022-04-29)

function solution(a, b) {
    const days = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    const weekend = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED']
    return weekend[(days.slice(0, a - 1).reduce((acc, cur) => acc += cur, 0) + b) % 7]
}

// URL   : https://programmers.co.kr/learn/courses/30/lessons/86051

const solution = (numbers) => (9 * (9 + 1) / 2) -  numbers.reduce((acc, cur) => acc += cur, 0)
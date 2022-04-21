
// URL   : https://programmers.co.kr/learn/courses/30/lessons/92334
// STATE : DONE(2022-04-21)

function solution(users, reports, k) {
    const table = reports.map(report => report.split(' '))
        .reduce((acc, [user1, user2]) => {
            acc[user2] || (acc[user2] = new Set())
            acc[user2].add(user1)
            return acc
        }, {})
    
    return users.map(user => 
        Object.keys(table).reduce((acc, cur) =>
            table[cur].size >= k && table[cur].has(user) ? acc + 1 : acc, 0))
}
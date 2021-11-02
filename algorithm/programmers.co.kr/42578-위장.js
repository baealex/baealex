
// URL   : https://programmers.co.kr/learn/courses/30/lessons/42578
// STATE : DONE(2021-11-02)

function solution(clothes) {
    let items = {}
    
    for (const [ cloth, kind ] of clothes) {
        if (!(kind in items)) {
            items[kind] = []
        }
        items[kind].push(cloth)
    }
    
    const counts = []
    
    for (const key in items) {
        counts.push(items[key].length + 1) // 안 입는 경우 포함
    }
    
    return counts.reduce((acc, cur) => acc *= cur, 1) - 1 // 전부 안 입는 경우 제외
}
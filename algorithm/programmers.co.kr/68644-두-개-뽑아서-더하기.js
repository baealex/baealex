
// URL   : https://programmers.co.kr/learn/courses/30/lessons/68644
// STATE : DONE(2022-04-18)

function solution(numbers) {
    const set = new Set()
    
    for (let i=0; i<numbers.length; i++) {
        for (let j=i+1; j<numbers.length; j++) {
            set.add(numbers[i] + numbers[j])
        }
    }
    
    return Array.from(set).sort((a, b) => a - b)
}

// URL   : https://programmers.co.kr/learn/courses/30/lessons/12906
// STATE : DONE(2022-04-29)

function solution(arr)
{
    let latestNumber = undefined
    
    const answer = []
    
    for (const a of arr) {
        if (answer[answer.length - 1] !== a) {
            answer.push(a)
        }
    }
    
    return answer
}
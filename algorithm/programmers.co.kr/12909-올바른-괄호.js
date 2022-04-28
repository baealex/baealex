
// URL   : https://programmers.co.kr/learn/courses/30/lessons/12909
// STATE : DONE(2022-04-28)

function solution(chars) {
    let isPair = false
    
    const stack = []
    
    for (const char of chars) {
        if (char === '(') {
            stack.push('(')
        } else {
            if (stack.pop() === '(') {
                isPair = true
            } else {
                isPair = false
                break
            }
        }
    }
    
    if (stack.length > 0) isPair = false
    
    return isPair
}
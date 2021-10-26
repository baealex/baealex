
// URL   : https://programmers.co.kr/learn/courses/30/lessons/42586
// STATE : DONE(2021-10-26)

function solution(progresses, speeds) {
    const answer = [];
    
    while (progresses.length > 0) {
        progresses = progresses.map((item, idx) => item + speeds[idx])
        
        if (progresses[0] >= 100) {
            let count = 0
            for (const idx in progresses) {
                if (progresses[idx] >= 100) {
                    count += 1
                } else {
                    break
                }
            }
            if (count > 0) {
                answer.push(count)
            }
            speeds = speeds.slice(count, speeds.length)
            progresses = progresses.slice(count, progresses.length)
        }
    }
    
    return answer;
}
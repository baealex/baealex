
// URL   : https://programmers.co.kr/learn/courses/30/lessons/42576
// STATE : DONE(2020-02-09)

function solution(participant, completion) {
    participant.sort()
    completion.sort()
    for(var i=0; i<completion.length; i++) {
        if(participant[i] != completion[i]) {
            return participant[i]
        }
    }
    return participant[participant.length - 1]
}
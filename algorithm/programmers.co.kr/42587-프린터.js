
// URL   : https://programmers.co.kr/learn/courses/30/lessons/42587
// STATE : DONE(2021-11-01)

function solution(priorities, location) {
    priorities = priorities.map((item, idx) => [item, idx]);
    
    const queue = [];
    
    while(priorities.length > 0) {
        const priority = priorities[0];
        if (priorities.filter(item => item[0] > priority[0]).length > 0) {
            priorities.push(priorities.shift());
        } else {
            queue.push(priorities.shift());
        }   
    }
    
    return queue.findIndex(item => item[1] == location) + 1;
}
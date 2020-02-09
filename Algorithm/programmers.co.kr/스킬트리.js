
// URL   : https://programmers.co.kr/learn/courses/30/lessons/49993
// STATE : DONE(2020-02-09)

function solution(skill, skill_trees) {
    var answer = 0;
    for(let skill_tree of skill_trees) {
        let check = true;
        let pre_skill_index = -5;
        for(let skill_name of skill) {
            let skill_index = skill_tree.indexOf(skill_name);
            if(skill_index != -1) {
                if(pre_skill_index == -1 || skill_index < pre_skill_index) {
                    check = false;
                    break;
                }
            }
            pre_skill_index = skill_index;
        }
        if(check) {
            answer++;
        }
    }
    return answer;
}
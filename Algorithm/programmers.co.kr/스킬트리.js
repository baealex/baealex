
// URL   : https://programmers.co.kr/learn/courses/30/lessons/49993
// STATE : DONE(2020-02-09)

function solution(skill, skill_trees) {
    var answer = 0;
    for(var i in skill_trees) {
        let check = true;
        let preSkillIndex = -5;
        for(var j in skill) {
            let skillIndex = skill_trees[i].indexOf(skill[j]);
            if(skillIndex != -1) {
                if(preSkillIndex == -1 || skillIndex < preSkillIndex) {
                    check = false;
                    break;
                }
            }
            preSkillIndex = skillIndex;
        }
        if(check) {
            answer++;
        }
    }
    return answer;
}
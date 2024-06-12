// 문제 57 - 모의고사

// 시작 코드
function solution(answers) {
    var answer = [];
    return answer;
}

// 해결 코드
function solution(answers) {
    let s1 = [];
    let s2 = [];
    let s3 = [];
    
    let pt1 = [2,1,2,3,2,4,2,5];
    let pt2= [3,3,1,1,2,2,4,4,5,5];
    let len = answers.length;
    
    let res1 = 0;
    let res2 = 0;
    let res3 = 0;
    
    for(let i=0; i<len; i++) {
        s1[i] = (i%5)+1;
        if(s1[i] == answers[i]) res1++;
        
        if(i%2==0) s2[i] = 2; else s2[i] = pt1[i%8];
        if(s2[i] == answers[i]) res2++;
        
        s3[i] = pt2[i%10];
        if(s3[i] == answers[i]) res3++;
    }
    let res = [ {student:1, score:res1}, {student:2, score:res2}, {student:3, score:res3} ];
    res.sort((a,b)=>b.score-a.score);
    
    let max = res[0].score;
    
    let answer = [];
    for(let j=0; j<3; j++) {
        if(res[j].score == max) answer.push(res[j].student);
    }
    answer.sort((a,b)=>a-b);
    
    return answer;
}
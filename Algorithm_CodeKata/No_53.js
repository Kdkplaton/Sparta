// 문제 53 - 명예의 전당

// 시작 코드
function solution(k, score) {
    var answer = [];
    return answer;
}

// 해결 코드
function solution(k, score) {
    let list = [];
    let res = [];
    
    for(let i=0; i<score.length; i++) {
        if(i<k) { list.push(score[i]); }
        else if(min <= score[i]) {
            if(i>=k) { list.shift(); }
            list.push(score[i]);
        }
        
        list = list.sort((a, b) => a - b);
        min = list[0];
        res.push(min);
    }
    console.log(res);
    
    let answer = res;
    return answer;
}
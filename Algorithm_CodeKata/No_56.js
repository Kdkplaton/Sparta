// 문제 56 - 과일 장수

// 시작 코드
function solution(k, m, score) {
    var answer = 0;
    return answer;
}

// 해결 코드
function solution(k, m, score) {
    let temp = score;
    temp.sort((a,b)=>b-a);
    
    let res = 0;

    for(let i=0; i<temp.length; i++) {
        if((i+1) % m == 0) {
            res += temp[i] * m;
        }
    }
    
    let answer = res;
    return answer;
}
// 문제 19 - 정수 제곱근 판별

// 시작 코드
function solution(n) {
    var answer = 0;
    return answer;
}

// 해결 코드
function solution_solved(n) {
    let temp = n**0.5;
    let res;
    
    console.log(temp);
    if(temp % 1 == 0) { res = (temp+1)**2; }
    else { res = -1; }
    console.log(res);
    
    let answer = res;
    return answer;
}
// 문제 14 - 약수의 합

// 시작 코드
function solution(n) {
    var answer = 0;
    return answer;
}

// 해결 코드
function solution(n) {
    let sum = 0;
    for(let i=1; i<=n; i++) {
        if(n%i==0) sum += i;
    }
    
    var answer = sum;
    return answer;
}

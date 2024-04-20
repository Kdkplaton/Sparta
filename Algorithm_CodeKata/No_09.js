// 문제 9 - 짝수의 합

// 시작 코드
function solution(n) {
    var answer = 0;
    return answer;
}

// 해결 코드
function solution(n) {
    var res = 0;
    for(var i=0; i<=n; i+=2) {
        res += i;
    }
    
    var answer = res;
    return answer;
}
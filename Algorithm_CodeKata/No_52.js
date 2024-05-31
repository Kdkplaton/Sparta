// 문제 52 - 콜라 문제

// 시작 코드
function solution(a, b, n) {
    var answer = 0;
    return answer;
}

// 해결 코드
function solution(a, b, n) {
    let left = n;
    let recv = 0;
    
    while(left>=a) {
        recv += Math.floor(left/a) * b;
        left = Math.floor(left/a) * b + (left % a);
    }
    
    let answer = recv;
    return answer;
}
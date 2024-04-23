// 문제 15 - 나머지가 1이 되는 수 찾기

// 시작 코드
function solution(n) {
    var answer = 0;
    return answer;
}

// 해결 코드
function solution(n) {
    var answer = 0;
    
    for(let i=2; i<=n; i++) {
        if(n%i==1) {
            answer=i; 
            break;
        }
    }
    
    return answer;
}

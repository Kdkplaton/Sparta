// 문제 22 - 두 정수 사이의 합

// 시작 코드
function solution(s) {
    var answer = 0;
    return answer;
}

// 해결 코드
function solution_solved(a, b) {
    let sum = 0;
    let answer = 0;
    
    if(a==b) { sum = a; }
    else { 
        for(let i= (a<b ? a:b); i<=(a<b ? b:a); i++) {
            sum += i;
        }
    }
    
    answer = sum;
    return answer;
}
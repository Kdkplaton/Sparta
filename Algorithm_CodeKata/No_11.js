// 문제 11 - 

// 시작 코드
function solution(n) {
    var answer = 0;
    return answer;
}

// 해결 코드
function solution_solved(num) {
    var temp = num;
    if (temp < 0) temp = temp * -1;
    
    var res;
    if(temp%2 == 1) res = "Odd";
    else res = "Even";
    
    var answer = res;
    return answer;
}

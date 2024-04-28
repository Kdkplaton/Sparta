// 문제 21 - 

// 시작 코드
function solution(x) {
    var answer = true;
    return answer;
}

// 해결 코드
function solution_solved(x) {
    let temp = x;
    let num = 0;
    
    while(temp != 0) {
        num += temp%10;
        temp = parseInt(temp/10);
    }
    
    var answer = true;
    answer = x%num==0 ? true : false ;
    return answer;
}
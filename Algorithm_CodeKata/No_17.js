// 문제 17 - 자연수 뒤집어 배열로 만들기

// 시작 코드
function solution(n) {
    var answer = [];
    return answer;
}

// 해결 코드
function solution_solved(n) {
    let temp = n;
    let res = [];
    
    while(temp != 0) {
        res.push(temp%10);
        temp = parseInt(temp/10);
    }
    
    let answer = res;
    return answer;
}
// 문제 16 - x만큼 간격이 있는 n개의 숫자

// 시작 코드
function solution(x, n) {
    var answer = [];
    return answer;
}

// 해결 코드
function solution_solved(x, n) {
    let res = [];
    
    for(let i=1; i<=n; i++) {
        res.push(x*i);
    }
    
    let answer = res;
    return answer;
}

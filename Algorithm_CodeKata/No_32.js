// 문제 30 - 가운데 글자 가져오기

// 시작 코드
function solution(a, b) {
    var answer = 1234567890;
    return answer;
}

// 해결 코드
function solution_solved(a, b) {
    let len = a.length;
    let res = 0;
    
    for(let i=0; i<len; i++) {
        res += a[i]*b[i];
    }
    
    let answer = res;
    return answer;
}
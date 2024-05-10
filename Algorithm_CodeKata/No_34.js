// 문제 34 - 문자열 내림차순으로 배치하기

// 시작 코드
function solution(s) {
    var answer = '';
    return answer;
}

// 해결 코드
function solution(s) {
    let temp = [...s].sort(function(a,b) {
        if (a > b) return -1;
        if (b < a) return 1;
        return 0;
    });
    console.log(temp);
    
    let res = '';
    temp.forEach((char) => {
        res += char;
    });
    
    let answer = res;
    return answer;
}

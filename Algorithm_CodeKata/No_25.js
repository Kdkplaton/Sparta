// 문제 25 - 나누어 떨어지는 숫자 배열

// 시작 코드
function solution(s) {
    var answer = 0;
    return answer;
}

// 해결 코드
function solution_solved(arr, divisor) {
    let res = "";
    res = arr.filter(num => num%divisor==0);
    if(res == "") res[0] = -1;
    
    console.log("정렬 전: "+res);
    res = res.sort((a, b) => a - b);
    console.log("정렬 후: "+res);
    let answer = res;
    return answer;
}
// 문제 26 - 음양 더하기

// 시작 코드
function solution(absolutes, signs) {
    var answer = 123456789;
    return answer;
}

// 해결 코드
function solution_solved(absolutes, signs) {
    let sum = 0;
    
    for(let i=0; i<absolutes.length; i++) {
        if(signs[i]==true) sum += absolutes[i];
        if(signs[i]==false) sum -= absolutes[i];
    }
    
    let answer = sum;
    return answer;
}
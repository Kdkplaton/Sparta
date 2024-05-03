// 문제 28 - 없는 숫자 더하기

// 시작 코드
function solution(numbers) {
    var answer = -1;
    return answer;
}

// 해결 코드
function solution_solved(numbers) {
    let sum = 0;
    
    for(let i=0; i<numbers.length; i++) {
        sum += numbers[i];
    }
    
    let answer = (45-sum);
    return answer;
}
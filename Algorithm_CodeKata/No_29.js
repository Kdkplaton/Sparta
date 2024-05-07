// 문제 29 - 제일 작은 수 제거하기

// 시작 코드
function solution(arr) {
    var answer = [];
    return answer;
}

// 해결 코드
function solution_solved(arr) {
    let tar = Number.MAX_SAFE_INTEGER;
    tar = Math.min(...arr);
    
    let answer = [];
    if (arr.length == 1) { answer = [-1]; }
    else { answer = arr.filter(value => value!=tar); }
    
    return answer;
}
// 문제 47 - 문자열 내 마음대로 정렬하기

// 시작 코드
function solution(strings, n) {
    var answer = [];
    return answer;
}

// 해결 코드
function solution(strings, n) {
    let temp = strings;
    
    for(let i=0; i<temp.length; i++) {
        temp[i] = temp[i][n] + temp[i];
    }
    
    temp.sort();
    
    for(let i=0; i<temp.length; i++) {
        temp[i] = temp[i].substr(1);
    }
    
    let answer = temp;
    return answer;
}

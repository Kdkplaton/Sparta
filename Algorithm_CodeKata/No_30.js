// 문제 30 - 가운데 글자 가져오기

// 시작 코드
function solution(s) {
    var answer = '';
    return answer;
}

// 해결 코드
function solution_solved(s) {
    let length = s.length;
    let target = '';
    
    let divided = parseInt(length/2);
    if(length%2 == 1) {
        target = s[divided];
    }else if(length%2 == 0){
        target = s[divided-1] + s[divided];
    }
    
    let answer = target;
    return answer;
}

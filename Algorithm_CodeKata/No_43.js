// 문제 43 - 크기가 작은 부분문자열

// 시작 코드
function solution(t, p) {
    var answer = 0;
    return answer;
}

// 해결 코드
function solution(t, p) {
    let len = t.length - p.length;
    
    let parts = [];
    for(let i=0; i<=len; i++) {
        let temp = '';
        for(let j=0; j<p.length; j++) {
            temp += t[i+j];
        }
        parts.push(temp);
    }
    
    let count = 0;
    for(let i=0; i<parts.length; i++) {
        if(parseInt(p) >= parseInt(parts[i])) count++;
    }
    
    let answer = count;
    return answer;
}

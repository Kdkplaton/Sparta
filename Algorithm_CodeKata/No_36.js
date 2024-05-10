// 문제 36 - 문자열 다루기 기본

// 시작 코드
function solution(s) {
    var answer = true;
    return answer;
}

// 해결 코드
function solution(s) {
    let len = s.length;  
    
    let res = true;
    if(len==4 || len==6) {
        for(let i=0; i<len; i++) {
            if(s[i]>'9') res = false;
            console.log(s[i]);
        };
    }
    else { res = false; }
    
    let answer = res;
    return answer;
}

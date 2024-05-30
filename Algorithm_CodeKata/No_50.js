// 문제 50 - 가장 가까운 같은 글자

// 시작 코드
function solution(s) {
    var answer = [];
    return answer;
}

// 해결 코드
function solution(s) {
    let temp = {};
    let res = [];
    
    for(let i=0; i<s.length; i++) { 
        let check = Object.keys(temp).includes(s[i]);
        
        if(check>0) { res.push(i-temp[s[i]]) }
        else { res.push(-1); }
        
        temp[s[i]] = i;
    }
    
    let answer = res;
    return answer;
}

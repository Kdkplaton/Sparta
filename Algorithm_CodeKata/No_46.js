// 문제 46 - 숫자 문자열과 영단어

// 시작 코드
function solution(s) {
    var answer = 0;
    return answer;
}

// 해결 코드
function solution(s) {
    let temp = '';
    let res = '';
    
    let n = ["zero","one","two","three","four","five","six","seven","eight","nine"];
    for(let i=0; i<s.length; i++) {  
        temp += s[i];
        
        if('0' <= temp && temp <= '9') { res+=s[i]; temp=''; }
        else if(n.indexOf(temp)>=0) { res+=String(n.indexOf(temp)); temp=''; }
    }
    console.log(res);
    
    let answer = parseInt(res);
    return answer;
}
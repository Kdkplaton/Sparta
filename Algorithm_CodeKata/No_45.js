// 문제 45 - 시저 암호

// 시작 코드
function solution(s, n) {
    var answer = '';
    return answer;
}

// 해결 코드
function solution(s, n) {
    // A:65, Z:90, z:97, z:122
    let res = '';
    
    for(let i=0; i<s.length; i++) {
        let temp = s[i].charCodeAt();
        console.log(temp);
        
        if(s[i]==' ') { res+=' '; }
        else if(97<=temp && temp<123) {
            if((temp+n)>=123) temp=(temp+n-26); 
            else temp = temp+n;
            res+=String.fromCharCode(temp);
        }
        else if(65<=temp && temp<91) {
            if((temp+n)>=91) temp=(temp+n-26);
            else temp = temp+n;
            res+=String.fromCharCode(temp);
        }
    }
    console.log(res);
    
    let answer = res;
    return answer;
}

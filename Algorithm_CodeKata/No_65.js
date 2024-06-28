// 문제 65 - 문자열 나누기

// 시작 코드
function solution(s) {
    var answer = 0;
    return answer;
}

// 해결 코드
function solution(s) {
    let res = 0;
    for(let i=0; i<s.length; i++) {
        if(i==s.length-1) { res++; break; }
        
        let str_First = s[i];
        let count_First = 1;
        let count_Other = 0;
        
        for(let j=i+1; j<s.length; j++) {
            (s[j]==str_First) ? count_First++ : count_Other++ ;
        
            if(count_First==count_Other) { 
                res++; i=j; break;
            } else if(j==s.length-1) {
                res++; i=j; break;
            }
        }
    }
    
    let answer = res;
    return answer;
}
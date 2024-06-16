// 문제 60 - 기사단원의 무기

// 시작 코드
function solution(number, limit, power) {
    var answer = 0;
    return answer;
}

// 해결 코드
function solution(number, limit, power) {
    let total = 0;
    let count = 0;
    
    for(let i=1; i<=number; i++) {
        count = 0;
        
        for(let j=1; j<=Math.sqrt(i); j++) {
            if(j==Math.sqrt(i)) { count++; } 
            else if(i%j==0) { count+=2; }
            
            if(count > limit) break;
        }
                
        (count > limit) ? total += power : total += count;
    }
    
    let answer = total;
    return answer;
}
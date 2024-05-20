// 문제 42 - 삼총사

// 시작 코드
function solution(number) {
    var answer = 0;
    return answer;
}

// 해결 코드
function solution(number) {
    let count = 0;
    
    for(let i=0; i<number.length-2; i++) {
        for(let j=i+1; j<number.length-1; j++) {
            for(let k=j+1; k<number.length; k++) {
                if(number[i]+number[j]+number[k]==0) count++;
            }
        }
    }
    
    let answer = count;
    return answer;
}
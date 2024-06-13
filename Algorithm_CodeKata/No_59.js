// 문제 59 - 덧칠하기

// 시작 코드
function solution(n, m, section) {
    var answer = 0;
    return answer;
}

// 해결 코드
function solution(n, m, section) {
    let temp = section;
    let count = 0;
    
    for(let i=0; i<temp.length; ) {
        let range = temp[i] + m-1;
        //console.log("start:", temp[i], "range:", range);
        
        if(i+range > temp[temp.length-1]) { count++; break; }
        
        let x = i;
        while(temp[x] <= range) {
            temp.shift();
        }
        //console.log("temp:",temp);
        
        count++;
    }
    
    
    let answer = count;
    return answer;
}
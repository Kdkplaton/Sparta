// 문제 48 - K번째수

// 시작 코드
function solution(array, commands) {
    var answer = [];
    return answer;
}

// 해결 코드
function solution(array, commands) {
    let res = [];
    let temp = [];
    
    for(let i=0; i<commands.length; i++) {
        let start = commands[i][0];
        let end = commands[i][1];
        let target = commands[i][2];
        
        temp = array.slice(start-1, end);
        temp = temp.sort((a, b) => a - b);
        
        res.push(temp[target-1]);
    }
    
    console.log(res);
    let answer = res;
    return answer;
}

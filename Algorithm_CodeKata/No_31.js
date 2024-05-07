// 문제 30 - 가운데 글자 가져오기

// 시작 코드
function solution(n) {
    var answer = '';
    return answer;
}

// 해결 코드
function solution_solved(n) {
    let str = "";
    
    for(let i=0; i<n; i++) {
        if(i%2==0) { str += "수"; }
        else if(i%2==1) { str += "박"; }
    }
    
    let answer = str;
    return answer;
}
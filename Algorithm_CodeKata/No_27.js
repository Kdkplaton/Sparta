// 문제 27 - 핸드폰 번호 가리기

// 시작 코드
function solution(phone_number) {
    var answer = '';
    return answer;
}

// 해결 코드
function solution_solved(phone_number) {
    let temp = '';
    let exposed = '';
    let res = '';
    
    temp = phone_number.substr(0,phone_number.length-4);
    exposed = phone_number.substr(-4);
    
    for(let i=0; i<temp.length; i++) { res += '*'; }
    console.log(res);
    
    res += exposed;
    let answer = res;
    return answer;
}
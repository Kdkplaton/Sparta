// 문제 35 - 부족한 금액 계산하기

// 시작 코드
function solution(price, money, count) {
    var answer = -1;

    return answer;
}

// 해결 코드
function solution(price, money, count) {
    let answer = -1;
    
    let total = 0;
    for(let i=1; i<=count; i++) {
        total += price * i;
    }
    
    (money - total) < 0 ? answer = (total - money) : answer = 0;

    return answer;
}

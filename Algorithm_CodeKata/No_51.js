// 문제 51 - 푸드 파이트 대회

// 시작 코드
function solution(food) {
    var answer = '';
    return answer;
}

// 해결 코드
function solution(food) {
    let temp = [];
    
    temp.push(0);
    for(let i=food.length-1; i>0; i--) {
        let num = Math.floor(food[i]/2);
        for(let j=0; j<num; j++) {
            temp.unshift(i);
            temp.push(i);
        }
    }
    let res = temp.toString().replaceAll(',','');
    
    let answer = res;
    return answer;
}
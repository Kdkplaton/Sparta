// 문제 55 - 카드 뭉치

// 시작 코드
function solution(cards1, cards2, goal) {
    var answer = '';
    return answer;
}

// 해결 코드
function solution(cards1, cards2, goal) {
    let temp = '';
    
    let count1 = 0, count2 = 0;
    let count = 0;
    while(count < goal.length) {
        let chk = goal[count];
        
        if(cards1[count1] == chk) { count1++; }
        else if(cards2[count2] == chk) { count2++; }
        else { temp = 'No'; break; }

        count++;
    }
    if(temp=='') temp = 'Yes';
    
    let answer = temp;
    return answer;
}
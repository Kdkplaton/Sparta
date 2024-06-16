// 문제 61 - 로또의 최고 순위와 최저 순위

// 시작 코드
function solution(lottos, win_nums) {
    var answer = [];
    return answer;
}

// 해결 코드
function solution(lottos, win_nums) {
    let count = 0;
    let available = 0;
    
    for(let i=0; i<6; i++) {
        if(lottos[i]==0) { available++; }
        
        lottos.find((num) => {
            if(num==win_nums[i]) { count++; }
        });
    }
    
    let min=0, max=0;
    (7-count > 6) ? min=6 : min=7-count;
    (7-(count+available) > 6) ? max=6 : max=7-(count+available);
    
    let answer = [];
    answer.push(max);
    answer.push(min);
    return answer;
}
// 문제 20 - 정수 내림차순으로 배치하기

// 시작 코드
function solution(s) {
    var answer = 0;
    return answer;
}

// 해결 코드
function solution_solved(n) {
    let temp = n;
    let res1 = [];
    let res2 = "";
    
    while(temp != 0) {
        res1.push(temp%10);
        temp = parseInt(temp/10);
    }
    let temp_num = 0;
    let len = res1.length;
    for(let j=0; j<len; j++) {
        temp_num = 0;
        for(let i=0; i<res1.length; i++) {
            if(res1[temp_num] < res1[i]) temp_num=i;
        }
        res2 = res2 + res1[temp_num];
        res1.splice(temp_num, 1);
    }
    
    let answer = res2 *1;
    console.log(answer);
    return answer;
}
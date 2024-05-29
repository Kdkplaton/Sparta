// 문제 49 - 두 개 뽑아서 더하기

// 시작 코드
function solution(numbers) {
    var answer = [];
    return answer;
}

// 해결 코드
function solution(numbers) {
    let sum = [];
    for(let i=0; i<numbers.length-1; i++) {
        for(let j=i+1; j<numbers.length; j++){
            sum.push(numbers[i]+numbers[j]);
        }
    }
    let temp = [ ...new Set(sum) ];
    
    let answer = temp.sort((a, b) => a - b);
    return answer;
}

// 문제 10 - 배열의 평균 값

// 시작 코드
function solution(numbers) {
    var answer = 0;
    return answer;
}

// 해결 코드
function solution(numbers) {
    var sum = 0;
    for(var i =0; i<numbers.length; i++) {
        sum += numbers[i];
    }
    var res = sum / numbers.length;
    
    var answer = res;
    return answer;
}

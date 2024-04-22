// 문제 12 - 평균 구하기

// 시작 코드
function solution(num) {
    var answer = 0;
    return answer;
}

// 해결 코드
function solution(arr) {
    var sum = 0;
    for (i=0; i<arr.length; i++) {
        sum += arr[i];
    }
    var res = sum / arr.length;
    
    var answer = res;
    return answer;
}

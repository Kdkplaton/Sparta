// 문제 8 - 각도기

// 시작 코드
function solution(num1, num2) {
    var answer = 0;
    return answer;
}

// 해결 코드
function solution(angle) {
    var res;
    if (0 < angle && angle < 90) {
        res = 1;
    } else if (90 == angle) {
        res = 2;
    } else if (90 < angle && angle < 180) {
        res = 3;
    } else if (180 == angle) {
        res = 4;
    }
    var answer = res;
    return answer;
}

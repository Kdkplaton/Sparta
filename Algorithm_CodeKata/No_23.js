// 문제 23 - 콜라츠 추측

// 시작 코드
function solution(num) {
    var answer = 0;
    return answer;
}

// 해결 코드
function solution_solved(num) {
    let res = num;
    let count = 0;

    while (true) {
        if (num == 1) { count=0; break; }
        if (res % 2 == 0) { res = res / 2; }
        else { res = (res * 3) + 1; }

        count++;
        if (res == 1) break;
        if (count == 500) { count = -1; break; }
    }

    let answer = count;
    return answer;
}
// 문제 33 - 약수의 개수와 덧셈

// 시작 코드
function solution(left, right) {
    var answer = 0;
    return answer;
}

// 해결 코드
function solution_solved(left, right) {
    let res = 0;
    for (let i=left; i<=right; i++) {
        let count = 0;
        for (let j=1; j<=i; j++) {
            if(i%j==0) count++;
        }
        if(count%2==1) res -= i;
        else if(count%2==0) res += i;
    }
    
    let answer = res;
    return answer;
}

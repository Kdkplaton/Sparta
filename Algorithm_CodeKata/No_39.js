// 문제 39 - 최대공약수와 최소공배수

// 시작 코드
function solution(n, m) {
    var answer = [];
    return answer;
}

// 해결 코드
function solution(n, m) {
    // 결과값 저장용 배열 생성
    let res = [];
    
    if(m%n==0) {
        res.push(n);
        res.push(m);
    }else{
        // 최대공약수 구하기
        let tar1 = 1;
        for(let i=2; i<n; i++) {
            if(n%i==0 && m%i==0) { tar1 = i; }
        }
        res.push(tar1);

        // 최소공배수 구하기
        let x = 1;
        while(true) {
            let temp = m*x;
            if(temp % n == 0) { res.push(temp); break; }
            x++;
        }
    }
    
    let answer = res;
    return answer;
}
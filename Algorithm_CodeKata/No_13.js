// 문제 13 - 자릿수 더하기

// 시작 코드
function solution(n)
{
    var answer = 0;

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')

    return answer;
}

// 해결 코드
function solution(n)
{
    var temp = n;
    var sum = 0;
    
    while(temp != 0) {
        sum += temp % 10;
        temp = parseInt(temp/10);
    }
    var answer = sum;

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log(sum)

    return answer;
}

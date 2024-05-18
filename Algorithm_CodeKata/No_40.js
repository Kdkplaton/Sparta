// 문제 40 - 3진법 뒤집기

// 시작 코드
function solution(n) {
  var answer = 0;
  return answer;
}

// 해결 코드
function solution(n) {
  // 10진수 -> 3진수
  let tri = n.toString(3);

  // 3진수 좌우반전
  let temp = '';
  let len = tri.length;
  for (let i = 1; i <= len; i++) {
    temp += tri[len - i];
  }

  // 3진수 -> 10진수
  let deci = parseInt(temp, 3);

  // 결과
  let answer = deci;
  return answer;
}

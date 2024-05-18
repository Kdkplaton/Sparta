// 문제 41 - 

// 시작 코드
function solution(s) {
  var answer = '';
  return answer;
}

// 해결 코드
function solution(s) {
  let words = s.split(' ');

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      // 짝수번째 자리 대문자로
      if (j % 2 == 0) {
        // 대문자면 넘긴다
        if (words[i][j].charCodeAt() < 97) { continue; }

        // **문자열은 중간 변경이 불가능하나 배열은 가능
        let Upper = String.fromCharCode(words[i][j].charCodeAt() - 32);
        words[i] = words[i].split('');
        words[i][j] = Upper;
        words[i] = words[i].join('');
      }
      // 홀수번째 자리 소문자로
      if (j % 2 == 1) {
        // 소문자면 넘긴다
        if (97 <= words[i][j].charCodeAt()) { continue; }

        let Upper = String.fromCharCode(words[i][j].charCodeAt() + 32);
        words[i] = words[i].split('');
        words[i][j] = Upper;
        words[i] = words[i].join('');
      }
    }
  }
  let res = words.join(' ');

  let answer = res;
  return answer;
}
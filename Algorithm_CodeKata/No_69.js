// 문제 69 - 성격유형 검사하기

// 시작 코드
function solution(survey, choices) {
    var answer = '';
    return answer;
}

// 해결 코드
function solution(survey, choices) {
  let scores = {R:0, C:0, J:0, A:0,
                T:0, F:0, M:0, N:0}
  let keys = Object.keys(scores);
  
  for(let i=0; i<survey.length; i++) {

      //console.log(`No.${i+1} ${survey[i][0]}/${survey[i][1]} ${choices[i]}`);
      
      if(choices[i] < 4) { scores[survey[i][0]] += 4-choices[i]; }
      else if(choices[i] > 4) { scores[survey[i][1]] += choices[i]-4; }
      else { continue; }
  }
  //console.log(scores);
  
  let res = '';
  if(scores['R'] >= scores['T']) { res += 'R'; }
  else { res += 'T'; }
  if(scores['C'] >= scores['F']) { res += 'C'; }
  else { res += 'F'; }
  if(scores['J'] >= scores['M']) { res += 'J'; }
  else { res += 'M'; }
  if(scores['A'] >= scores['N']) { res += 'A'; }
  else { res += 'N'; }
  
  //console.log(res);
  let answer = res;
  return answer;
}
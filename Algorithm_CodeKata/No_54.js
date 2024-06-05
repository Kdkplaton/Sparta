// 문제 54 - 2016년

// 시작 코드
function solution(a, b) {
    var answer = '';
    return answer;
}

// 해결 코드
function solution(a, b) {
    let day = ['FRI','SAT','SUN','MON','TUE','WED','THU'];
    
    let days = 0;
    for(let i=1; i<=a; i++) {
        if(a==i) break;
        if(i==2) days += 29;
        if(i==1||i==3||i==5||i==7||i==8||i==10||i==12) days += 31;
        if(i==4||i==6||i==9||i==11) days += 30;
    }
    days += b - 1 ;
    
    let res = day[days%7];
    
    let answer = res;
    return answer;
}
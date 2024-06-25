// 문제 62 - 옹알이 (2)

// 시작 코드
function solution(babbling) {
    var answer = 0;
    return answer;
}

// 해결 코드
function solution(babbling) {
    const words = ["aya","ye","woo","ma"];
    
    let count = 0;
    for(let i=0; i<babbling.length; i++) {
        let temp = babbling[i];

        let checked = -1;
        while(true) {
            if(temp == '') { count++; break; }
            else if(words[0]==temp.substr(0,words[0].length)) {
                if(checked==0) { break; }
                temp = temp.substr(words[0].length);
                checked = 0; continue;
            } else if(words[1]==temp.substr(0,words[1].length)) {
                if(checked==1) { break; }
                temp = temp.substr(words[1].length);
                checked = 1; continue
            } else if(words[2]==temp.substr(0,words[2].length)) {
                if(checked==2) { break; }
                temp = temp.substr(words[2].length);
                checked = 2; continue
            } else if(words[3]==temp.substr(0,words[3].length)) {
                if(checked==3) { break; }
                temp = temp.substr(words[3].length);
                checked = 3; continue
            } else { break; }
        }
    }
    
    let answer = count;
    return answer;
}

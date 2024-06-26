// 문제 63 - 숫자 짝꿍

// 시작 코드
function solution(X, Y) {
    var answer = '';
    return answer;
}

// 해결 코드
function solution(X, Y) {
    const len = (X.length>=Y.length) ? X.length : Y.length ;
    let arrX = Array.from({length:10}, (v,i) => 0);
    let arrY = Array.from({length:10}, (v,i) => 0);
    let result = '';
    let answer = '';
    
    for(let i=0; i<len; i++) {
        switch(X[i]) {
            case '0': { arrX[0] += 1; break; }
            case '1': { arrX[1] += 1; break; }
            case '2': { arrX[2] += 1; break; }
            case '3': { arrX[3] += 1; break; }
            case '4': { arrX[4] += 1; break; }
            case '5': { arrX[5] += 1; break; }
            case '6': { arrX[6] += 1; break; }
            case '7': { arrX[7] += 1; break; }
            case '8': { arrX[8] += 1; break; }
            case '9': { arrX[9] += 1; break; }
            default: { /* Y 보다 길이가 짧음 */ }
        }
        switch(Y[i]) {
            case '0': { arrY[0] += 1; break; }
            case '1': { arrY[1] += 1; break; }
            case '2': { arrY[2] += 1; break; }
            case '3': { arrY[3] += 1; break; }
            case '4': { arrY[4] += 1; break; }
            case '5': { arrY[5] += 1; break; }
            case '6': { arrY[6] += 1; break; }
            case '7': { arrY[7] += 1; break; }
            case '8': { arrY[8] += 1; break; }
            case '9': { arrY[9] += 1; break; }
            default: { /* X 보다 길이가 짧음 */ }
        }
    }
    
    for(let i=9; i>=0; i--) {
        let mult = -1;
        (arrX[i]<=arrY[i]) ? mult=arrX[i] : mult=arrY[i] ;
        for(let j=0; j<mult; j++) {
            result += i;
        }
    }
    
    if(result=='') { answer='-1'; }
    else if(result[0]==0) { answer='0'; }
    else { answer=result; }
    
    return answer;
}

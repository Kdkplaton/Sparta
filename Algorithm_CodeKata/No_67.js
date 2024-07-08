// 문제 67 - 둘만의 암호

// 시작 코드
function solution(s, skip, index) {
    var answer = '';
    return answer;
}

// 해결 코드
function solution(s, skip, index) {
    const alphabets = 'abcdefghijklmnopqrstuvwxyz';
    
    let check = [...alphabets];
    for(let i=0; i<skip.length; i++) {
        check = check.filter((x) => {
            return (x !== skip[i]);
        });
    }
    //console.log(check);
    
    let res = '';
    //console.log('before:', s);
    for(let i=0; i<s.length; i++) {
        let num = check.indexOf(s[i]);
        let end = 0;
        
        end = num + index;   
        (end >= check.length) ? end = end - check.length : end ;
        //console.log(check.length, end);
        
        (end >= check.length) ? res += check[end-check.length] : res += check[end] ;
    }
    //console.log('res:', res);

    let answer = res;
    return answer;
}

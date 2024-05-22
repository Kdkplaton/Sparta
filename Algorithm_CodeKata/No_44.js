// 문제 44 - 최소직사각형

// 시작 코드
function solution(sizes) {
    var answer = 0;
    return answer;
}

// 해결 코드
function solution(sizes) {
    let ordered = [];
    
    for(let i=0; i<sizes.length; i++) {
        let temp = [];
        if(sizes[i][0]>=sizes[i][1]) {
            temp.push(sizes[i][0]);
            temp.push(sizes[i][1]);
        }else{
            temp.push(sizes[i][1]);
            temp.push(sizes[i][0]);
        }
        ordered.push(temp);
    }
    
    let len1_max=0, len2_max=0;
    for(let i=0; i<sizes.length; i++) {
        len1_max<ordered[i][0] ? len1_max=ordered[i][0] : false ;
        len2_max<ordered[i][1] ? len2_max=ordered[i][1] : false ;
    }
    let size = len1_max * len2_max;
    
    let answer = size;
    return answer;
}
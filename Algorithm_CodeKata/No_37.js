// 문제 37 - 행렬의 덧셈

// 시작 코드
function solution(arr1, arr2) {
    var answer = [[]];
    return answer;
}

// 해결 코드
function solution(arr1, arr2) {
    let res = [];
    
    for(let i=0; i<arr1.length; i++) {
        let row = [];
        for(let j=0; j<arr1[0].length; j++) {
            let temp = arr1[i][j] + arr2[i][j];
            row.push(temp);
        }
        res.push(row);
    }
    
    let answer = res;
    return answer;
}
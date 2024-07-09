// 문제 68 - 햄버거 만들기

// 시작 코드
function solution(ingredient) {
    var answer = 0;
    return answer;
}

// 왜 splice는 안되고 stack만 되는가??
// 해결 코드
function solution(ingredient) {
    let count = 0;
    let stack = [];
    
    for(let i=0; i<ingredient.length; i++) {
        stack.push(ingredient[i]);
        let stack_end = stack.length;
        
        if( stack[stack_end-1]==1 && stack[stack_end-2]==3 &&
            stack[stack_end-3]==2 && stack[stack_end-4]==1 )
            { 
                //console.log('stack:',stack);
                for(let j=0; j<4; j++) {
                    stack.pop();
                }
                count++;
                //console.log('count:',count, 'stack_end:',stack_end);
            }
    }

    let answer = count;
    return answer;
}

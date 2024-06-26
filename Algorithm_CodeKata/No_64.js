// 문제 64 - 체육복

// 시작 코드
function solution(n, lost, reserve) {
    var answer = 0;
    return answer;
}

// 해결 코드
function solution(n, lost, reserve) {
    
    lost.sort((a,b) => a-b);
    reserve.sort((a,b) => a-b);
    
    for(let i=0; i<lost.length; i++) {
        let expect = reserve.indexOf(lost[i]);
        if(expect>-1) {
            lost.splice(i,1); 
            reserve.splice(expect,1);
            console.log(`expect i:${i},lost:${lost}`);
            i--; continue;
        }
    }
    
    for(let i=0; i<lost.length; i++) {
        let find = reserve.indexOf(lost[i]-1);
        if(find<0) { find = reserve.indexOf(lost[i]+1); }
            
        if(find==-1) { continue; }
        else {
            lost.splice(i,1); 
            reserve.splice(find,1);
            i--;
        }
        console.log(`lend i:${i},lost:${lost}`);
    }
    console.log('lost:',lost);
    
    let answer = n - lost.length;
    return answer;
}

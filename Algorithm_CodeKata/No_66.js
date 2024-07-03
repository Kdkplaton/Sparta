// 문제 66 - 대충 만든 자판

// 시작 코드
function solution(keymap, targets) {
    var answer = [];
    return answer;
}

// 해결 코드
function solution(keymap, targets) {
    let res = [];    
    let needs = Array.from({ length: targets.length }, () => []);

    for(let i=0; i<targets.length; i++) {
        res[i] = 0;
        let count = 0;

        for(let j=0; j<targets[i].length; j++) {
            let min = 100;
            let min_index = -1;
            
            needs[j] = [];
            
            for(let k=0; k<keymap.length; k++) {
                let chk = keymap[k].indexOf(targets[i][j]);
                needs[j].push(chk);
                
                if(chk == -1) { continue; }
                else if(min > chk) { min=chk; min_index=k; }
            }
            
            if(min_index == -1) { count = -1; break; }
            else { count += needs[j][min_index]+1; }

        }
        res[i] += count;
    }

    let answer = res;
    return answer;
}
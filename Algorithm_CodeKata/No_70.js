// 문제 70 - 바탕화면 정리

// 시작 코드
function solution(wallpaper) {
    var answer = [];
    return answer;
}

// 해결 코드
function solution(wallpaper) {    
    // 반대쪽 끝으로 초기화
    let pos = {luy:0, lux:0, rdy:0, rdx:0};
    pos.lux = wallpaper[0].length;
    pos.luy = wallpaper.length;
    pos.rdx = -1, pos.rdy = -1;
    //console.log('Before luy:',pos.luy,'lux:',pos.lux, 'rdy:',pos.rdy,'rdx:',pos.rdx);
    
    for(let i=0; i<wallpaper.length; i++) {
        for(let j=0; j<wallpaper[i].length; j++) {
            if(wallpaper[i][j] == '#') {
                (pos.lux > j) ? pos.lux = j : null ;
                (pos.luy > i) ? pos.luy = i : null ;
                (pos.rdx <= j) ? pos.rdx = j+1 : null ;
                (pos.rdy <= i) ? pos.rdy = i+1 : null ;
            }
            else { continue; }
        }
    }
    //console.log('After luy:',pos.luy,'lux:',pos.lux, 'rdy:',pos.rdy,'rdx:',pos.rdx);
    
    //console.log(pos);
    let answer = Object.values(pos);
    return answer;
}
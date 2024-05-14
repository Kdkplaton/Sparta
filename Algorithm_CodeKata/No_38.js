// 문제 38 - 직사각형 별찍기

// 시작 코드
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    console.log(a);
    console.log(b);
});

// 해결 코드
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    
    for(let i=0; i<b; i++) {
        let row = '';
        for(let j=0; j<a; j++) {
            row += '*';
        }
        console.log(row);
    }
});
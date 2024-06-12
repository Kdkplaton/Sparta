// 문제 58 - 소수 만들기

// 시작 코드
function solution(nums) {
    var answer = -1;
    
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')
    
    return answer;
}

// 해결 코드
function solution(nums) {
    let answer = -1;
    
    let count = 0;
    for(let i=0; i<nums.length-2; i++) {
        for(let j=i+1; j<nums.length-1; j++) {
            for(let k=j+1; k<nums.length; k++) {
                let sum = nums[i]+nums[j]+nums[k];
                let chk = 0;
                for(let x=2; x<sum; x++) {
                    if(sum%x == 0) { chk=-1; break; }
                }
                if(chk == -1) continue;
                else count++;
            }
        }
    }
    
    answer = count;
    return answer;
}
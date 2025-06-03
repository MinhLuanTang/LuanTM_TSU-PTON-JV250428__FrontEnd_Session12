let count = 1;
let check = 0;
console.log('Day 20 so nguyen to dau tien la: ');
    for (let i = 0; i < 9999 && count<21; i++){
        if (i <= 1) {
            continue;
        } else if (i === 2) {
            console.log(`So nguyen to thu ${count} la: ${i}`);
            count++;
        } else {
            for (let j = 0; j <= i; j++){
                if (i % j === 0) {
                    check++;
                }
            }
            if (check === 2) {
                console.log(`So nguyen to thu ${count} la: ${i}`);
                check = 0;
                ++count;           
            } else {
                check = 0;                
            }
       }
        
        
    }

let number1 = 0;
let number2 = 1;
let total = 0;
let count = 1;
let check = true;
console.log(`day 20 so dau tien fibonacci: `)
while (true) {
    if (count < 21) {
        count++;
        total = number2 + number1;
        number2 = number1;
        number1 = total;
        console.log(total);        
    } else {
        break;
    }
}
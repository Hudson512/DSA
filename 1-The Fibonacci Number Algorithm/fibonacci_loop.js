console.log("Fibonacci Sequence using Loop");

let num1 = 0;
let num2 = 1;

for(let i = 0; i < 10; i++) {
    console.log(num1);
    let nextNum = num1 + num2;
    num1 = num2;
    num2 = nextNum;
}
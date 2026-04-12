const num1 = 400.5;
console.log(num1);

const num2 = new Number(200);
console.log(num2);
let valueinString = num2.toString();//two ways
console.log(valueinString.length);
console.log(num1.toString().length);
console.log(num1.toFixed(2));
console.log(num1.toPrecision(3));
const hundreds = 1000000
console.log(hundreds.toLocaleString('en-In'));
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log(Math);
console.log(Math.min(2,3,4,5));
console.log(Math.max(2,4,5,6));
console.log(Math.ceil(4.3));
console.log(Math.floor(4.9))
console.log(Math.random());//value bw 0-1
console.log(Math.random()*10 + 1);//vaalue bw 1-10
const min = 20;
const max = 30;
console.log(Math.floor(Math.random() * (max - min + 1)) + min)

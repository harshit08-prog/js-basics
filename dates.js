let  myDate = new Date();
console.log(myDate)
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
let newDate = new Date(2023,0,9,5,6)
console.log(newDate.toString());
let otherDate = new Date("2023-9-7");
console.log(otherDate.toLocaleString());
let myTimeStamp = Date.now()//bs timestamp ayega isse
console.log(myTimeStamp)
//to get seconds just do
console.log(Date.now()/1000);
console.log(Math.floor(Date.now()/1000));
console.log(newDate.getMonth());
//this localestring is itself a object hence customizations hosktih isme
Date.toLocaleString('default'),{
    weekday:"long"
}
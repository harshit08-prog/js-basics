const name = 'harshit';
const repocount = 3
console.log(`my name is ${name} and my repocount is ${repocount}`);//string interpolation
//to access key value
const name1 = new String("harshit")
console.log(name1[1]);
console.log(name1.length);
console.log(name1.__proto__);
console.log(name1.toUpperCase());//these are different functions
console.log(name1.charAt(1));
console.log(name1.indexOf('s'));
console.log(name1.lastIndexOf('s'));
console.log(name1.slice(0,4));
console.log(name1.replace('har','jar'));
const name2 = name1.substring(0,4);
console.log(name2); 
const name3 = '     harshit      '
console.log(name3.trim());//remove unwanted spaces from start and end of the string
const name4 = "harshit/chaudhary"
console.log(name4.replace('/','-'));
 console.log(name4.includes('chaudhary'));//returns true if the string contains the specified value
console.log(name4.split('/'));//returns an array of substrings split by the specified separator
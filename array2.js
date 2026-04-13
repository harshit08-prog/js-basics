const marvel = ['ironman','spidey','cap'];
const dc = ['batman', 'superman','flash'];
//marvel.push(dc);
//console.log(marvel);
//console.log(marvel[3][2]);
//another way to access particular element is concatenate
const newarr = marvel.concat(dc);
console.log(newarr);
//another way is by spreading
const newarr2 = [...marvel,...dc];
console.log(newarr2)//its better than concat
//now comes flat 
const newarr3 = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const newarr4 = newarr3.flat(Infinity)
console.log(newarr4);
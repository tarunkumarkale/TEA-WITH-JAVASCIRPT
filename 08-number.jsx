
let score=400 

console.log(score) //400

// object number

let objNum=new Number(score) 

console.log(objNum) //[Number: 400]

console.log(typeof objNum) // object

// let check new more propeety

console.log(objNum.toString())// 400 back to convert it into string
// why we convert it to string beacuse we can apply stiring properties  convert it into array or check lenght

console.log(objNum.toString())// 400 back to convert it into string
console.log(objNum.toString().split()) // inside parathiese we dont apply any thing output [ '400' ]
console.log(objNum.toString().length) // 3

// i wiil give u proper  exple of string to arrray
let str1="tarun , kale,kumar"

console.log(str1.split(','))//[ 'tarun ', ' kale', 'kumar' ]

let str2="tarun | kale | kumar"
console.log(str2.split('|'))//[ 'tarun ', ' kale', 'kumar' ]


let str3="tarun  kale  kumar"
console.log(str3.split(''))//[
//     't', 'a', 'r', 'u', 'n',
//     ' ', ' ', 'k', 'a', 'l',
//     'e', ' ', ' ', 'k', 'u',
//     'm', 'a', 'r'
//   ] 

// : parathses  ke under jo bhi hoga us hisab break hoga

let balance=56.89765

console.log(balance.toFixed(2))//56.90  // after .point kitni value show krni  type string hai
console.log(balance.toFixed(1))//56.9   // type string

console.log(balance.toPrecision(1)) //6e+1  hua kya vo try kr rha ki one lenght value lane ki
console.log(balance.toPrecision(2))//57  round up kr diya taki two value aa sake


let data=typeof balance.toPrecision(2)
console.log(data) // string de rha hai

// jab apko zero padne yaa big value repted hoti hai usko padne dikhat hoty tab use krte hai
let bigbalance=1000000

console.log(bigbalance.toLocaleString() )//1,000,000 like this  BUT AMERICAN STANDARD BUT I WANT INDAN
console.log(bigbalance.toLocaleString('EN-IN'))// ENABLE INDIAN   10,00,000


///////////////////////////mATHS/////////////////////////////

console.log(Math)  // math ek library hai  and ek object hai jiske under proprty aty hai
console.log(Math.abs(-9)) // 9   only -ve value ko positive hai  not -vice versa
console.log(Math.round(9.8987)) // 10   
console.log(Math.ceil(9.8987)) // 10   
console.log(Math.floor(9.8987)) // 9
console.log(Math.min(9,7,8)) // 7
console.log(Math.max(9,7,8)) // 9
console.log(Math.trunc(78.97)) // 78 remove after point
console.log(Math.cos(45).floor()) // not work concat propty here

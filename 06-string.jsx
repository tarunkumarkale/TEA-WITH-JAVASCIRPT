//`` called   backticks   or we can say string interpolation
let name='tuarn '
console.log(` hello ${name}`)

const gameName=new String ('tarun')
console.log(typeof gameName)  // object

//  Simple bhaasha me:

// javascript
// Copy code
// const gameName = new String('tarun');
// Yeh ek String object banata hai, jo ek non-primitive type hai.

// Key Points:
// new String('tarun'):

// Ek object banata hai, jo string ko wrap karta hai.
// Yeh primitive string ('tarun') se alag hota hai.
// Primitive vs Object String:

// javascript
// Copy code
// const str1 = 'tarun';          // Primitive string
// const str2 = new String('tarun'); // Object string
// typeof str1 -> "string"
// typeof str2 -> "object"
// Kyu Use Karte Hain?
// Aam taur par primitive string hi use hoti hai, kyunki yeh fast aur lightweight hoti hai. Object strings rarely use hote hain.

// Recruiter Ke Liye Short Answer:
// new String('tarun') ek object banata hai, jabki 'tarun' ek primitive string hoti hai. Primitive zyada efficient aur common hai.



// eska ager console  kare to     hume esa miliga    
//  ex 0:t ,1:a ,2:r  etc    in key vlaue form 
 // inspect me dekhna


// to mujhe esa dekega 
// String {'tarun'}        aur jab me portotype cklick karuga to mujhe etni sari property miligi string ki
// 0
// : 
// "t"
// 1
// : 
// "a"
// 2
// : 
// "r"
// 3
// : 
// "u"
// 4
// : 
// "n"
// length
// : 
// 5
// [[Prototype]]
// : 
// String
// anchor
// : 
// ƒ anchor()
// at
// : 
// ƒ at()
// big
// : 
// ƒ big()
// blink
// : 
// ƒ blink()
// bold
// : 
// ƒ bold()
// charAt
// : 
// ƒ charAt()
// charCodeAt
// : 
// ƒ charCodeAt()
// codePointAt
// : 
// ƒ codePointAt()
// concat
// : 
// ƒ concat()
// constructor
// : 
// ƒ String()
// endsWith
// : 
// ƒ endsWith()
// fixed
// : 
// ƒ fixed()
// fontcolor
// : 
// ƒ fontcolor()
// fontsize
// : 
// ƒ fontsize()
// includes
// : 
// ƒ includes()
// indexOf
// : 
// ƒ indexOf()
// isWellFormed
// : 
// ƒ isWellFormed()
// italics
// : 
// ƒ italics()
// lastIndexOf
// : 
// ƒ lastIndexOf()
// length
// : 
// 0
// link
// : 
// ƒ link()
// localeCompare
// : 
// ƒ localeCompare()
// match
// : 
// ƒ match()
// matchAll
// : 
// ƒ matchAll()
// normalize
// : 
// ƒ normalize()
// padEnd
// : 
// ƒ padEnd()
// padStart
// : 
// ƒ padStart()
// repeat
// : 
// ƒ repeat()
// replace
// : 
// ƒ replace()
// replaceAll
// : 
// ƒ replaceAll()
// search
// : 
// ƒ search()
// slice
// : 
// ƒ slice()
// small
// : 
// ƒ small()
// split
// : 
// ƒ split()
// startsWith
// : 
// ƒ startsWith()
// strike
// : 
// ƒ strike()
// sub
// : 
// ƒ sub()
// substr
// : 
// ƒ substr()
// substring
// : 
// ƒ substring()
// sup
// : 
// ƒ sup()
// toLocaleLowerCase
// : 
// ƒ toLocaleLowerCase()
// toLocaleUpperCase
// : 
// ƒ toLocaleUpperCase()
// toLowerCase
// : 
// ƒ toLowerCase()
// toString
// : 
// ƒ toString()
// toUpperCase
// : 
// ƒ toUpperCase()
// toWellFormed
// : 
// ƒ toWellFormed()
// trim
// : 
// ƒ trim()
// trimEnd
// : 
// ƒ trimEnd()
// trimLeft
// : 
// ƒ trimStart()
// trimRight
// : 
// ƒ trimEnd()
// trimStart
// : 
// ƒ trimStart()
// valueOf
// : 
// ƒ valueOf()
// Symbol(Symbol.iterator)
// : 
// ƒ [Symbol.iterator]()
// [[Prototype]]
// : 
// Object
// [[PrimitiveValue]]
// : 
// ""
// [[PrimitiveValue]]
// : 
// "tarun"

let strin='taurn'

console.log(strin.charAt(0))// it tell zero pe konsa charater

console.log(strin.indexOf('a'))
console.log(strin.substring(0,2)) // here it is not start with - vlaue  and  2  end not work means   two is not avillable   output is  t a      not  r  

console.log(strin.slice(0,3)) // smae it give out put tar not n     and also it take -ve vlaue 

console.log(strin.slice(0,-1))  // taur

let namee='kalejkldsjfkljsdaf'

// Extract from the second-to-last character to the end:
console.log(namee.slice(-2)); // "un"

// Extract the last two characters:
console.log(namee.slice(-2, namee.length)); // "un"


// slice always start left to right if postive or negativer

let spacestrin="   taurn    "

console.log(spacestrin.trim()) // tarun
console.log(spacestrin) //              tarun

let url='https;// jdfskjklsdjfkljsdafj'

console.log(url.replace('jdfskjklsdjfkljsdafj','taurn kale'))   //
https;// taurn kale

let elderbrother=


console.log()
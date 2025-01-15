// object ko declare krne 2 tarike hote first literal second constructoreke through jise singleton bhi bolte hai

// simple example singleton ka in constructore
// object.create
// imp point  normal object banate hai tbh  means literal   ke through banate hai auger constructor ke throgh banate hai to single ton  hota hai
// but we use normal object means  object literal 

const JSuser={
    name:'raeun',
    age:'67',
    email:'tarunkale01@gmail.com',
    arra:['raun','jdskjkaf','kjdkjf'],

    "fanme":"tarun",   // both string di then how we can acces it
    }

//name is key  and  raeun is value
// we can wrap name by using string and both are same
// but problem yeh hai ki string me already key me phele se define hai chahe to likho  ex  "name'"otherwise  simple name likho   bss etna hi 

// two way we can acces symbol
console.log(JSuser.name)
console.log(JSuser["name"])  // yeh dusra tarikha hai ese apan defien krte hai  
console.log(JSuser["fanme"])  // here we acces  

// now symbol ke bare me dekhte hai   means symbol ek type hai  jo unique ness ko batata hai

// inteview yeh puchja jata hai ki app  symbol ko ass a key kese prnit krte hai 

const newsymb= Symbol ("key1")   // yah pe normal sa varible decalre kiya mene and usko convert kr diya as a symbol  value  kuch bhi ho sakti hai   

const newsym= Symbol ("key1")   // yah pe normal sa varible decalre kiya mene and usko convert kr diya as a symbol  value  kuch bhi ho sakti hai   

const objforSymbol={
name:'taurn',
newsymb:'test1',// now we use key as a symbol  esko acces kiya to vlaue sahi de raha but type symbol hai
[newsym]:'test1'// proper corret hai 
} 

console.log(objforSymbol.newsymb) // test1  aya hai bss badiya to kuch spacial to hai hi nahi   but doubt hai 
console.log(typeof objforSymbol.newsymb) // string     arre me to  symbol define kiya tha  
console.log(objforSymbol[newsym]) // test1    arre me to  symbol define kiya tha  
console.log(typeof objforSymbol[newsym]) // 





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Step 1: Ek Symbol banate hain
const newsymb = Symbol("key1"); // newsymb ek unique Symbol hai
const newsym = Symbol("key1");  // newsym ek aur unique Symbol hai (ye dono alag-alag hain)

// Step 2: Ek object banate hain jisme keys aur values rakhenge
const objforSymbol = {
    name: 'taurn',            // Simple key "name" with value 'taurn'
    newsymb: 'test1',         // Ye ek normal string key hai "newsymb"
    [newsym]: 'test1'         // Yaha ek Symbol (newsym) ko key banaya hai, jo unique hai
};

// Step 3: Object ke different keys ko access karte hain

// 1. String key "newsymb" ko access karna
console.log(objforSymbol.newsymb); // Output: 'test1' (ye ek normal string key hai)
console.log(typeof objforSymbol.newsymb); // Output: 'string' (value ka type string hai)

// 2. Symbol key "[newsym]" ko access karna
console.log(objforSymbol[newsym]); // Output: 'test1' (Symbol key ka value)
console.log(typeof objforSymbol[newsym]); // Output: 'string' (value ka type string hai)
console.log(typeof newsym); // Output: 'symbol' (key ka type symbol hai)

//////////////////////////////////////////////////////////////////////////

// here we change and update value  of object 

let objectcheck={
    fname:'taurn',
    middle:'kumar',
    lname:'kale'
}

// first i have to acces 
console.log(objectcheck.fname)
console.log(objectcheck["fname"])

// now update particular
objectcheck.fname='deepak'
 
// me chata hu ki mera object kuch bhi update naa ho to kya karege

Object.freeze(objectcheck)
// eske baad kuch changes krne ki ki try karuha to chnge nahi hoga


// mujhe abb objectke under function add krna hi bss
//inside object

objectcheck.Fun=()=>{
    console.log('hell')
}

console.log(objectcheck.fun)// hell






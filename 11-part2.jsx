
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

// Object.freeze(objectcheck)
// eske baad kuch changes krne ki ki try karuha to chnge nahi hoga


// mujhe abb objectke under function add krna hi bss
//inside object

objectcheck.Fun=()=>{
    console.log('hell')
}

// console.log(objectcheck)

// // {
//   fname: 'deepak',
//   middle: 'kumar',
//   lname: 'kale',
//   Fun: [Function (anonymous)]
// }


 console.log(objectcheck.Fun) //Fun: [Function (anonymous)]

console.log(objectcheck.Fun())  //hell   aa raha hai then indefined yeh javascript hai not react


// this concpet 
// objectcheck.fun2=()=>{
//      console.log(`hello ${this.fname}`)

// }  // arraow function not work in this concept
objectcheck.fun2 = function () {
    console.log(`hello ${this.fname}`);
};

console.log(objectcheck.fun2())



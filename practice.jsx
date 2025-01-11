const first='48ii'
console.log(first);
let second= Number(first)
console.log(typeof second)
console.log(second) 

console.log(typeof null);
const nullcheck=null;
let third= Number (nullcheck)
console.log(typeof third)
console.log(third)   // it give output zero after conversion into number means real null empty khali hota but uske ek esa object jo khali puri tarah se na koi garbage value naa koi other stuff


let num=56
console.log(num)
let numConvert=String(num)
console.log(numConvert)
let start=typeof numConvert
console.log(start); //string

console.log('1'+3+2)
console.log(1+'3'+2)
console.log(1+3+'2')

let x=8
let y=x++ ;
console.log(`${x}  and  ${y}`)
let z=8
let a=++z;
console.log(`${z}  and  ${a}`)


const gameName = new String('tarun');

console.log(gameName)
console.log(typeof gameName)


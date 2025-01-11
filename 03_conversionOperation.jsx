let score ="33"

console.log(typeof score)
console.log(typeof(score))

// both are same


// start converion
let vlaueInNumber=Number(score)

console.log(typeof(vlaueInNumber)) // it output is number but it show a number or not,  means kya yeh realy ek number hai kya 
console.log(vlaueInNumber)  // yeh output de raha hai number ka

let data="98A"  // yeh kya hai number ki string

console.log(typeof(data))  // string
let newDatatype=Number(data)// 
console.log(typeof(newDatatype)) // number bata raha hai
console.log(newDatatype)// NaN      yeh kya hai yaar   yeh to number show  kr rah tha  realty eske NaN nikla hai yeh javascirpt ka issue hai esliye log type script ka use krte hai js me strict check nahi hai





console.log('descruiptma')



const newdatavalue=null
console.log(newdatavalue) // null
console.log(typeof newdatavalue) // object
let SecondnewValue=Number(newdatavalue)
console.log(typeof SecondnewValue) // number
console.log(SecondnewValue) //0


const newInvestigatevalue=undefined
console.log(newInvestigatevalue)  // undefined
console.log(typeof newInvestigatevalue)//undefined
let SecondnewinvstigateValue=Number(newInvestigatevalue)
console.log(typeof SecondnewinvstigateValue) // number
console.log(SecondnewinvstigateValue)  //Nan


console.log('Boolean')

const newBoolean=true
console.log(newBoolean)  // true
console.log(typeof newBoolean)//boolean
let SecondBollean=Number(newBoolean)
console.log(typeof SecondBollean) // number
console.log(SecondBollean)  //1


let Name='hitesh'
console.log(typeof Name) //string
let convert =Number (Name)
console.log(typeof convert) // number
console.log(convert) //nan


// when number coversion 
// '33'=== covert to number it type show number and output aslo number consol.log
// '33abc'===covert type show number not output show number  it show NaN
//true  output == 1
// false output ==0


// now convert to boolean  

console.log('boolean coversoion')

let boo=1
// i want it show true
let booleanconvert=Boolean(boo)
console.log(booleanconvert) // true

// same you can do for String

let num=56
console.log(num)
let numConvert=String(num)
console.log(numConvert)
let start=typeof numConvert
console.log(start); //string



// ==============  operation=============
//2 +2  is exp for operation  means math perform called operation
let value =3
let negValue=-value
console.log(negValue)  // obviiously -vlaue

// this called operation  

console.log(2+2)
console.log(2/2)
console.log(2**2)  // 2power 2
console.log(2%2)

let str1='hello'
let str2=' tarun '
let str3= str1+str2
console.log(str3)

console.log("1"+2) // output 12
console.log(1+"2") // output 12
console.log("1"+2+2) // output 122
console.log(1+2+"2")  // output of code 32

// code start to read from left to right  first if it see string  then convert to string all othervise number  then add

// prefix

// int x = 5;
// int y = ++x; // x becomes 6, then y = 6

//postfix
// int x = 5;
// int y = x++; // y = 5, then x becomes 6


// comparision 
console.log(2>1)  //true
console.log(2>=1)//false
console.log(2!=1)//false

// when we get problem with camparison with datatype

console.log("2">0)  // true 

//  imp yeh hai ki jab app comparision check krte hai tabh  kossh yehi krni chaiye ki datatype must be equal

console.log(null==0) // not true
console.log(null >=0) // true
console.log(null > 0)  // not true

// yeh kya to javascript app esko unpredictable result me aate hai 

console.log(undefined==0) // not true
console.log(undefined >=0) // not true
console.log(undefined < 0)  // true


// ===
  // check value with data type
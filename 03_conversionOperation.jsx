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

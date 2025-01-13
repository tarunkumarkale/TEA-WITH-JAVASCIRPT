// it take time from 1 jan 1970

console.log(new Date().toLocaleString())
console.log(new Date().toLocaleTimeString())
console.log(new Date())
console.log(new Date().toJSON())

let checTypeofdate=new Date().toLocaleTimeString()//string

let checkdateobj=new Date()

console.log(typeof checTypeofdate)
console.log(typeof checkdateobj)//object

let myCreatedDate=new Date(2023,0,23)  //month  start from zero
// in india we follow mm/dd/yyyy
//let myCreatedDate=new Date("01-14-2024")  // we follow this 
console.log(myCreatedDate.toLocaleTimeString())
console.log(myCreatedDate.toLocaleString())


// jese time stamp ko kab use krte hai tab jabh apan quiz ke liye menas ek question kitna time lagega
const timestamp=Date.now() // it also give you time

console.log(timestamp)  //1736747231088   WE GOT in millisecond


// jese mene room book ajj 1/10/2025   
// mujhe date or time ke hisab se pay krna after room chodne ka to kese karuge 
// maan lo mene  ajj room choda 1/13/2025

let rommbookeddate=new Date("01-10-2025")  // indian style

console.log(rommbookeddate.getDate())

let priceofEachDate=1000

let realseDate=new Date().getDate()/// new date ek object hai useke under bhut sare method attae hai getdate  etc new usko store kreke rakhta mthod ko
console.log(realseDate)

console.log(`${(realseDate-rommbookeddate.getDate())*1000}`)



//  all time  yeh data milli second me milti hai  jese ki data   new date()    , date.now()  yeh ek es

console.log(new Date()-Date.now())  //0  yeh show krta hai ki dono ek hi hai 

// mujhe second me convet krna hai milli second ko

console.log( Math.floor(new Date()/1000))  // give in second 
console.log( Math.trunc(new Date()/1000))  // give in second






/// one of the best project  about  tumhari age se leker  kitna din , age, min ji liya tumne vo task perform karu
// Date of birth
let dob = new Date("1998-01-23");

// Current date
let now = new Date();

// Calculate the difference in milliseconds
let differenceInMilliseconds = now - dob;

// Convert milliseconds to days
let daysLived = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));

let hourLived=Math.floor(differenceInMilliseconds / (1000 * 60  *60))

console.log(`You have lived approximately ${daysLived} days. hour ${hourLived}`);


// you already know that for month start from 0 not 1
// for    new Date().getmonth()+1
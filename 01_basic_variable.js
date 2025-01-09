//   variable ka matlab hai ki memeory jagah banau when const , let ,var jese keyword mille tabh 
// abh hota hai  .txt  me .js  me  softwear  dono ek hi but softwear enter .txt ya .js me 
// dekega arrya txt file me yeh kya hai console.log  but .js dekhega acha yeh console.log  keyword eska matlab screen ke inspect me dikhana hai 
const accountId=144553          // second word first charcter should captial  for me
let accountEmail='taurnkale01@gmail.com'
var  accountPassword='12345'
accountCity='jaipur'  // esa bhi varible declare kr skte hai kaam karega but dont use as devleopr
let account ;
// console.log(account)  //   undefined

// now start changes

// accountId=2     // apan ne change ke liye likh diya hai  but change hoga kya   esko analyze krne ke liye node js use hota hai   // yeh not allow hai

console.log(accountId);   //TypeError: Assignment to constant variable


//  👿 tumhe broweser jake inscript ke jarurat nahi padegi agar tum yeh kariu to 
  //   node 01_basic_varibel.js terminal me likh dena

// chalo abh sabke sath invetigate krt hai 

// accountId=198         // second word first charcter should captial  for me
 accountEmail='taurnka@gmail.com'
accountPassword='1'

// yeh sabh ko to consolo.log nahi kr sakta hu me ek ek kr  krke behter  yehi hoga ki  ek sath console ke through dikha du

console.table([accountEmail,accountPassword,accountCity])  // accouncity bhi kaam nahi krni chaiye butt kaam kr raha hai  kyu
// node file name weite inside trminal
// we get output inside termianl in table form 

//{}  scope means curly braces  initail time me problem thi 

/*  prefer not use var    beause   of issue in block scope means curly braces  and functional scope */
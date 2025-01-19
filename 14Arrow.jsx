// this keyword ka use 
// this point to current  context (context ka matlab hai uski vlaue)  means below current context is user   
const user={
    usename:'taurn',
    price:'34',

    welcomeMessage:function(){
        console.log(`${this.usename}  ${this.lname} `)
        // console.log(this)  it refer to user ke under ki vlaue means context
    }

};
user.welcomeMessage()  // tarun

user.usename='deep'  
user.lname='kale'

user.welcomeMessage()  // deep  kale



///////////////////////////////////////////

console.log(this)  // empty object
// but ese to global show krna tha  nahi to window show krna tha 

// 👿   hota kya phele ki browser ke under means  inspect krke javascript likhi jaty thi   uske under  javascript ka engine rahta tha but  abh esa ho gaya ki javascript jo jo alag naam se code editor use kerte hai  stand to vo browser ka window  code editor show nahi hota 
// simple bhasa me agar code edtiore likhu        this      it  repest to empty object bsss
//   this    use karu for   inspect me    yeh   window   borwoser ki all property ko khol dega    menas   brwoser ka engine khol dega puri  property  like   exple of perty form sumbit  , hover  etc


function  chai(){
console.log(this)
}

chai()//  objecect global show kr raha jab  me kisi function under this ko call krta hu   normal  global me this ko call kiya to  empty object dega


console.log('kjdfjkldsjafkljdasjfkldjzasfklj')
const Arrow=()=>{
    console.log(this)
}

Arrow()  // empty object



///////
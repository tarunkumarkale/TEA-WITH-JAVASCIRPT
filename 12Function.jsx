const calculatedpraice=(...rest)=>{
    return rest
}

console.log(calculatedpraice(200,300,400))  //[200,300,400]
const calculated=(num1,num2,...rest)=>{
    return rest
}

console.log(calculated(200,300,400,679))  //[400,679]
// num1 =200  num2=300

//...rest   called rest opertaor  or called spread operator

// singleton  object constructor
//const tinderuser=new object()  // ex ple constructor object

// normal object called literal

const tinder={}

tinder.name='taurn'
tinder.age=45

console.log(tinder)  //{ name: 'taurn', age: 45 }
const data = {
    fulldata: 'true',
    fullname: {
        fname: 'tarun',
        lastname: {
            lname: 'kale',
            qualificationTime: [2014, 2016, 2020],
            fun: function () {
                return `hello tarun ${this.lname}`; // `this` refers to `lastname`

            },
            fennn:function(){
                return `hello kale${data.fulldata}`
            }
        }
    }
};


console.log(data?.fullname?.lastname?.qualificationTime[2]); // Logs: 2020
console.log(data?.fullname?.lastname?.fun()); // Logs: hello tarun kale
console.log(data?.fullname?.lastname?.fennn()); // hello kaletrue


const obj6={
    name:'tarun'
}
const obj4={
    name:'kale'
}

let obj5={...obj4,...obj6}
console.log(obj5)// {name:'kale}  why beacuse it overwite name





const obj1={
    name:'tarun'
}
const obj2={
    lname:'kale'
}

let obj3={...obj1,...obj2}
console.log(obj3)// {name:'taurn',lname:'kale'}





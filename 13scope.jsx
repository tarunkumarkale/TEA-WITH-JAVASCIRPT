// //{}  == curly braces (scope)  but  yeh kisi function ke sath ata hai yaa if ealse ke sath ata tabh esko scope bolte hai

// // but ager kisi  object ke sath ata hai tabh esko object decaltion bolte hai


// Difference Between var, let, and const (With Code Examples)
// Scope:

// var is function-scoped or globally scoped, ignoring block scope.
// let and const are block-scoped, confined to the block in which they are defined.
// javascript
// Copy
// Edit
// var hello=45
// if (true) {
//     var x = "I'm a var"; // Accessible outside the block
//     let y = "I'm a let"; // Block-scoped
//     const z = "I'm a const"; // Block-scoped
//     var hello=49
// }
// console.log(x); // Works: "I'm a var"
// // console.log(y); // Error: y is not defined // console.log(z); // Error: z is not defined
// console.log(hello)// 49
// csharp
// Copy
// Edit

// 2. **Re-declaration**:
// - `var` can be re-declared in the same scope.
// - `let` and `const` cannot be re-declared in the same scope.

// ```javascript
// var a = 10;
// var a = 20; // Allowed with var

// let b = 10;
// //    let b = 20; // Error: Identifier already declared

// const c = 10;
// //    const c = 20; // Error: Identifier already declared
// Hoisting:

// var is hoisted and initialized to undefined.
// let and const are hoisted but remain uninitialized until their declaration.
// javascript
// Copy
// Edit
// console.log(d); // undefined (var is hoisted)
// var d = 10;
// // console.log(e); // Error: Cannot access 'e' before initialization let e = 20;

// // console.log(f); // Error: Cannot access 'f' before initialization const f = 30;

// csharp
// Copy
// Edit

// 4. **Mutability**:
// - `var` and `let` allow reassignment.
// - `const` does not allow reassignment, but its contents (e.g., objects or arrays) can be mutated.

// ```javascript
// var g = 10;
// g = 20; // Allowed

// let h = 10;
// h = 20; // Allowed

// const i = 10;
// //    i = 20; // Error: Assignment to constant variable

// const obj = { key: "value" };
// obj.key = "new value"; // Allowed: Object properties can be changed


// // 👿 koi bhi chich app globl scope se to block scope me access kr sakte hai but oppsite not possible 

// let tarun='name'

// const hello=()=>{  //=>  block scope
//     console.log(tarun)  // it is acces from global scope
// }

// hello()




///////////////////nested scope

var outer='hello'
let nestedscope=()=>{
    const username='taurn'
    const funtwo=()=>{
        const website='youtube'
        console.log(username)
    }
// console.log((website));   // under se bhar  cant acces vise versa possible
funtwo()
}

nestedscope()

// nested function wo hote jisme parent  function ko acces kiy ajata hai child se not ulta possible hai



A function without a name in JavaScript is called an anonymous function. Anonymous functions are often used as arguments to other functions, as immediately invoked function expressions (IIFEs), or assigned to variables.

Here’s a simple example:

Example 1: Anonymous function assigned to a variable
javascript
Copy
Edit
const greet = function() {
    console.log("Hello, World!");
};

greet(); // Output: Hello, World!
Example 2: Anonymous function as an argument
javascript
Copy
Edit
setTimeout(function() {
    console.log("This message is delayed by 1 second.");
}, 1000);
Example 3: Anonymous function as an IIFE
javascript
Copy
Edit
(function() {
    console.log("This function runs immediately!");
})();
These functions are called anonymous because they lack a name identifier, but they are still useful for temporary or single-use purposes.








You said:
first exple is anonumous function expresiion
ChatGPT said:
ChatGPT
You're absolutely correct! In the first example:

javascript
Copy
Edit
const greet = function() {
    console.log("Hello, World!");
};

greet(); // Output: Hello, World!
This is specifically an anonymous function expression, because:

It is a function without a name (anonymous).
It is assigned to a variable (greet), making it an expression.
To clarify:

Function Declaration: A named function defined independently.
javascript
Copy
Edit
function greet() {
    console.log("Hello, World!");
}
Function Expression: A function (named or anonymous) assigned to a variable or used in another expression.
The first example falls under the second category, as you pointed out. Let me know if you'd like further clarification! 😊









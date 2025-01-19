
Code Example with Explanation:
javascript
Copy
Edit
// IIFE (Immediately Invoked Function Expression)
(function() {
    // This variable is scoped to the IIFE, so it doesn't pollute the global scope
    var message = "Hello from IIFE!";
    console.log(message); // Output: Hello from IIFE!
})();

// If we try to access `message` here, it will throw an error
// console.log(message); // Uncaught ReferenceError: message is not defined

// Why use IIFE?
// 1. To avoid polluting the global scope with unnecessary variables or functions.
// 2. Encapsulate code logic that doesn't need to be reused outside.
// 3. Run the code immediately for tasks like initialization.

Use Case: Avoid Global Scope Pollution
javascript
Copy
Edit
// Without IIFE
var name = "Global Name";
console.log(name); // Output: Global Name

// With IIFE
(function() {
    var name = "IIFE Name"; // This `name` variable is scoped to this IIFE
    console.log(name); // Output: IIFE Name
})();

// The global `name` remains unaffected
console.log(name); // Output: Global Name
Use Case: Initialization Code
javascript
Copy
Edit
(function() {
    // Perform some initialization tasks
    var count = 0;
    console.log("Counter initialized to:", count); // Output: Counter initialized to: 0
})();

// The variable `count` is not accessible outside, keeping the global scope clean
Use Case: Passing Arguments
javascript
Copy
Edit
(function(a, b) {
    console.log("The sum is:", a + b); // Output: The sum is: 15
})(5, 10);

// Why use this?
// It allows us to pass values to the function directly and execute logic without creating a reusable function.
Summary:
IIFE is useful for:
Keeping variables and functions private.
Avoiding conflicts with global variables.
Running code immediately without cluttering the global scope.
This approach is particularly useful in older JavaScript projects or when you want to execute logic immediately in a clean way.










// Arry
// data structure basic array khete hai

const myARRAy=[1,3,4,'jdhasfkjdklfjaskl',7]

// here it contain object menas we can acces and update original vlaue of array   beause due to refernce   it does not copy actual vlaue of array
let arr = [1, { a: 10 }];
let copy = [...arr];

// Modifying the object in the copy affects the original
copy[1].a = 20;
copy[0] = 10;

console.log(arr); //  nothing effect  it still first elemnt is 1 [1, { a: 20 }]


///////////// for  it contain  array primitive vlaue not   it will copy the actual vlaue not refrence   


let array = [2, 3, 4, 5];
let copyy = [...array];

// Modify the value at index 0 in the copy
copy[0] = 10;

console.log(array); // What happens to the original array?
console.log(copyy);  // What does the copy look like?

//////////
//jayada use nahi hota
// const firArray=new Array(1,2,3,4)    // it convert 
//console.log(firArray) // [1,2,3,4] 
///////////////
const pracArray = [1, 2, 3, 4, 5];

// Access the first element
console.log(pracArray[0]); // 1
// Explanation: Indexing starts from 0. pracArray[0] accesses the first element, which is 1.

let arrr = pracArray.push(6);
console.log(arrr); // 6
// Explanation: The push() method adds an element (6) to the end of the array.
// It returns the new length of the array, not the value you added.

console.log(pracArray); // [1, 2, 3, 4, 5, 6]
// Explanation: The array now includes the new element 6 at the end.

let rmovelast = pracArray.pop();
console.log(`pop`, rmovelast); // 6
// Explanation: The pop() method removes the last element (6) from the array and returns it.

console.log(`poporiginal`, pracArray); // [1, 2, 3, 4, 5]
// Explanation: The original array now excludes the last element.

let check = pracArray.unshift(7);
console.log(check); // 6
// Explanation: The unshift() method adds 7 to the start of the array.
// It returns the new length of the array, which is now 6.

console.log(`unshift` + pracArray); // 7,1,2,3,4,5
// Explanation: The array now has 7 as the first element.

let removefromstart = pracArray.shift();
console.log(removefromstart); // 7
// Explanation: The shift() method removes the first element (7) from the array and returns it.

console.log(pracArray); // [1, 2, 3, 4, 5]
// Explanation: The array is back to its original state after removing the first element.


//
// Detailed Explanations of Methods:
// push(value)

// Adds value to the end of the array.
// Returns the new length of the array.

// pop()

// Removes the last element from the array.
// Returns the removed element.

// unshift(value)

// Adds value to the beginning of the array.
// Returns the new length of the array.
// shift()

// Removes the first element from the array.
// Returns the removed element.


////////////////////////////////////////////////////
// hot check  wherter is true of flase
let checkArraydata = ['tarun', 'kumvar', 'kale'];

// Check if 'tarun' exists in the array
console.log(checkArraydata.includes('tarun')); // true
// Explanation: The `includes` method checks if the specified value ('tarun') exists in the array. 
// It returns `true` if found, otherwise `false`.

// Check the index of 'kumar'
console.log(checkArraydata.indexOf('kumar')); // -1
// Explanation: The `indexOf` method returns the index of the specified value ('kumar') in the array. 
// If the value does not exist, it returns -1, indicating that the element is not present.

// Check the index of 'kumvar'
console.log(checkArraydata.indexOf('kumvar')); // 1
// Explanation: Since 'kumvar' exists in the array at index 1, `indexOf` returns 1.


// we can change array type how   

const  normalArray=[1,2,3,4]
console.log(normalArray)  //[1,2,3,4]
console.log(normalArray.join())  // 1,2,3,4   here its type is covert it into string



////////////////////////////////////////////////////////////////////////
slice() Method
Purpose: Extracts a portion of an array without modifying the original array.
Syntax: array.slice(start, end)
start: The index to begin extraction (inclusive).
end: The index to stop extraction (exclusive). If omitted, it extracts until the end of the array.
Returns: A new array with the extracted elements.
Example:
javascript
Copy code
let myOriginalArray = [0, 1, 2, 3, 4, 4, 5, 6, 75, 4];
let condition1 = myOriginalArray.slice(1, 5);
console.log(condition1); // [1, 2, 3, 4]
// Explanation: Extracts elements from index 1 to 4 (end index 5 is excluded).
console.log(myOriginalArray); // [0, 1, 2, 3, 4, 4, 5, 6, 75, 4]
// The original array remains unchanged.
splice() Method
Purpose: Adds, removes, or replaces elements in an array by modifying the original array.
Syntax: array.splice(start, deleteCount, item1, item2, ...)
start: The index at which to start changes.
deleteCount: The number of elements to remove starting from start.
item1, item2, ...: Optional elements to add at the start index.
Returns: An array of the removed elements (if any).
Example:
javascript
Copy code
let myOriginalArray = [0, 1, 2, 3, 4, 4, 5, 6, 75, 4];
let condition2 = myOriginalArray.splice(4, 0, 'tarun');
console.log(condition2); // []
// Explanation: No elements are removed because `deleteCount` is 0.
// 'tarun' is inserted at index 4.
console.log(myOriginalArray); // [0, 1, 2, 3, 'tarun', 4, 4, 5, 6, 75, 4]
// The original array is modified.
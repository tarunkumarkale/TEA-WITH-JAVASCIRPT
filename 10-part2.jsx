//   10 part2.jsx

let num1 = [1, 2, 3, 4, 5];
let num2 = [6, 7, 8, 9, 10];

let num3 = num1.concat(num2); // Combine num1 and num2 into a new array
console.log(num3); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

num3.map((ele, index) => console.log(`Index: ${index}, Value: ${ele}`));
// Explanation: Iterates over the combined array and logs each element with its index.


// auager array ke under array aye kese to kese solve karuge

// exple let arr= [1,2,3,4,[23,45]]
 //  ese acces karege Array[4][0]




// let result=num1.concat(num2)
// console.log('for normal result'+result)

// let result2=[...num1,...num2]
// console.log('for resut 2' +result2)







// 1. push()
// Purpose: Adds one or more elements to the end of the array.
// Modifies Original Array? Yes.
// Returns: The new length of the array.
// javascript
// Copy code
// let arr = [1, 2, 3];
// let newLength = arr.push(4, 5);
// console.log(arr); // [1, 2, 3, 4, 5]
// console.log(newLength); // 5
// // Explanation: Adds 4 and 5 to the end of the array.
// 2. pop()
// Purpose: Removes the last element from the array.
// Modifies Original Array? Yes.
// Returns: The removed element.
// javascript
// Copy code
// let arr = [1, 2, 3];
// let lastElement = arr.pop();
// console.log(arr); // [1, 2]
// console.log(lastElement); // 3
// // Explanation: Removes the last element (3) from the array.
// 3. unshift()
// Purpose: Adds one or more elements to the beginning of the array.
// Modifies Original Array? Yes.
// Returns: The new length of the array.
// javascript
// Copy code
// let arr = [1, 2, 3];
// let newLength = arr.unshift(0);
// console.log(arr); // [0, 1, 2, 3]
// console.log(newLength); // 4
// // Explanation: Adds 0 to the beginning of the array.
// 4. shift()
// Purpose: Removes the first element from the array.
// Modifies Original Array? Yes.
// Returns: The removed element.
// javascript
// Copy code
// let arr = [1, 2, 3];
// let firstElement = arr.shift();
// console.log(arr); // [2, 3]
// console.log(firstElement); // 1
// // Explanation: Removes the first element (1) from the array.
// 5. slice()
// Purpose: Extracts a portion of an array without modifying the original array.
// Modifies Original Array? No.
// Returns: A new array containing the extracted elements.
// javascript
// Copy code
// let arr = [1, 2, 3, 4, 5];
// let sliced = arr.slice(1, 4);
// console.log(sliced); // [2, 3, 4]
// console.log(arr); // [1, 2, 3, 4, 5]
// // Explanation: Extracts elements from index 1 to 3 (end index 4 is excluded).
// 6. splice()
// Purpose: Adds, removes, or replaces elements in an array.
// Modifies Original Array? Yes.
// Returns: An array of removed elements (if any).
// javascript
// Copy code
// let arr = [1, 2, 3, 4, 5];
// let removed = arr.splice(2, 2, 'a', 'b');
// console.log(arr); // [1, 2, 'a', 'b', 5]
// console.log(removed); // [3, 4]
// // Explanation: Removes 2 elements starting at index 2 and replaces them with 'a' and 'b'.
// 7. includes()
// Purpose: Checks if an array contains a specified value.
// Modifies Original Array? No.
// Returns: true if the value is found, otherwise false.
// javascript
// Copy code
// let arr = [1, 2, 3, 4];
// console.log(arr.includes(3)); // true
// console.log(arr.includes(5)); // false
// // Explanation: Checks if the array contains the specified value (3 or 5).
// 8. indexOf()
// Purpose: Finds the first index of a specified value.
// Modifies Original Array? No.
// Returns: The index of the value, or -1 if not found.
// javascript
// Copy code
// let arr = [1, 2, 3, 4, 3];
// console.log(arr.indexOf(3)); // 2
// console.log(arr.indexOf(5)); // -1
// // Explanation: Returns the first index of the value (3) or -1 if not found.
// 9. forEach()
// Purpose: Executes a provided function once for each array element.
// Modifies Original Array? No.
// Returns: undefined.
// javascript
// Copy code
// let arr = [1, 2, 3];
// arr.forEach((num, index) => {
//   console.log(`Index: ${index}, Value: ${num}`);
// });
// // Explanation: Loops through each element and executes the callback function.
// 10. map()
// Purpose: Creates a new array by applying a function to each element.
// Modifies Original Array? No.
// Returns: A new array with the transformed elements.
// javascript
// Copy code
// let arr = [1, 2, 3];
// let squared = arr.map(num => num ** 2);
// console.log(squared); // [1, 4, 9]
// console.log(arr); // [1, 2, 3]
// // Explanation: Returns a new array with each element squared.
// 11. filter()
// Purpose: Creates a new array with elements that pass a test function.
// Modifies Original Array? No.
// Returns: A new array with elements that satisfy the condition.
// javascript
// Copy code
// let arr = [1, 2, 3, 4, 5];
// let even = arr.filter(num => num % 2 === 0);
// console.log(even); // [2, 4]
// // Explanation: Returns a new array with only even numbers.
// 12. reduce()
// Purpose: Reduces the array to a single value by applying a function.
// Modifies Original Array? No.
// Returns: A single value.
// javascript
// Copy code
// let arr = [1, 2, 3, 4];
// let sum = arr.reduce((acc, num) => acc + num, 0);
// console.log(sum); // 10
// accumulator
// // Explanation: Sums up all elements of the array starting with an initial value of 0.
// 13. join()
// Purpose: Joins all elements of an array into a string.
// Modifies Original Array? No.
// Returns: A string.
// javascript
// Copy code
// let arr = ['a', 'b', 'c'];
// let joined = arr.join('-');
// console.log(joined); // 'a-b-c'
// // Explanation: Joins elements with '-' as the separator.
// 14. find()
// Purpose: Returns the first element that satisfies a condition.
// Modifies Original Array? No.
// Returns: The first matching element or undefined if none is found.
// javascript
// Copy code
// let arr = [1, 2, 3, 4];
// let found = arr.find(num => num > 2);
// console.log(found); // 3
// // Explanation: Finds the first element greater than 2.
// 15. sort()
// Purpose: Sorts the elements of an array in place.
// Modifies Original Array? Yes.
// Returns: The sorted array.
// javascript
// Copy code
// let arr = [3, 1, 4, 2];
// arr.sort((a, b) => a - b); // Ascending order
// console.log(arr); // [1, 2, 3, 4]
// // Explanation: Sorts the array in ascending order.

// yeh bhut tough array hai
const another_array=[1,2,3,4,[1,2,3,3],7,[6,7,[4,5]]]
const extract_array=another_array.flat(Infinity)   // eska kaam hai ki under ke under array ko single array me magaer flat ke under paratheise me kya rakhna ki kitna depth me jana  aray ke under array means 1 dephth  , array ke underarray ke undera rray means 2 depth but me kab tak karuga esliye depth inside infinity likh du


console.log(extract_array)  //[ 1, 2, 3, 4, 1, 2,3, 3, 7, 6, 7, 4] // sinflge array

// 👿 👿👿 👿👿 👿👿 👿👿 👿👿 👿👿 👿👿 👿👿 👿👿 👿👿 👿👿 👿👿 👿👿 👿👿 👿👿 👿👿 👿👿 👿👿 👿👿 👿👿 👿👿 👿
   
// mujhe check krna ki  ki array hai ki nahi ki hai 
console.log(Array.isArray('taurn'))  // kya yeh array kya ki nahi  it output is false
console.log(Array.isArray([1,2,3]))  // kya yeh array kya ki nahi  it output is true

/// convertion string to arrary ,ya number to array  varible to array etc means array me convert krna hai 

console.log(Array.from('trun')) //[ 't', 'r', 'u', 'n' ]
let str=`tarun,kumar,kale`
console.log(str.split(',')) //[ 'tarun', 'kumar', 'kale' ]
let str2=`tarun kumar kale`
console.log(str.split('')) //[ 'tarun,kumar,kale' ]
let str3=`tarun | kumar | kale`
console.log(str3.split('|'))//[ 'tarun ', ' kumar ', ' kale' ]

const  first=100
const  sec=1000
const  third=10000
// now we have to convert it into array 
console.log(Array.of(first,sec,third)) // [100,1000,10000]



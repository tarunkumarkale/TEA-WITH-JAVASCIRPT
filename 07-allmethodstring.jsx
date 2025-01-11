String Basics
Definition
A string in JavaScript is a sequence of characters. Strings are immutable and can be defined using:

Double quotes: "Hello"
Single quotes: 'Hello'
Template literals: Hello  //  stringinterpolation
Examples
javascript
Copy code
let str1 = "Hello, World!";
let str2 = 'JavaScript is fun!';
let str3 = `I am ${2025 - 2000} years old!`; // Template literal
String Methods
1. length
Gets the length of the string.

javascript
Copy code
let str = "Hello, World!";
console.log(str.length); // 13
2. toUpperCase() / toLowerCase()
Converts the string to uppercase or lowercase.

javascript
Copy code
let str = "Hello, World!";
console.log(str.toUpperCase()); // "HELLO, WORLD!"
console.log(str.toLowerCase()); // "hello, world!"
3. charAt(index)
Returns the character at the specified index.

javascript
Copy code
let str = "Hello";
console.log(str.charAt(1)); // "e"
4. indexOf() / lastIndexOf()
Finds the position of the first/last occurrence of a substring.

javascript
Copy code
let str = "Hello, World!";
console.log(str.indexOf("o")); // 4
console.log(str.lastIndexOf("o")); // 8
5. includes()
Checks if the string contains a specified substring.

javascript
Copy code
let str = "JavaScript is awesome!";
console.log(str.includes("awesome")); // true
console.log(str.includes("Python"));  // false
6. startsWith() / endsWith()
Checks if the string starts or ends with a specific substring.

javascript
Copy code
let str = "Hello, World!";
console.log(str.startsWith("Hello")); // true
console.log(str.endsWith("!"));       // true
7. slice(start, end)
Extracts a section of a string.

javascript
Copy code
let str = "JavaScript";
console.log(str.slice(0, 4)); // "Java"
console.log(str.slice(-6));   // "Script"
8. substring(start, end)
Similar to slice(), but does not support negative indices.

javascript
Copy code
let str = "JavaScript";
console.log(str.substring(0, 4)); // "Java"
console.log(str.substring(4));    // "Script"
9. substr(start, length) (Deprecated but still works)
Extracts a substring based on a starting index and length.

javascript
Copy code
let str = "JavaScript";
console.log(str.substr(0, 4)); // "Java"
console.log(str.substr(4, 6)); // "Script"
10. replace() / replaceAll()
Replaces a substring with another string. replace() replaces the first match, while replaceAll() replaces all matches.

javascript
Copy code
let str = "foo bar foo";
console.log(str.replace("foo", "baz")); // "baz bar foo"
console.log(str.replaceAll("foo", "baz")); // "baz bar baz"
11. trim() / trimStart() / trimEnd()
Removes whitespace from both ends of a string.

javascript
Copy code
let str = "   Hello, World!   ";
console.log(str.trim());       // "Hello, World!"
console.log(str.trimStart());  // "Hello, World!   "
console.log(str.trimEnd());    // "   Hello, World!"
12. split(delimiter)// delimters kuch bhi ho sakta hi jese space ,| and etc yeh auger mill jaye to  array us hiab bnta hai  
Splits a string into an array based on a delimiter.

javascript
Copy code
let str = "apple,banana,cherry";
let fruits = str.split(",");
console.log(fruits); // ["apple", "banana", "cherry"]
13. concat()
Concatenates two or more strings.

javascript
Copy code
let str1 = "Hello";
let str2 = "World";
console.log(str1.concat(", ", str2, "!")); // "Hello, World!"
14. repeat(n)
Repeats the string n times.

javascript
Copy code
let str = "Ha!";
console.log(str.repeat(3)); // "Ha!Ha!Ha!"
15. padStart(targetLength, padString) / padEnd(targetLength, padString)
Pads the string with another string until it reaches the target length.

javascript
Copy code
let str = "5";
console.log(str.padStart(3, "0")); // "005"
console.log(str.padEnd(3, "0"));   // "500"
16. match() / matchAll()
Matches a string against a regular expression.

javascript
Copy code
let str = "abc123xyz";
console.log(str.match(/\d+/)); // ["123"]
for (let match of str.matchAll(/\d+/g)) {
    console.log(match[0]); // "123"
}
17. localeCompare()
Compares two strings based on locale.

javascript
Copy code
let str1 = "apple";
let str2 = "banana";
console.log(str1.localeCompare(str2)); // -1 (str1 < str2)
18. Template Literals
Allows embedding expressions in strings.

javascript
Copy code
let name = "Alice";
let age = 25;
console.log(`My name is ${name} and I am ${age} years old.`);
// "My name is Alice and I am 25 years old."
Advanced Usage
Chaining Methods
You can chain string methods together.

javascript
Copy code
let str = "   JavaScript is fun!   ";
console.log(str.trim().toUpperCase().slice(0, 10)); // "JAVASCRIPT"
String Immutability
Strings are immutable, meaning their values cannot be changed. Operations return a new string.

javascript
Copy code
let str = "Hello";
let newStr = str.replace("H", "J");
console.log(newStr); // "Jello"
console.log(str);    // "Hello"
This guide covers the most commonly used string methods and concepts in JavaScript. Let me know if you need further details or examples!














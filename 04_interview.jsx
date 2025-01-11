// INTERVIEW

// when we go officaly datatype category 
//  two type of categoresis // are thrier

// 1.primitive    //2.nonprimitive

// jab interview  ask   kis tarha se memeory me rakha jata hai aur kish tarah se acces kiya  jata to ese differnce pata kiya jata hai

// primitive
// 7 type    -- string ,number,boolean,null(pura khali not garbage),undefind(varibale declare memorey space le liya but without memeory),symbol,Bigint

// non-prmitive (refrence type)
// array ,objects,functons

///   👿 imp very ki javascript dynamic or static hai 
//                   JavaScript ek dynamic language hai, static nahi. Iska reason aur example simple tarike se samajhte hain:

// Dynamic Language kyu hai?
// Runtime Par Type Change Karna: JavaScript me variable ki type runtime par badal sakti hai.
// Ek variable pehle number ho sakta hai, phir string ban sakta hai.
// No Type Declaration: Variables declare karte waqt type define karne ki zarurat nahi hoti (var, let, const ka use hota hai).
// Static Language ka Matlab kya hai?
// Static language (e.g., Java, C++) me variable ki type compile-time par fix hoti hai aur change nahi hoti.
// java
// Copy code
// int x = 5; // x hamesha integer hi rahega.
// x = "Hello"; // Error hoga, kyunki x integer hai.
// Example: JavaScript Dynamic Nature
// javascript
// Copy code
// let data = 42;      // Initially, data is a number.
// console.log(data);  // Output: 42

// data = "Hello";     // Now, data becomes a string.
// console.log(data);  // Output: Hello
// Yaha data variable ki type runtime par change ho gayi, jo dynamic behavior dikhata hai.

// Static Language Example (C++):
// cpp
// Copy code
// int data = 42;    // data is an integer.
// data = "Hello";   // Error: Cannot assign a string to an integer.
// Recruiter Ke Liye Key Point:
// JavaScript dynamic hai, kyunki:

// Type declaration ki zarurat nahi hoti.
// Runtime par variable ki type change ho sakti hai. Isliye JavaScript flexible aur fast prototyping ke liye suitable hai, lekin type-safety ke liye nahi.   //


const storeage=[1,2,3]
const storeagobj={fnmae:'',lanme:''}
const fun=()=> 1+1

console.log(typeof storeage)// object 
console.log(typeof storeagobj)// object
console.log(typeof fun) // offical document according  objectfunction is called


1. Primitive Data Types
Definition: Ye basic aur immutable (unchangeable) data hote hain.
Examples: Number, String, Boolean, Undefined, Null, BigInt, Symbol
Characteristics:
Value-Based: Sirf value store hoti hai.
Immutable: Ek bar value assign hone ke baad usko directly change nahi kar sakte. Agar modify karna ho, toh nayi value assign hoti hai.
Stored in Stack: Memory me inki value stack me store hoti hai.

2. Non-Primitive Data Types
Definition: Ye complex data structures hote hain jo reference ke through store hote hain.
Examples: Object, Array, Function
Characteristics:
Reference-Based: Sirf reference (address) store hota hai, actual data memory me alag store hota hai.
Mutable: Inka data modify ho sakta hai bina nayi memory allocate kiye.
Stored in Heap: Actual data heap memory me store hota hai, aur reference stack me.




JavaScript me primitive aur non-primitive data types ke beech antar ko samajhna important hai. Yah differentiation unke behavior aur storage ke tareeke par based hai. Chaliye simple aur short me samajhte hain:

1. Primitive Data Types
Definition: Ye basic aur immutable (unchangeable) data hote hain.
Examples: Number, String, Boolean, Undefined, Null, BigInt, Symbol
Characteristics:
Value-Based: Sirf value store hoti hai.
Immutable: Ek bar value assign hone ke baad usko directly change nahi kar sakte. Agar modify karna ho, toh nayi value assign hoti hai.
Stored in Stack: Memory me inki value stack me store hoti hai.

2. Non-Primitive Data Types
Definition: Ye complex data structures hote hain jo reference ke through store hote hain.
Examples: Object, Array, Function
Characteristics:
Reference-Based: Sirf reference (address) store hota hai, actual data memory me alag store hota hai.
Mutable: Inka data modify ho sakta hai bina nayi memory allocate kiye.
Stored in Heap: Actual data heap memory me store hota hai, aur reference stack me.




Key Differences (Primitive vs Non-Primitive)
Aspect	                                              Primitive	                   Non-Primitive
Storage	                                 Value-based (Stack)             	Reference-based (Heap)
Mutability	                                   Immutable	                      Mutable
Examples	                     Number, String, etc.	                          Object, Array, etc.
Copy Behavior                        	Creates a new copy	             Shares the same reference


Recruiter Ke Liye Key Point:
Primitive: Simple, immutable values. Memory-efficient for basic tasks.
Non-Primitive: Complex, mutable structures. Useful for dynamic data handling.




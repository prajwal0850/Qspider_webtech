// Array in JavaScript - Array is an block or collection of memory which is used to store both homogenius and heterogenius data

// In Array index value starts with 0

// There are Three Ways to Create an array in javascript 
// 1. By using literal
// 2. By using new keyword and array constructor
// 3. By Creating size of an array

// 1. By using Literal

// Storing Homogenius values
let arr = [1,20,30,40,50]
let arr2 =["Apple","Banana","Orange"]
console.log(arr);
console.log(arr2);


// Storing Heterogenius values
let arr3 = [1,"Bike",2,"Car",3,"Truck"]
console.log(arr3);

// 2. By Using New Keyword and Array() constructor
let fruits = new Array("Apple","Banana","Chiko")
console.log(fruits);
// in result it returns the array

let fruits2 = new Array("Mango")
console.log(fruits2);
// in result it returns the Array only

// 3. By Creating the size of array
let numbers =new Array(1,2,3,4,5)
console.log(numbers);
// in result it returns the array only 
let numbers2 = new Array(20)
console.log(numbers2);
//  in result it returns the legth of an array so by using index values we can update the data
numbers2[0] = 202
numbers2[7] = 542
console.log(numbers2);




















//1.Even Numbers

let numbers = [1, 2, 3, 4, 5, 6];
let  even = numbers.filter((num) => {
    
    return num % 2 === 0});
console.log(even); 

//2.Odd Numbers
let numbers2 = [1, 2, 3, 4, 5, 6];
let odd = numbers2.filter((num) =>{ 
    
    return num % 2 !== 0});
console.log(odd); 

//3.Greater than number 10
let numbers3 = [5, 12, 8, 130, 44];
let result = numbers3.filter((num) =>{ 
    
    return num > 10});
console.log(result); 

//4.Positive Numbers
let numbers4 = [-3, -1, 0, 2, 4];
let positives = numbers4.filter((n) =>{ 
    
    return n > 0});
console.log(positives)

//5.Pass or fail
let students = [
  { name: "Prajwal", grade: 50 },
  { name: "Rahul", grade: 75 },
  { name: "Sahil", grade: 30 }
];
let passed = students.filter((student) =>{ 
    
    return student.grade >= 40});
console.log(passed);

//6.Check type
let list = [1, "two", 3, "four", true];
let list2 = list.filter((item) =>{ 
    
    return typeof item === "string"});
console.log(list2);

//7.
let names = ["Atharva", "Prajwal", "Tanmay", "Rahul","Sahil","Rohit","Ritesh","Teju"
];
let anames = names.filter((name) =>{
    
    return name.includes("a")});
console.log(anames);

//8. Divisible by 3
let number5 = [3, 6, 7, 9, 10];
let div3 = number5.filter((n) => {
    
    return n % 3 == 0});
console.log(div3);

//9.Negative Numbers
let numbers6 = [-5, 3, -2, 8, -1];
let negative = numbers6.filter((n) => {
    
    return n < 0});
console.log(negative); 

//10.String length more than two
let list3 = ["a", "hi", "yes", "no", "sun","come","read"];
let list4 = list3.filter((l) => {
    
    return l.length > 2});
console.log(list4);
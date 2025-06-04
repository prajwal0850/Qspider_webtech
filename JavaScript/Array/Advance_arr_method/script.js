// Slice() - It is used to extract or cut the array element onto slices,peices and store into one new array
// It Accepts the Starting index and ending index + 1 values

// it will return an new array with sliced elements
// it doesn't affect the original array

let arr=[10,20,30,40,50,60,70]
console.log(arr)
let arr2 = arr.slice(1,4)
console.log(arr2);

let trainers = ["Avinash","Harsha","Pradeep","Collin","Rohit","Sejal"]
console.log(trainers);

let javaKing = trainers.slice(0,2)
console.log(javaKing);

let sqlKing = trainers.slice(2,4)
console.log(sqlKing);


// Splice() - It is an Array Method which is used to extract the Data or Values From Any of the index and We can replace the removed Elements too
// It will affect the original Array
// Syntax :- ArrayName.Splice(Starting index,length,items we want to replace)
let numbers = [10,20,30,40,50,60,70,80,90,100]
console.log(numbers);

// numbers.splice(2,4,300,400,500,600)
// console.log(numbers);


// index of :- It is a method which returns the index value of specific array element 
console.log(numbers.indexOf(10))

// Include of 
console.log(numbers.includes(50))

let boys = ["Sahil","Prajwal","Athrav","Tanmay"]
let boys2 = ["Sourabh","Swapnil","Satish","Rahul"]
let girls = ["Riya","Piya","Sejal","Suhana"]

console.log(boys);
console.log(boys2);
console.log(girls);

console.log(boys.concat(boys2,girls));

// Sort() - It is an Array method which is used to sort or arrange the array in alphabetical order

let Names = ["Zakir","Manju","Bhargav","Omkar","Vinayak","Sahil"]
console.log(Names);

Names.sort()
console.log(Names)

let Numbers = [10,20,30,40,21,22,23,24,3,4] 
// For Numbers it Will accept only first number
console.log(Numbers);
Numbers.sort()
console.log(Numbers);

// Reverse() - It is method which will reverse the array element
let Places = ["Pune","Mumbai","Kolhapur","Sangli","Satara","Nashik"]
console.log(Places);
Places.sort()
console.log(Places);

Places.reverse()
console.log(Places);

// join() - It is Array Method which is used to join array element into single value (string) and also additionaly we can insert or join other element too
// It Return new Array with expected output

let cartoons = ["Doremon","Choota_bhem","Ninja_Hatoori","Oggy","Motu_PAtlu",]
console.log(cartoons);
let newCartoon = cartoons.join()
console.log(newCartoon)

let msg = "Morning Class is Amazing"
let newMsg = msg.split(" ")
console.log(newMsg)

  
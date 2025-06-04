// Filter() - It is an Array Method and Iteration method of array , which performs the operation on each array element by the passed specified condition and returnd only result for satisfied elements

// It is Higher order function which accepts call back function as an argument 

// Syntax 
//  Array.filter(callback Function with parameters)
// it returns the new array with filtered elements 

// Filtering the array elements with filter method which is easy to understand and easy to write as well

  let num = [10,20,25,27,29,50,60,70,50]

  let even = num.filter((val)=>{

    return val % 2 ==0
  })
 
  console.log(even);


//   Filtering the array elements where the names are having p alphabet 
  let Names2 = ["Pooja","Priti","Madhu","Swati","Anushka","SPurti"]

  let pnames = Names2.filter((Name)=>{

    return Name.includes("P")
  })

  console.log(pnames);



// Map() - It is Array iteration method which performs the operation on each array elements and return the result for all array elements 
// it is also higher order function 
// This will return the new array with result

// performing the operations for all array elements where we are increasing the value by 5 of all elements
let CurrentAge = [20,22,32,35,45,40,55,60]
console.log(CurrentAge);


let newAge = CurrentAge.map((ele)=>{

    return ele + 5
})

console.log(newAge);


// for Below code it will returns the output in boolean datatype means true or false
let Names = ["Sahil","Soniya","Satish","Shreya","Rahul","Prajwal","Amruta"]
console.log(Names);


let sName = Names.map((ele)=>{

    return ele.includes("S")
})

console.log(sName);

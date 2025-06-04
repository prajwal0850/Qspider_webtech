// Lexical Scope defines the accessiblity of variables and functions depending on their location in the source code . variables and functions have differnt levels of scope : 
    // 1. Global Scope 
    // 2.Local Scope or Function Scope
    // 3.Nested Scope
    // 4.Block Scope 
    // 5.Module Scope
// Global Scope
var Name = "Prajakta"
console.log(Name);


// Local Scope :- We can Access the Varibale value or property in the specific block only 
function printName(surName) {
    let broName="chetan"
    console.log(broName + " " + surName);
    // 
    let name = "gayatri"
    console.log(name);
    // 
}
printName("Khaire")
// Will give Output as blank statement because of name variable
console.log(name);
//  Will give Output as Not defined
// console.log(broName);

// Function Scope - where the parent function property will handled by child function property , it works like closure 

function parent() {
        let Name = "Manasi"
        console.log(Name);
        function child() {
        
        // Here we are accessing the parent function Name into chlid Function 
            console.log("Hello " + Name);
            let Name2 = "Rahul"
            console.log(Name2);
            
            
        }
        child()
        // But Child Function Property we cant acess inside parent
        // console.log(Name2);
        
        
}
parent()


// Block Scope - Block Scope is Similar to our Function Scope we cannot access the variable or the property outside that specific block which includes some kind of condition for ex . if condition 

function printMsg() {
    let Name = "Roshni"
    console.log(Name);
    if (Name) {
        let Name = "Shubham"
        console.log(`Hello ${Name} `)
        
    }
    
}
printMsg()
// If the Variable is Being declared in specific If block or any kind of conditional block , you cannot access that variable outside of that block

let car = "BMW"
console.log(car);

if (car) {
    console.log(`The ${car} is Best Car in World`);
    
}
else {
    console.log(`The ${car} is Good Car in World`);
    
}
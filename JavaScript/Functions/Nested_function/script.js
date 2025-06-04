// Nested Function - A function inside another function is called as nested function
// Note - Not too Many function inside one function

function parent() {
    console.log(`I am Parent Function`);
    // Declaring the child function inside parent function
    function child() {
        console.log(`I am child function`);
        
        
    }   
    child() 
}
parent()

// We Can call parent function or its property inside child function which cause recurssion with maximum call stack memory exceed 
// But we cannot access the child function or its property inside parent function which gives an error of not defined
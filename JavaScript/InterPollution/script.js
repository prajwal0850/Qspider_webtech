// let number1 = parseInt(prompt("Enter The First Number"));
// let number2 = parseInt(prompt("Enter The Second Number"));
// let result = number1 + number2 ;
// console.log(result);

// let product1 =parseInt(prompt("Enter The Product 1 Price"));
// let product2 =parseInt(prompt("Enter The Product 2 Price"));
// let product3 =parseInt(prompt("Enter The Product 3 Price"));
// let product4 =parseInt(prompt("Enter The Product 4 Price"));
// let product5 =parseInt(prompt("Enter The Product 5 Price"));

// let total = product1 + product2 + product3 + product4 + product5;
// let discount = total - total*20/100;

// console.log(total);
// console.log(discount);

// if (total>=5000) {

//     document.writeln(`Congrats! You Have Done Shopping Total of ${total} ,you win 15% Discount and now you have to pay only ${discount}`);
    
// }
// else {
//     document.writeln(`Your Shopping worth is ${total} Shop Worth 5000 or More to Get 15% Discount On Shopping`);    
// }


// What is Template Literals or InterPollution ?
// It is Way to embed or Conact the Expression with variables in JavaScript
// In Java or Any Other Programing Language we will use concatenation 
// let Name = "Prajwal";
// console.log("Hello "+ Name);
//OP - Hello Prajwal

// In Template we have to use backtick with ${} symbol
// let Name2 = "Amruta";
// console.log(`Hello ${Name2}`);
//OP - Hello Amruta


// let gender = prompt("Enter Gender");
// let state = prompt("Enter State");

// if (gender === "Female" && state === "Maharastra") {
//     document.writeln(`For You Half Ticket is Free`);
    
// } else {
//     document.writeln(`Buy Full Ticket`);
// }

// Diffrence Between == and ===

// let age = 18
// let age2 ="18"
// console.log(age == age2);
// console.log(age === age2);


let bike=10
let auto=12
let car=17
let transport = prompt(`Choose Bike,Auto or Cab`)
let destination = prompt(`Enter The Destination`)
let distance = prompt(`Enter The Distance`)
let transportation = transport.toUpperCase();

if (transportation=="BIKE") {
    document.writeln(`Your Total Ride Cost Will be ${bike*distance}`);
    
} else if(transportation=="AUTO") {
    document.writeln(`Your Total Ride Cost Will be ${auto*distance}`);
}
else if(transportation=="CAR") {
    document.writeln(`Your Total Ride Cost Will be ${car*distance}`);
}
else{
    document.writeln(`Enter Correct Details`)
}

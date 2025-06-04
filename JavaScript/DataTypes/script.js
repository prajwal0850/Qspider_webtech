//  DataTypes in JavaScript
// 1.Number
// 2.String
// 3.Boolean
// 4.Undefined
// 5.Null
// 6.BigInt
// 7.Symbol
// 8.Object


// 1.Number
let num=10;
console.log(typeof num);
let salary=1045451;
console.log(typeof salary);
let weight=60.2;
console.log(typeof weight);

// 2.String

let Name = "Saniya";
console.log(typeof Name);
let Sen = "Saniya is the last topper";
console.log(typeof Sen);
let char = "A"
console.log(typeof char);

// 3.Boolean
let isMarried = false;
console.log(typeof isMarried);
let isMarriedd = true;
console.log(typeof isMarriedd);

// 4.Undefined

let id;
console.log(typeof id);

// 5.Null
let nothing = null
console.log(typeof nothing);

// 6.BigInt
let  money = BigInt(54215421542145);
console.log(typeof money);
let  moneyy = BigInt("54215421542145");
console.log(typeof moneyy);

// 7.Symbol

let num1 = Symbol(21);
let num2 = Symbol(21);
console.log(num1==num2);

// 8.Object

let person = {
    Name : "Sahil",
    Salary : Symbol(200000),
    Ismarried : false
}
let person2 = {
    Name : "Rahul",
    Salary : Symbol(200000),
    Ismarried : true
}
console.log(person.Salary == person2.Salary);



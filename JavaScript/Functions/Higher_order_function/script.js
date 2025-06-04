// Higher order function - a Function which takes another function as an  argumnent is called as Higher order function

// Callback Function - a function which is passed as an argument is called as callback function 

// Declaring one function which returns message called Hello 
function greet (){
	return "Hello"
}

// Declaring Function where we can utilize the value of callback function by calling it in argument
function higher(msg,Name){
	console.log(msg(greet)+ " "+Name)
}
higher(greet,"Sahil") 
higher(greet,"Rahul")
higher(greet,"Sushil")

// Calling the callback function again inside one more function to utilize the value of call back function 
function higher2(msg,Name){
	console.log(msg(greet)+ " " +Name)
}
higher(greet,"Mane")
higher(greet,"Sawant")
higher(greet,"Patil")

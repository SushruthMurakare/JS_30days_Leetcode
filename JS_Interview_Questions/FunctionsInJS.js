//Type of functions in js
//1. Named function
function sum(a,b) {
    return a+b;
}

//2. Anonymous function
console.log(function(a,b){
    return a+b
}(4,5));

//3. Function Expression
//define a function by assigning it to a varible

const add = function(a,b){
    return a+b
}

//4. Arrow function
const a = (x,y) => x+y
const ab= (x,y) => {
    return x+y }
//no need to write return keyword for one line of code

//5. Callback functions
//When a funciton is passed as an argument to other function that is call back function
   

//6.Event handling
//Whenever a user interactes with the UI that is an event, like click, mouseover, submit....
//This a event is triggered you have to handle it writing code

//7. Higher order funciton
// If it takes one or more function as argument or
// It it returns a function as result




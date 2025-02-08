// Asynchronous operation
// They are operations that do no block the execution of the code
// The main reason for using asynchronous functions is to avoid blocking the main thread. 
// We use asynchronous when the programs takes lots of time to execute and we dont want it to block the other code


// Promises
// They are a way to handle asychronous operation
// It represents a value that may not be available yet but will be available in the future
// Pending, resolved and rejected

// const myPromise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{

//     },1000)
// })

// Example usage - API call, File handling, Data fetching, Event handling...

// Classes and Objects
// Class is a template for creating objects with similar properties and methods
// Objects are the instances of the class which are created using new keyword

// this
// While accessing a propoerty of a object within that same object we can use this keyword

// hoisting
// JS will move the function or variable declaration to the top of their respective scopes during the compile which is called hoisiting

myFunction();  // function called before declaring
function myFunction(){
    console.log("myFunction")
}

a=20
console.log(a)
let a=0
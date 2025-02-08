// let age : number = 20;
// if(age<50){
//     age += 10
// }
// console.log(age)

//We can annoted the variable with a datatype

let sales: number = 123_456_789; //we can use underscore in between numbers to make it readable
let course: string = "Typescript";
let is_published: boolean = true;

//The any type
//if you dont annote any datatype to a variable is considered as any type
let level;
level = 1;
level = "abc"; //this is not good practice in TS

function render(document: any) {
  console.log(document);
}

// function render2(document){ //other way is to make the value of noImplicitAny false, but this is not good approach
//     console.log(document)
// }

//Arrays
//JS -> let arr = [1, 3, 'str']

let numbers: number[] = [1, 2, 3]; // if you add any other data type in this array it will throw error

numbers.forEach((n) => n.toFixed); // TS give all the methods of number when we enter n. becauser it knows that it is a number but in JS this does not happen

//Tuples

let user: [number, string, number] = [1, "Sushruth", 1];
//Recommended to have 2 values in the tuple like key value pair

//Enums
const small = 1;
const medium = 2;
const large = 3;

//instead we can

const enum Size {
  Small = 1,
  Medium = 2,
  Large = 3, //by default enum values have values from 0 upto the length of enum
}
let mySize: Size = Size.Medium;
console.log(mySize);
//using enums we can represent a list of constant

//Funnctions
function calculateTax(income: number, taxYear?: number): number {
  //here it is better to anootate the return value // ? tells that the arg is optional
  if ((taxYear || 2022) <= 2022) {
    return income * 0.5;
  }
  return 0; // you can return only number because you have anotated it
}

function calculateTax2(income: number, taxYear = 2022): number {
  //here it is better to anootate the return value // 2022 is the default value
  if (taxYear <= 2022) {
    return income * 0.5;
  }
  return 0; // you can return only number because you have anotated it
}

calculateTax(10_000, 2021);

//Objects

let employee: { id: number } = { id: 1 };

//if you dont want to give the name in the initialization you can
//1.
let employee2: { id: number; name: String } = { id: 1, name: "" };
//2.
let employee3: { id: number; name?: String } = { id: 1 };

employee2.name = "Sushruth"; // this is valid in js not in ts

let employee4: { readonly id: number; name?: String } = { id: 1 }; //now u cannot update the id value

let employee5: {
  readonly id: number;
  name?: String;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "Sushruth",
  retire: (date: Date) => {
    console.log(date);
  },
}; //now u cannot update the id value

//Advanced Types

type Employee = {
    readonly id: number,
    name?: String,
    retire: (date: Date) => void; 
}
//you can use this Employee in multiple places instead of duplicating the code
let employee6: Employee = {
    id: 1,
    name: "Sushruth",
    retire: (date: Date) => {
      console.log(date);
    },
}
// Variables

// type of String
//let firstName = "Jr Miller";

// type of number
// let age = 21;

// age = age + 1;

// type of boolean
// let student = false;

//console.log("Hello " + firstName);
//console.log(age);
//console.log(student);

//
// document.getElementById("p").innerHTML = "Greetings " + firstName;
// document.getElementById("p2").innerHTML = "You're " + age + " years old";
// document.getElementById("p3").innerHTML = "Enrolled: " + student;

// Constants

// assign a variable to a constant if you know for sure it won't be changed later

const PI = 3.14159;
let radius;
let circumference;

radius = window.prompt("Enter radius: ");
radius = Number(radius);

circumference = 2 * PI * radius;

console.log("Circumference: " + circumference)
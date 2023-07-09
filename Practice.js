// find hypotenuse of a triangle

// sides of triangle
let a;
let b;
let c;

// user input
// a = window.prompt("Enter side a: ");
// a = Number(a);

// b = window.prompt("Enter side b: ");
// b = Number(b);

// calculate hypotenuse
// c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

// console.log(c);

document.getElementById("submitButton").onclick = function() {
    a = document.getElementById("aTextBox").value;
    a = Number(a);

    b = document.getElementById("bTextBox").value;
    b = Number(b);

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    document.getElementById("cLabel").innerHTML = "Side C: " + c;
}
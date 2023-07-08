// Type Conversion

// change data type of a value to another (Strings, Numbers, Booleans)

let age = window.prompt("How old are you? ");

console.log(typeof age); // type of age is string
age = Number(age); // converts age of type String to age of type Number
console.log(typeof age); // converted to type of number
age += 1; // increment age by +1

console.log("Happy birthday, you're " + age + " years old");

let x, y, z;

x = Number("3.13"); // convert 3.14 of type string to 3.13 of type number
y = String(3.14); // 3.14 of type number to type string
z = Boolean("hello"); // converting to type boolean of empty string is false, otherwise true

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);

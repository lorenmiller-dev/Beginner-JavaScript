// User Input

// window prompt

//let username = window.prompt("What is your name? ");
//console.log(username)

// HTML textbox

let username;

document.getElementById("myButton").onclick = function () {
  username = document.getElementById("myText").value;
  console.log(username);
  document.getElementById("myLabel").innerHTML = "Hello, " + username;
};

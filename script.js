// script.js

// Part 1: JavaScript Basics

// Variables and Data Types
let name = "John Doe";
let age = 25;
let isStudent = true;
let hobbies = ["reading", "gaming", "coding"];
let person = { firstName: "John", lastName: "Doe" };

console.log(`Name: ${name} (Type: ${typeof name})`);
console.log(`Age: ${age} (Type: ${typeof age})`);
console.log(`Is student: ${isStudent} (Type: ${typeof isStudent})`);
console.log(`Hobbies: ${hobbies} (Type: ${typeof hobbies})`);
console.log(`Person: ${JSON.stringify(person)} (Type: ${typeof person})`);

// Operators - Simple Calculator
function calculator() {
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));
    let operation = prompt("Choose an operation (+, -, *, /):");
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        alert("Invalid input. Please enter numbers.");
        return;
    }

    switch (operation) {
        case "+": result = num1 + num2; break;
        case "-": result = num1 - num2; break;
        case "*": result = num1 * num2; break;
        case "/": result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero"; break;
        default: result = "Invalid operation";
    }

    alert(`Result: ${result}`);
}

// Function - Greet User
function greetUser(name) {
    return `Hello, ${name}! Welcome to JavaScript.`;
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("greeting").innerText = greetUser("Joel Maluki");
});

// Part 2: JavaScript Control Structures

// If Statement - Voting Eligibility
function checkVotingEligibility() {
    let userAge = parseInt(prompt("Enter your age:"));
    let message = userAge >= 18 ? "You are eligible to vote." : "You are not eligible to vote.";
    document.getElementById("eligibility").innerText = message;
}

// Loop - Display numbers from 1 to 10
function displayNumbers() {
    let list = document.getElementById("number-list");
    for (let i = 1; i <= 10; i++) {
        let listItem = document.createElement("li");
        listItem.innerText = i;
        list.appendChild(listItem);
    }
}

// Part 3: DOM Manipulation

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("h1").innerText = "JavaScript in Action!";

    let dynamicDiv = document.getElementById("dynamic-content");
    let newParagraph = document.createElement("p");
    newParagraph.innerText = "This content was added dynamically using JavaScript.";
    dynamicDiv.appendChild(newParagraph);
});

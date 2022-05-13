let num1 = Number(prompt("Put a number"));
let num2 = document.querySelector(".number");
num2.textContent = num1;

let lenConv = document.querySelector(".meter");
let volConv = document.querySelector(".liter");
let masConv = document.querySelector(".kilo");

function length() {
  lenConv.textContent = `${num1} meters = ${(num1 * 3.28).toFixed(
    3
  )} feet | ${num1} feet = ${(num1 / 3.28).toFixed(3)} meters`;
}
length();

function volume() {
  volConv.textContent = `${num1} liters = ${(num1 / 3.785).toFixed(
    3
  )} gallons | ${num1} gallons = ${(num1 * 3.785).toFixed(3)} liters`;
}
volume();
function mass() {
  masConv.textContent = `${num1} kilograms = ${(num1 * 2.2).toFixed(
    3
  )} pounds | ${num1} pounds = ${(num1 / 2.2).toFixed(3)} kilograms`;
}
mass();

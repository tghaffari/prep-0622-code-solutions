// function addTwoNumbers(x, y) {
//  return x + y;
// }

// var sum = addTwoNumbers(4, 4);
// console.log('sum', sum);

function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var sum = addTwoNumbers(2, 2);
console.log('sum:', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}
var minutes = convertHoursToMinutes(1);
console.log('minutes:', minutes);

function getGreeting(name) {
  return 'Hello' + ' ' + name + '!';
}
var greeting = getGreeting('World');
console.log('Greeting:', greeting);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
var answer = addAndMultiplyBy5(10, 5);
console.log('Add and Multiply by 5:', answer);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
var answerDivide = multiplyAndDivideBy5(35, 10);
console.log('Multiply and Divide by 5:', answerDivide);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
var subtract = subtractTwoNumbers(22, 7);
console.log('Subtract two numbers:', subtract);

function getCircleCircumference(radius) {
  return radius * 2 * Math.PI;
}
var circumference = getCircleCircumference(5);
console.log('Circumference:', circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
var fullName = getFullName('Tarra', 'Ghaffari');
console.log('Full Name:', fullName);

function cube(num1) {
  return Math.pow(num1, 3);
}

var cubed = cube(5);
console.log('Number cubed:', cubed);

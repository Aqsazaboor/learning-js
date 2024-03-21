var theacherName = "azamzia";
console.log(theacherName);
console.log(4 + 6);

// values
// 42; //number
// 3.43;

// true;
// false;

// undefined;
// null[(1, 2, 3)]; //Array
// {
//   name: "harrys";
// }

// operations
3 + 4;
// 43 - 1;
// "aqsa" + "zaboor";
// !false;

// 3.0 === 3;
// 4 < 3;
// true && false;
var name = "kyle simpson";
var age;
age = 38;
var friend = ["brandon", "Marc"];

console.log(friend.length);
console.log(friend[1]);

//three ways to declear a variable
var myName = "aqsazaboor";
// var is use in hole prgram
myName = "aqsaali";
console.log(myName);
let ourName = "free code camp";
console.log(ourName);
// let is use in a scope
const pi = 3.14;
// const is never change
console.log(pi);

//storing values with assiggnment operator
var a;
var b = 2;
console.log(a);
a = 7;
b = a;
console.log(a);

// initializing variables  assignment operator
var h = 3;
//initialize these three variables
var a = 5;
var b = 10;
var c = "i am ";
a = a + 1;
b = b + 5;
c = c + "aqsa!";

//case sensitivty in variable
// Declarations
var studlyCapVar;
var properCamelCase;
var titleCaseover;
//assignments
studlyCapVar = 10;
properCamelCase = "A string";
titleCaseover = 9000;
console.log(studlyCapVar);
console.log(properCamelCase);
console.log(titleCaseover);

//adding Number
var sum = 10 + 10;
console.log(sum);

// subtracting number
var subtracting = 45 - 33;
console.log(subtracting);

// Multiplaying Number

var product = 8 * 10;
console.log(product);

// dividing Number
var quotient = 66 / 0;

//increment and decrement

var myVar = 87;

myVar = myVar + 1;
myVar++;
console.log(myVar);

//Decimal number

var ourDecimal = 5.7;
var myDecimal = 0.009;

//multiply Decimals number

console.log(product);

//divide decimals

var quotient = 4.0 / 2.0;

console.log(quotient);

//finding a remainder

var remainder;
remainder = 11 % 3;
console.log(remainder);

//Augmented addition
var a = 3;
a += 12;
b += 8;
c += 5;

//compound Assignment with augmented subtraction
a = a - 6;
a -= 12;
//both are equal

//augmented math operations

a = 3 * b;
a *= 6;

//compound assigment with augment divion
var a = 48;
var b = 56;
var c = 33;

//
a /= 55;
b /= 44;
c /= 21;
console.log(a);
console.log(b);
console.log(c);

// declare string variable

var firstName = "aqsa";
var lastName = "zaboor";
console.log(firstName);
console.log(lastName);

//

var myStr = "i am a double quoted";

//plus equals opertor
var ourStr = "i am come first.";
ourStr += "i come second.";
console.log(ourStr);

// constructing string with variable
var firstLine = "how are you?";
var secondLine = "i am fine";
firstLine += secondLine;
console.log(firstLine);

// find length  of string
var lastNameLength = 0;
var lastName = "alasqa";
lastNameLength = lastName.length;
console.log(lastNameLength);

//array  store multipule values
var texArray = [[45, 60], ["i am good]"]];
console.log(texArray);

var ourArry = [50, 69, 87];
var ourData = ourArry[0];
console.log(ourData);

var myArray = [50, 55, 44];
var myData = myArray[0];
console.log(myData);

//access multi-dimensional array
var myArray = [[1, 3, 4], [4, 5, 6], [[6, 4, 5]]];
console.log(myArray);

//manipulate arrays with push()
var ourArry = ["stimpon", "cat"];
ourArry.push(["happy", "joy"]);
console.log(ourArry);

var myArray = [
  ["johan", 23],
  ["cat", 2],
];
myArray.push(["dog", 3]);
console.log(myArray);

//manipulate arrays with pop remove first element in arry
var ourArray = [1, 2, 3];
var removedFromOurArray = ourArray.pop();
console.log(ourArray);

var myArray = [
  ["aqsa", "zaboor"],
  ["cat", 2],
];
var removedFromOurArray = myArray.pop();
console.log(myArray);

//maniplate array with shift() shift function is like pop function remove fist item in the array
var ourArray = ["sipmtson", "j"["cat"]];
var removedFromOurArray = ourArray.shift();
console.log(ourArray);

//maniplate array with shift() shift function is like push function add fist item in the array

var ourArray = ["aqsa", "j", "cat"];

// if i add
// ourArray .shift() its delete aqsa  and there are three item its remove first item
ourArray.unshift("happy");

console.log(ourArray);

//shopping list nesting array
var myList = [
  ["cereal", 22],
  ["egg", 12],
  ["oranges", 12],
];
myList.unshift("milk");
console.log(myList);

//write a reuseable code with function
function reusableFunction() {
  console.log(" hello hamza");
}
reusableFunction();

//passing value to  function with argument
function ourFunctionWithArgs(milk, egg) {
  console.log(milk - egg);
}
ourFunctionWithArgs(78, 55);

function functionList(a, b) {
  console.log(a + b);
}
functionList(55, 88);

//global scope  and local scope and function
var outerWear = "T-Shirt";

function myOutfit() {
  var outWear = "sweter";
  return outWear;
}
console.log(myOutfit());
console.log(outerWear);

//return a value from a function with return

function minusSeven(num) {
  return num - 7;
}
console.log(minusSeven(10));

function fiveTime(num) {
  return num * 5;
}
console.log(fiveTime(5));

// understanding undefined value returned from a fuction
var changed = 0;
function change(num) {
  return (num + 5) / 3;
}

changed = change(10);
console.log(changed);

var processed = 0;
function processArg(num) {
  return (num + 3) / 5;
}
processed = processArg(3);
console.log(processed);

//stand in line

// if statement
function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return "yes ,its ture";
  }
  return "no, it's not false";
}
trueOrFalse(false);
console.log(trueOrFalse(true));

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

// equality operators

function equalTest(num) {
  if (num == 44) {
    return "Equal";
  }
  return "not equal";
}
console.log(equalTest(33));

//comparison with the strict equality operator
//equal operators
function comperEqual(a, b) {
  if (a === b) {
    return "Equal";
  }
  return "not equal";
}
console.log(comperEqual(10, "10"));
console.log(comperEqual(10, 10));

function testEqual(val) {
  if (val != 66) {
    return "not Equal";
  }
  return "equal";
}
console.log(testEqual(10));

// strict inequality operator
function testStrictNotEqual(val) {
  if (val != 33) {
    return "not equal";
  }
  return "equal";
}
console.log(testStrictNotEqual(34));
//comparisons with the logical and operator
function testGreater(val) {
  if (val > 100) {
    return "over 100";
  }

  if (val > 10) {
    return "over 10";
  }
  return "10 or under";
}
console.log(testGreater(44));

//and / or operator
function testLogicalAnd(val) {
  if (val <= 50 && val >= 25) {
    return "yes";
  }
  return "no";
}
console.log(testLogicalAnd(10));

// if else statment
function testElseIf(val) {
  if (val > 10) {
    return "greater then 10";
  } else if (val < 5) {
    return "smaller then 5";
  } else {
    return "between 5 and 10";
  }
}
console.log(testElseIf(6));
console.log(testElseIf(99));

//case  in switch
function caseInSwitch(val) {
  var answer = "";
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "beta";
      break;
    case 4:
      answer = "beta";
      break;
  }
  return answer;
}
console.log(caseInSwitch(4));

function seqentialSizes(val) {
  var answer = "";
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "high ";
      break;
  }

  return answer;
}
console.log(seqentialSizes(1));

//replacing is else chains with switch
//returning boolen value from function
function isLess(a, b) {
  return a < b;
}
console.log(isLess(20, 15));

//return early pattern for function
function abTest(a, b) {
  if (a < 0 || b < 0)
    return Math.random(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
console.log(abTest(2, 2));

//
//counting card
//The Difference Between Arrays and Objects
//In JavaScript, arrays use numbered indexes. In JavaScript, objects use named indexes. Arrays are a special kind of objects, with numbered indexes.

//build object

var dog = {
  name: "ladu",
  age: 9,
  "legs ": "4",
  friends: ["heri", "tom"],
};

console.log(dog);

// dots notations
var testObj = {
  hat: "ballcap",
  shirt: "jercy",
  " shoes": "cleats",
};
var hatValue = testObj.hat;
var shirtValue = testObj.shirt;
console.log(hatValue);

//bracket notation
//if there is space in item name " al head" like that you can usr bracket notations
var testObj = {
  "an entree": "humburger",
  "my side": " veggies",
  "the drink ": "water",
};
var entreeValue = testObj["an entree"];
var drinkValue = testObj["the drink "];
console.log(entreeValue);
console.log(drinkValue);

// variables
//updating obeject properties

var myDog = {
  name: "ladu",
  age: 9,
  "legs ": "4",
  friends: ["heri", "tom"],
};
myDog.name = "happy camper";

console.log(myDog);

//add properties from object
var myDog = {
  name: "ladu",
  age: 9,
  "legs ": "4",
  friends: ["heri", "tom"],
};
myDog.name = "happy camper";
myDog["bark"] = "woof!";

console.log(myDog);

//delete properties from object
var lastDog = {
  name: "ladu",
  " age": 9,
  "legs ": "4",
  friends: ["heri", "tom"],
  "barrn ": "bow-wow",
};
lastDog.name = "happy camper";
delete lastDog["barrn "];

console.log(lastDog);

//  object for lookups

function phoneticlookup(val) {
  var result = "";

  var lookup = {
    alpha: "admas",
    bravo: "Boston",
    echo: "denver",
    dtox: "easy",
  };
  result = lookup[val];
  return result;
}
console.log(phoneticlookup("echo"));
// testing object for properties
var myobj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh",
};
function checkObj(checkProp) {
  if (myobj.hasOwnProperty(checkProp)) {
    return myobj[checkProp];
  } else {
    return "not Found";
  }
}

console.log(checkObj("hello"));
console.log(checkObj("gift"));

// javascript store complex data on it store arrays ,object,strings
var myMusic = [
  {
    artist: "Billy joel",
    title: "Piano Man",
    release_year: 1973,
    formats: ["CD", "8T", "LP"],
    // gold: ture,
  },
  {
    artist: "Bahra",
    title: "retya",
    release_year: 1973,
    formats: ["ytube", "tiktok"],
    // gold: ture,
  },
];
console.log(myMusic);

//nested objects
// in order to access sub-properties of an object you can chain together the dot or bracket notation.
var myStorage = {
  car: {
    inside: {
      " glove box": "maps",
      "passenger seat": "crumbs",
    },
    outside: {
      trunk: "jack",
    },
  },
};
var gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents);

//accessing nested arrays
var myPlants = [
  {
    type: "flower",
    list: ["rose", "tulip", "dandelion"],
  },
  {
    type: "trees",
    list: ["fir", "pine", "birch"],
  },
];
var secondTree = myPlants[1].list[1];
var secondTree = myPlants[0].list[1];
console.log(secondTree);

// while loops
//while loop that runs while a specified condition is ture and stop once its no longer true
var myArray = [];
var i = 0;
while (i < 5) {
  myArray.push(i);
  i++;
}
console.log(myArray);

//iterate with for loops

var ourArray = [];
for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}
console.log(ourArray);

//odd number with a for loop
var ourArray = [];

for (var i = 0; i < 10; i += 2) {
  ourArray.push(i);
}
console.log(ourArray);

//count backwords with a for loop

var ourArray = [];
for (var i = 10; i > 0; i -= 2) {
  ourArray.push(i);
  console.log(ourArray);
}

//iterate through an array with a for loop
var myArr = [2, 3, 4, 5, 6];
var total = 0;

for (var i = 0; i < myArr.length; i++) {
  total += myArr[i];
}
console.log(total);
// nesting for loops
// array inside the array multipul arra
//do while loop  run at least one time after  check the condiction after its run//
// random fractionand whole numbers
function randomFraction() {
  return Math.random();
}
console.log(randomFraction());

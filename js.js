//JavaScript Notes

//Display a message
alert("Hello world");
//Creates a pop-up dialog for the user with the message "Hello World"

//Declare a variable
var myVar;
myVar = 1;
myVar = "string";
myVar = true;
//JavaScript has dynamic variables, that can hold values ranging from numbers, strings, and booleans.

//Increase a variable by one - shorthand
var num = 1;
num++;
//num is now equal to 2

//Increase a variable and a new variable by one - shorthand
var num = 1;
var newNum = ++num;
//Both num and newNum are now equal to 2

//Concatenate strings
var name = "James";
alert("Hello, " + name + ".");
//Will alert: "Hello, James.";

//Ask for user input
var userInput = prompt("What is your name?", "Ex: John Smith");
/*
An alert will display with a textbox. The textbox will default to "Ex: John Smith". What the user enters is then stored in
userInput
*/

//If statements
var num = 1;
if (num === 1) {
	alert("He was number 1!");
}
//If num is equal to 1 and is also and integer datatype the alert will display

/*Comparison Operators
=== - Tests value and datatype - Equal to
== - Tests value only - Equal to
!== - Tests value and datatype - Does not equal to
!= - Tests value only - Does not equal to
= - Assigns values and is not used for comparison
>= - Great than or equal to
> - Greator than
< - Less than
<= - Less than or equal to
*/

//If, else if, else statements
var age = prompt("What is your age?");
if (age == 19) {
	alert("We are the same age.");
} else if (age > 19) {
	alert("You are young.");
} else {
	alert("You are old.");
}
/*
If age is equal to 19, it will display "We are the same age."
If age is less than 19, it will display "You are young."
If age is anything else, it will display "You are old."
*/

//Testing multiple conditions
var age = 19;
var weight = 190;
if (age == 19 && weight == 190) {
	alert("You are the right weight for your age.");
}
//If age is 19 and weight is equal to 190 it will display: "You are the right weight for your age."

//Declare an array
var myArray = [];
var cities = ["city1", "city2", "city3"];
/*
cities[0] = "city1";
cities[1] = "city2";
cities[2] = "city3";
*/

//Remove the last element from an array
var cities = ["city1", "city2", "city3"];
cities.pop();
//cities = ["city1", "city2"];

//Add to the end of an array
var cities = ["city1", "city2", "city3"];
cities.push("city4", "city5");
//cities = ["city1", "city2", "city3", "city4", "city5"];

//Remove the first element from an array
var cities = ["city1", "city2", "city3"];
cities.shift();
//cities = ["city2", "city3"];

//Add to the beginning of an array
var cities = ["city1", "city2", "city3"];
cities.unshift("city-1, city0");
//cities = ["city-1", "city0", "city1", "city2", "city3"];

//Add any where in an array
var cities = ["city1", "city2", "city3"];
cities.splice(0, 0, "newCity");
/*
splice - first digit is start index, second digit is number of elements
cities = ["newCity", "city1", "city2", "city3"];
*/

//Remove any where in an array
var cities = ["city1", "city2", "city3"];
cities.splice(0, 1);
/*
splice - first digit is start index, second digit is number of elements
cities = ["city2", "city3"];
*/

//Copy parts of an array into a new array
var cities = ["city1", "city2", "city3"];
var mustVisit = cities.slice(1, 3);
/*
slice - first digit is the element to start at, second digit is the element number AFTER the last element you want to copy
mustVisit = ["city2", "city3"];
*/

//For loops
for (var i = 0; i < 5; i++) {
	console.log(i);
}
//Will print out i 5 times. i increases by one every iteration:
/* Log:
1
2
3
4
5
*/

//For in statment
var colors = ["red", "blue", "green"];
for (var i in colors) {
	console.log(colors[i]);
}
/*
Short hand for writing the following:
	var colors = ["red", "blue", "green"];
	for (var i = 0; i < colors.length; i++) {
		console.log(colors[i]);
	}

Both will loop through all values of the colors array and print each value
*/

//Stop a loop early - Flags
var people = ["James", "Jarad", "Billy"];
var foundJarad = false;
for (var i in people) {
	if (people[i] == "Jarad") {
		foundJarad = true;
		break;
	}
}
if ( !(foundJarad) ) {
	alert("Jarad was not found.");
}
/*
Will loop twice, find Jarad, and break the loop. Instead of looping 3 times.
You can break a loop early using flags and the break; command
*/

//Change to lower case
var string = "aBcDfgH";
string = string.toLowerCase();
//string = "abcdfgh";

//Change to upper case
var string = "aBcDcc";
string = string.toUpperCase();
//string = "ABCDCC";

//Find segment in string and remove it
var text = "Remove JAMES from this string.";
var firstChar = text.indexOf("JAMES");
text = text.slice(0, firstChar - 1) + text.slice(firstChar + 5);
//text = "Remove from this string."
var text = "Remove ORANGE from this string.";
var firstChar = text.indexOf("ORANGE");
text = text.slice(0, firstChar - 1) + text.slice(firstChar + 6);
/*
text = "Remove from this string."
In order to copy the beginning of the sentence, you start with index 0 and copy
every bit of the string until you reach the first letter - 1. It's the first letter
minus one because you want to include the first letter of the string you're trying to
delete. Then to add on the rest of the sentence, you slice at the end of the word you
are deleteing and don't include an end point, that will automatically copy the rest of
the string.
*/

//Finding a specific character in a string
var text = "This is a sentence.";
var firstChar = text.charAt(0);
var lastChar = text.charAt(text.length - 1);
/*
firstChar = "T";
lastChar = ".";
This can only display the character, it cannot be used to assign characters
*/

//Replace a segment in a string with another - EASY way
var text = "This is a sentence.";
var newText = text.replace("This is a sentence.", "Hunter smells bad.");
//newText = "Hunter smells bad."

//Replace all instances of a segment in a string with another - EASY way
var text = "This is a sentence. Blah blah blah. This is a sentence.";
var newText = text.replace(/This is a sentence./g, "");
/*
newText = " Blah blah blah. ";
Notice the reamining spaces
*/

//Round a number
var num = 5.75;
num = Math.round(num);
//num = 6;

//Round up a number - always
var num = 5.0000001;
num = Math.ceil(num);
//num = 6;

//Round down a number - always
var num = 5.9999999;
num = Math.floor(num);
//num = 5;

//Generate a random number
var randomNum = Math.random();
//randomNum = any number between 0.0000000000000000 and 0.9999999999999999 (16 decimal places)

//Generate a number between a range of your choosing
var randomNum = Math.floor(Math.random() * 10 + 1);
/*
The why isn't that important.
What you multiply by is your biggest number. In this example the largest # is 10
*/

//Convert string to integer
var string = "10";
string = parseInt(string);
//string = 10 not "10"

//Conver string to float
var string = "10.56";
string = parseFloat(string);
//string = 10.56 not "10.56"

//Convert to string to integer or float based on the string value
var string = "10";
string = Number(string);
//string = 10

//Convert number to string
var num = 10023;
num = num.toString();
//num = "10023" not 10023

//Control the length of decimals
var price = 10.789;
price = price.toFixed(2);
alert("$" + price);
//price = 10.78

//Remove decimal
var total = 10.023525235;
total = total.toFixed();
//total = 10;

// - - - - ALL DATE NOTES ARE RELATIVE TO THE TIME THEY WERE TAKEN - - - - //
// - - - -         Tue May 31 2016 19:26:57 GMT-0400 (EDT)         - - - - //

//Get current date and time
var now = new Date();
//copys the blue prints of the Date() object and allows you to use them
var dateString = now.toString();
//dateString = "Tue May 31 2016 19:26:57 GMT-0400 (EDT)"

//Get the current day
var now = new Date();
var theDay = now.getDay();
//getDay() gives 0 - 6 with 0 being Sunday and 6 being Saturday

//How to use the current day
var now = new Date();
var theDay = now.getDay();  //theDay = 2;
var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
theDay = days[theDay];			//theDay = "Tue";
//Create an array to correlate with the numbers getDay() gives you

//Get the current month
var now = new Date();
var theMonth = now.getMonth();
//getMonth() gives 0 - 11 with 0 being January and 11 being December

//How to use the current month
var now = new Date();
var theMonth = now.getMonth()
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Nov", "Dec"];
theMonth = months[theMonth];
//Create an array to correlate with the numbers getMonth() gives you

//Get the current day of the month
var now = new Date();
var date = now.getDate();
//getDate() gives 1 - 31

//Get the current year
var now = new Date();
var year = now.getYear();

//Get the current hour
var now = new Date();
var hour = now.getHours();
//0 is midnight, 12 is noon, 23 is 11 PM

//How to use the current hour
var now = new Date();
var hour = now.getHours();
var hours = [NaN, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

if (hour == 24) {
	hour = hours[hour] + " AM";
} else if (hour >= 12) {
	hour = hours[hour] + " PM";
} else if (hour < 12) {
	hour = hours[hour] + " AM";
}
/*
Create an array to correlate with the numbers getHours() gives you and then use if statements to determine AM or PM
and convert to a string
*/

//Get the current minute
var now = new Date();
var minute = now.getMinutes();

//Get the current second
var now = new Date();
var second = now.getSeconds();

//Get the current millisecond
var now = new Date();
var millisecond = now.getMilliseconds();

//Get the number of Milliseconds since midnight, Jan. 1, 1970
var now = new Date();
var compareTime = now.getTime();
//compareTime = 1464739271988

//How to compare time using two specific dates
var now = new Date();
var millisecondsToday = now.getTime();
var leaveForUtah = new Date("June 23, 2016");
var millisecondsUtah = leaveForUtah.getTime();

var millisecondsDifference = millisecondsUtah - millisecondsToday;

var dayDifference = Math.floor(millisecondsDifference / (1000 * 60 * 60 * 24));
/*
1000 miliseconds = 1 second * 60 = 1 minute * 60 = 1 hour * 24 = 1 day that is why you divide by 1000 * 60 * 60 * 24.
You round down to get the full number of days not a decimal number of days
dayDifference = 22
*/

//How to change elements of a Date object
var now = new Date();
now.setFullYear(2020);
now.setMonth(7); //June
now.setDate(13); //13th
now.setHours(11); //11am
now.setMinutes(30); //30 minutes
now.setSeconds(0);
now.setMilliseconds(0);

// - - - - ALL DATE NOTES ARE RELATIVE TO THE TIME THEY WERE TAKEN - - - - //
// - - - -         Tue May 31 2016 19:26:57 GMT-0400 (EDT)         - - - - //

//Functions
function addTwoNumbers(num1, num2) {
	return num1 + num2;
}

alert("The sum of 2 + 2 is: " + addTwoNumbers(2, 2));
alert("The sum of 3 + 3 is: " + addTwoNumbers(3, 3));
/*
Use a function any where you would use the same lines of code multiple times
Otherwise you would have to write:
	var sum;
	sum = 2+2;
	alert("The sum of 2 + 2 is: " + sum);
	sum = 3+3;
	alert("The sum of 3 + 3 is: " + sum);
Obviously not the best example, but functions can save lots of time in certain scenarios

num1 and num2 are referred to as the parameters
addTwoNumbers(2, 2) 2 and 2 are the arguments that are passed to the parameters
addTwoNumbers(3, 3) 3 and 3 are the arguments that are passed to the parameters
*/

//Local vs Global Variables
function notMain() {
	var x = 3;		//Local, only notMain can access it, unless you return its value
	console.log(x);
}

console.log(x); //x was never declared in the main code, so it is undefined

var x = 10; //Global, all functions can access it

console.log(x); //Logs 10

//Switch statements - The better if statement (in certain cases)
var workDays = ["Mon", "Tue"];
var currentDay = "Mon";
switch(currentDay) {
	case 'Mon':
		alert("Time to make some money!");
		break;
	case 'Tue':
		alert("Time to make some money!");
		break;
	default:
		alert("Time to get some sleep!");
}
/*
Will display the alert "Time to make some money!". Be sure to ALWAYS include a breakvunder each case besides the default case.
default: is the same as else {} in an if statement.
This switch statment is the same as writing:
	var workDays = ["Mon", "Tue"];
	var currentDay = "Mon";
	if (currentDay == "Mon") {
		alert("Time to make some money!");
	} else if (currentDay == "Tue") {
		alert("Time to make some money!");
	} else {
		alert("Time to get some sleep!");
	}
*/

//While Loops
var answer;
while (answer != 4) {
	answer = prompt("What's 2+2?");
}

console.log("You'll only get here if you answer correctly.");
/*
While loops are good for user validation. The program will not proceed until 4 is inserted. English translation:
"While the answer does not equal 4, ask What's 2+2? and store it in answer."
*/

//Do-While Loops
do {
	var answer = prompt("What's 2+2?");
} while (answer != 4);

console.log("You'll only get here if you answer correctly");
//Do-While loops are good when you want the code to run at least once regardless of any previously values / conditions.

//Objects
var person = {
	firstName: "Bob",
	lastName: "Joe",
	age: 19
};
/*
Notice how keys do not end in semi-colons but in commas. Also person ends in a semi-colon because it is being assigned the keys.
Think of it as var person = {};
Usually when something is being assigned a value you end that line in a semi-colon
*/

//Delete object keys
var person = {
	firstName: "Bob",
	lastName: "Joe",
	age: 19
};

delete person.age;
//The object person no longer has the key of age

//Check for keys in an Object
var person = {
	firstName: "Bob",
	lastName: "Joe",
	age: 19
};

if ("lastName" in person) {
	console.log(person.age);
}
/*
The key must be in quotation marks and spelt exactly using the same casing.
The object must be spelt the same as when it was declared and not in quotation marks
*/

//Methods
var person = {
	firstName: "Bob",
	lastName: "Joe",
	age: 19,
	greeting: function() {
		console.log("Hello there, " + this.firstName + " " + this.lastName + ".");
	}
}

var person2 = {
	firstName: "Sally",
	lastName: "Jones",
	age: 20,
	greeting: function() {
		console.log("Hello there, " + this.firstName + " " + this.lastName + ".");
	}
}

person.greeting();
person2.greeting();
/*
person.greeting() = "Hello there, Bob Joe."
person2.greeting() = "Hello there, Sally Jones."
*/

//Constructors
function Person(firstName, lastName, age, phoneNumber) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
	this.phoneNumber = phoneNumber;
}

var bobJoe = new Person("Bob", "Joe", 19, "3869313452");
/*
firstName = "Bob"
lastName = "Joe"
age = 19
phoneNumber = "3869313452"
*/

//Constructor Methods
function Person(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.greeting = function() {
		console.log("Hello there, " + this.firstName + " " + this.lastName + ".");
	}
}

var sallyJones = new Person("Sally", "Jones");
sallyJones.greeting();
//"Hello there, Sally Jones."

//Prototypes - Functions
function Person(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
}

Person.prototype.greeting = function() {
	console.log("Hello there, " + this.firstName + " " + this.lastName + ".");
}

var bobJoe = new Person("Bob", "Joe");
var sallyJones = new Person("Sally", "Jones");
bobJoe.greeting();
sallyJones.greeting();
/*
bobJoe = "Hello there, Bob Joe."
sallyJones =  "Hello there, Sally Jones."
*/

//Prototypes - Properties
function Person(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
}

Person.prototype.species = "human";

var bobJoe = new Person("Bob", "Joe");
var sallyJones = new Person("Sally", "Jones");

console.log(bobJoe.species);
console.log(sallyJones.species);
//Both are equal to "human"

//Check for properties
function Person(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
}

var askingForAge = "age" in Person;
//false

//List all properties of an object
var propertyList = [];

function Person(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
}

Person.prototype.species = "human";

var bobJoe = new Person("Bob", "Joe");

for (var i in bobJoe) {
	propertyList.push(i);
	console.log(i);
}
/*
Log:
firstName
lastName
species

propertyList = [ "firstName" , "lastName", "species" ];
*/

//List properties only in the original definition. No prototype properties.
var propertyList = [];

function Person(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
}

Person.prototype.species = "human";

var bobJoe = new Person("Bob", "Joe");

for (var i in bobJoe) {
	if (bobJoe.hasOwnProperty(i)) {
		propertyList.push(i);
		console.log(i);
	}
}
/*
Log:
firstName
lastName

propertyList = [ "firstName" , "lastName" ];
*/

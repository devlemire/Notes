//JavaScript Notes

//Display a message
alert("Hello world"); 
//Creates a pop-up dialog for the user with the message "Hello World"

//Declare a variable
var myVar;
myVar = 1;
myVar = "string";
myVar = true;
//JavaScript has dynamic variables, that can hold values ranging from numbers, strings,
//and booleans.

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
//An alert will display with a textbox. The textbox will default to "Ex: John Smith"
//What the user enters is then stored in userInput

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
//If age is equal to 19, it will display "We are the same age."
//If age is less than 19, it will display "You are young."
//If age is anything else, it will display "You are old."

//Testing multiple conditions
var age = 19;
var weight = 190;
if (age == 19 && weight == 190) {
	alert("You are the right weight for your age.");
}
//If age is 19 and weight is equal to 190 it will display
//"You are the right weight for your age."

//Declare an array
var myArray = [];
var cities = ["city1", "city2", "city3"];
//cities[0] = "city1"; 
//cities[1] = "city2";
//cities[2] = "city3";

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
//splice - first digit is start index, second digit is number of elements
//cities = ["newCity", "city1", "city2", "city3"];

//Remove any where in an array
var cities = ["city1", "city2", "city3"];
cities.splice(0, 1);
//splice - first digit is start index, second digit is number of elements
//cities = ["city2", "city3"];

//Copy parts of an array into a new array
var cities = ["city1", "city2", "city3"];
var mustVisit = cities.slice(1, 3);
//slice - first digit is the element to start at, 
//second digit is the element number AFTER the last element you want to copy
//mustVisit = ["city2", "city3"];

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
/*Short hand for writing the following:
	var colors = ["red", "blue", "green"];
	for (var i = 0; i < colors.length; i++) {
		console.log(colors[i]);
	}
*/
//Both will loop through all values of the colors array and print each value

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
//Will loop twice, find Jarad, and break the loop. Instead of looping 3 times.
//You can break a loop early using flags and the break; command

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
//text = "Remove from this string."
/*In order to copy the beginning of the sentence, you start with index 0 and copy
every bit of the string until you reach the first letter - 1. It's the first letter
minus one because you want to include the first letter of the string you're trying to
delete. Then to add on the rest of the sentence, you slice at the end of the word you
are deleteing and don't include an end point, that will automatically copy the rest of 
the string.*/

//Finding a specific character in a string
var text = "This is a sentence.";
var firstChar = text.charAt(0);
var lastChar = text.charAt(text.length - 1);
//firstChar = "T";
//lastChar = ".";
//This can only display the character, it cannot be used to assign characters

//Replace a segment in a string with another - EASY way
var text = "This is a sentence.";
var newText = text.replace("This is a sentence.", "Hunter smells bad.");
//newText = "Hunter smells bad."

//Replace all instances of a segment in a string with another - EASY way
var text = "This is a sentence. Blah blah blah. This is a sentence.";
var newText = text.replace(/This is a sentence./g, "");
//newText = " Blah blah blah. ";
//Notice the reamining spaces

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
//randomNum = any number between 0.0000000000000000 and 0.9999999999999999
//16 decimal places

//Generate a number between a range of your choosing
var randomNum = Math.floor(Math.random() * 10 + 1);
//The why isn't that important. 
//What you multiply by is your biggest number. In this example the largest # is 10

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
























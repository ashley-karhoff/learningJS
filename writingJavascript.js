// This is how you'd create a popup that asks for a name, then displays a greating that includes the user's input (ie. their name) for a personalized message.

// var username = prompt("What is your name?");
// alert("Nice to meet you, " + username);
// console.log("Also great to meet you, " + username);

// Create a console log record that says "Your name is Ashley Karhoff" "You are 23 years old" based off input data

// var firstName = prompt("What is your first name?");
// var lastName = prompt("What is your last name?");
// var age = prompt("How old are you?");
// console.log("Your full name is " + firstName + " " + lastName);
// console.log("You are " + age + " " + "years old.");

// Age calculator

// var age = prompt("How old are you?");
// var days = age * 365.25;
// alert("You are " + age + " years old. You've been alive " + days + " days.")

// Age conditional

// var age = prompt("How old are you?");
// if(age < 18){
// 	alert("Sorry, you are not old enough to enter this venue.")
// 	console.log("Sorry you are not old enough to enter the venue.")
// }

// else if(age < 21){
// 	alert("You're able to enter the venue, but you can't drink")
// 	console.log("You're able to enter the venue, but you can't drink")
// }

// else {
// 	alert("Come on in")
// 	console.log("Come on in")
// }

// Age conditional exercise

// var age = prompt("How old are you?")

// if (age < 0) {
// 	alert("Sorry, this is a negative number")
// }

// else if (age === "21") {
// 	alert("Happy 21st Birthday!")
// }

// else {
// 	alert("Thanks!")
// }

// Number Guessing Game

// Create secretNumber
var secretNumber = 4;

// ask user for guess
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);

// check guess
if (guess === secretNumber) {
	alert("You got it right")
}

// too high
else if(guess > secretNumber) {
	alert("Too high guess again")
}
// too low

else {
	alert("Too low guess again")
}

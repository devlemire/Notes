var selection = ["Rock", "Paper", "Scissors"];  //Used for displaying choice in console.log
var player = playerChoice();  //Store the player's choice in the global variable player using the function playerChoice
var computer = computerChoice();  //Store the computer's choice in the global variable computer using the function computerChoice

console.log(compare(player, computer));  //Compare the choices from the player and the computer, then determine a winner and log it for the user

function playerChoice() {
	var choice;  //Local var to hold the choice from the player
	 do {  //I used a do-while so that the prompt would be asked at least once
        choice = prompt("Rock(1), Paper(2), or Scissors(3)?").toLowerCase();  //Ask the user through prompt for their choice of Rock, Paper, or Scissors and store in the local variable choice
        switch(choice) {  //Convert their choice to usable data if the user entered "rock", "paper", or "scissors"
        	case 'rock':
        		choice = 1;  //"rock" is the same as 1 ("rock" = 1)
        		break;
        	case 'paper':
        		choice = 2;  //"paper" is the same as 2 ("paper" = 2)
        		break;
        	case 'scissors':
        		choice = 3;  //"scissors" is the same as 3 ("scissors" = 3)
        		break;
        	default:
        		choice = parseInt(choice);  //If the user doesn't enter rock, paper, or scissors, default to converting their answer to an integer
        }
    } while (choice !== 1 && choice !== 2 && choice !== 3);  //Continue to ask for choice if choice does not equal 1, 2, or 3
  
	console.log("Player Choice: " + selection[choice - 1] + ".")  //Log information to the user using the selection array
	return choice;  //Return the numeric choice value to the global variable player
}

function computerChoice() {
	var choice = Math.floor(Math.random() * 3 + 1);  //Generates a number, 1 - 3 (rock = 1, paper = 2, scissors = 3)
	console.log("Computer Choice: " + selection[choice - 1] + ".");  //Log information to the user using the selection array
	return choice;  //Return the numeric choice value to the global variable computer
}

function compare(player, computer) {  //Use the two numbers (player & computer) to determine a winner through switch statements
	switch(player) {
		case 1:  //Player chose rock
			switch(computer) {
				case 1:  //Computer chose rock
					return "The game resulted in a tie.";  //Return the winner for console.log
				case 2:  //Computer chose paper
					return "The computer won.";  //Return the winner for console.log
				case 3:  //Computer chose scissors
					return "You won.";  //Return the winner for console.log
			}
			break;
		case 2:  //Player chose paper
			switch(computer) {
				case 1:  //Computer chose rock
					return "You won.";  //Return the winner for console.log
				case 2:  //Computer chose paper
					return "The game resulted in a tie.";  //Return the winner for console.log
				case 3:  //Computer chose scissors
					return "The computer won.";  //Return the winner for console.log
			}
			break;
		case 3:  //Player chose scissors
			switch(computer) {
				case 1:  //Computer chose rock
					return "The computer won.";  //Return the winner for console.log
				case 2:  //Computer chose paper
					return "You won.";  //Return the winner for console.log
				case 3:  //Computer chose scissors
					return "The game resulted in a tie.";  //Return the winner for console.log
			}
			break;
	} 
}
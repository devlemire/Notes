const options = ["Rock", "Paper", "Scissors"];

function playerChoice() {
  let choice;

  do {
    choice = prompt("Rock(1), Paper(2), or Scissors(3)?").toLowerCase();

    switch (choice) {
      case "rock":
        choice = 1;
        break;
      case "paper":
        choice = 2;
        break;
      case "scissors":
        choice = 3;
        break;
      default:
        choice = parseInt(choice);
    }
  } while (choice !== 1 && choice !== 2 && choice !== 3);

  console.log(`Player Choice: ${options[choice - 1]}.`);
  return choice;
}

function computerChoice() {
  const choice = Math.floor(Math.random() * 3 + 1);
  console.log(`Computer Choice: ${options[choice - 1]}.`);
  return choice;
}

function compare(player, computer) {
  switch (player) {
    case 1:
      switch (computer) {
        case 1:
          return "The game resulted in a tie.";
        case 2:
          return "The computer won.";
        case 3:
          return "You won.";
      }
      break;
    case 2:
      switch (computer) {
        case 1:
          return "You won.";
        case 2:
          return "The game resulted in a tie.";
        case 3:
          return "The computer won.";
      }
      break;
    case 3:
      switch (computer) {
        case 1:
          return "The computer won.";
        case 2:
          return "You won.";
        case 3:
          return "The game resulted in a tie.";
      }
      break;
  }
}

function play() {
  console.log(compare(playerChoice(), computerChoice()));
}

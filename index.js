function getRandomIntInclusive(min, max) {
    // Ensure min and max are integers
    min = Math.ceil(min);
    max = Math.ceil(max);
    // The maximum and minimum are inclusive
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getComputerChoice() {
    randInt = getRandomIntInclusive(0,2);
    switch(randInt) {
        case 0:
            return("ROCK");
        case 1:
            return("PAPER");
        case 2:
            return("SCISSORS");
        default:
            console.error("Error occured during computer choice selection.");
    } 
}

function playRound(computerChoice, playerChoice) {
    let message = "ERROR";

    if(typeof playerChoice != "string") {
        message = "ERROR! Please input a string."
    }
    playerChoice = playerChoice.toUpperCase();
    
    if(playerChoice != "ROCK" && playerChoice != "PAPER" && playerChoice != "SCISSORS") {
        message = "ERROR! Please input 'rock', 'paper', or 'scissors' as your selection."
    }

    switch(playerChoice) {
        case "ROCK":
            switch(computerChoice) {
                case "ROCK":
                    message = "Stalemate! ROCK ties ROCK.";
                    break;
                case "PAPER":
                    message = "You lose! PAPER beats ROCK.";
                    break;
                case "SCISSORS":
                    message = "You win! ROCK beats SCISSORS.";
                    break;
            }
            break;
        case "PAPER":
            switch(computerChoice) {
                case "ROCK":
                    message = "You win! PAPER beats ROCK.";
                    break;
                case "PAPER":
                    message = "Stalemate! PAPER ties PAPER.";
                    break;
                case "SCISSORS":
                    message = "You lose! SCISSORS beats PAPER.";
                    break;
            }
            break;
        case "SCISSORS":
            switch(computerChoice) {
                case "ROCK":
                    message = "You lose! ROCK beats SCISSORS.";
                    break;
                case "PAPER":
                    message = "You win! SCISSORS beats PAPER.";
                    break;
                case "SCISSORS":
                    message = "Stalemate! SCISSORS ties SCISSORS.";
                    break;
            }
            break;
    }

    return message;
}

function game() {
    let player = null;
    let computer = null;
    let result = null;

    // Play 5 rounds
    for (let i = 0; i < 5; i++) {
        player = prompt(`ROUND ${i+1}:\nChoose Rock, Paper, or Scissors:`);
        if(player == null) {
            console.log("Game canceled.");
            return;
        }

        if(player != "") {
            computer = getComputerChoice();
            result = playRound(computer, player);
    
            console.log(result);
        }
        else {
            console.log("You lose! You did not choose.");
        }


    }
}

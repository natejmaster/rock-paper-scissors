//Declares three variables with each value initially set to 0. These will update as the player plays more games.
let wins = 0;
let losses = 0;
let ties = 0;
//Declares the function that will run every time the game is played
function playGame() {
    //Declares a variable as an array with three values---Rock, Paper, and Scissors
    let choices = ["rock", "paper", "scissors"]
    //Lets user pick choices with a window prompt.
    let userChoice = window.prompt("Choose rock, paper, or scissors")
    //Computer chooses by selecting index of 0, 1, or 2 with Math.floor and Math.random * 3
    let computerChoice = choices[Math.floor(Math.random() * 3)]
    //Computer has a message to send to user if they don't choose rock, paper, or scissors
    if (!choices.includes(userChoice)) {
        window.alert("Invalid choice. Please choose rock, paper, or scissors.");
        return playGame();
    }
    //Alerts display user choice and computer choice
    window.alert(`You chose ${userChoice}.`);
    window.alert(`The computer chose ${computerChoice}.`);
    //If both choices are the same, alert states it's a tie.
    if (userChoice === computerChoice) {
        window.alert("It's a tie!");
        ties++;
    } else if (
        //The else if selector outlines all three victory scenarios and presents a victory alert if any condition is met
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        window.alert("Hooray! You won!");
        wins++;
        //If any other conditions occur, then the user loses and gets a loss alert.
    } else {
        window.alert("Aw, you lost!");
        losses++;
    }
    window.alert("Current Stats--- Wins:" + wins + " Losses: " + losses + " Ties: " + ties)
//Create an alert that offers the chance to play again
    if (window.confirm("Would you like to play again?")) {
        playGame();
    } else {
        window.alert("Oh well! Thanks for playing!")
    }
}
playGame();
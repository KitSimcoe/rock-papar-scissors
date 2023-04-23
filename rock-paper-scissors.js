
const choices = ["Rock", "Paper", "Scissors"]


//gets Computer choice and returns it
function getComputerChoice() {
    return (choices[(Math.floor(Math.random() * choices.length))]); //maths chooses from array at random.
}


//adds event listener for inputs and returns players choice
let button = document.querySelectorAll('input');

button.forEach((selection) => {
    selection.addEventListener('click', (e) => {
        console.log(e);
        round(selection.value)
    });
    });

let computerScore = 0
let playerScore = 0
function round(playerChoice) {
    
    let computerChoice = getComputerChoice();
    

    alert(`You have selected ${playerChoice}! Computer has selected ${computerChoice}!`)

    if (computerChoice == playerChoice){
        alert("Draw!");
    } else if (computerChoice == "Rock" && playerChoice == "Paper") {
        document.querySelector("#playerWinCounter").innerText = ++playerScore;
    } else if (computerChoice == "Rock" && playerChoice == "Scissors") {
        document.querySelector("#playerWinCounter").innerText = ++playerScore;
    } else if (computerChoice == "Paper" && playerChoice == "Scissors") {
        document.querySelector("#playerWinCounter").innerText = ++playerScore;
    } else {
        document.querySelector("#computerWinCounter").innerText = ++computerScore;
    }

    checkWinner()

    return;
    }

function checkWinner() {
    if (playerWins == 5) {
        alert("Congratulations! You beat the computer. The game will now reset.")
        document.getElementById("computerWinCounter").innerHTML = 0;
        document.getElementById("playerWinCounter").innerHTML = 0;
        computerWins = 0
        playerWins = 0
        
    
    } else if (computerWins == 5) {
        alert ("You lost the game :( Better luck next time.")
        document.getElementById("computerWinCounter").innerHTML = 0;
        document.getElementById("playerWinCounter").innerHTML = 0;
        computerWins = 0
        playerWins = 0
   
    } else {
        return;
    }
}




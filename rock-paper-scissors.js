
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

    console.log(computerScore, playerScore)
    checkWinner()
    return;
    }

function checkWinner() {
    if (playerScore == 5 || computerScore == 5) {
        playerScore = 0;
        computerScore = 0;
        document.querySelector('#playerWinCounter').innerText = 0;
        document.querySelector('#computerWinCounter').innerText = 0;
        if (playerScore == 5) {
            alert("Congratulations! You beat the computer. The game will now reset.")
            let audio = document.querySelector('#winSound');
            audio.play();
        } else {
            alert ("You lost the game :( Better luck next time.")
            let audio = document.querySelector('#winSound');
            audio.play();
        } 
    } else {
        
    }}




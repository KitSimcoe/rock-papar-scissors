
let choices = ["Rock", "Paper", "Scissors"]

//gets Computer choice and returns it
function getComputerChoice() {
    return (choices[(Math.floor(Math.random() * choices.length))]); //maths chooses from array at random.
}



// function to count player wins
let playerWins = 0

function playerWinCounter() {
 updatedisplay(++playerWins)

    function updatedisplay(val) {
    document.getElementById("playerWinCounter").innerHTML = val; // innerHTML edits the content of the element.
    }
}


//function to count computer wins
let computerWins = 0
console.log(computerWins);


function computerWinCounter() {
 updatedisplay(++computerWins)
 

    function updatedisplay(val) {
    document.getElementById("computerWinCounter").innerHTML = val;
    
    
    }
}



function checkWinner() {
    if (playerWins == 5) {
        alert("Congratulations! You beat the computer. The game will now reset.")
        document.getElementById("computerWinCounter").innerHTML = 0;
        document.getElementById("playerWinCounter").innerHTML = 0;
    
    } else if (computerWins == 5) {
        alert ("You lost the game :( Better luck next time.")
        document.getElementById("computerWinCounter").innerHTML = 0;
        document.getElementById("playerWinCounter").innerHTML = 0;
   
    } else {
        return;
    }
}

function round(selection) {

    // Gets Player selection via buttons on the html & computer choice via function
    let playerChoice = selection.value;
    let computerChoice = getComputerChoice();

    alert("You have selected " + playerChoice);
    alert("Computer has selected " + computerChoice);

    if (computerChoice == "Rock" && playerChoice == "Paper") {
        alert("You win this round!");
        playerWinCounter();

    } else if (computerChoice == "Rock" && playerChoice == "Scissors") {
        alert("You lose this round!");
        computerWinCounter();

    } else if (computerChoice == "Paper" && playerChoice == "Scissors") {
        alert("You win this round!");
        playerWinCounter();

    } else if (computerChoice == "Paper" && playerChoice == "Rock") {
        alert("You lose this round!");
        computerWinCounter();

    } else if (computerChoice == "Scissors" && playerChoice == "Paper") {
        alert("You lose this round!");
        computerWinCounter();

    } else if (computerChoice == "Scissors" && playerChoice == "Rock") {
        alert("You win this round!");
        playerWinCounter();

    } else {
        alert("Draw!")
    }
    
    console.log(computerWins);
    checkWinner()
    return (computerChoice);
}











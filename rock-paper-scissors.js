
let choices = ["Rock", "Paper", "Scissors"]

//gets Computer choice and returns it
function getComputerChoice() {
    return (choices[(Math.floor(Math.random() * choices.length))]); //maths chooses from array at random 
}



// function to count player wins
let playerWins = 0

function playerWinCounter() {
 updatedisplay(++playerWins)

    function updatedisplay(val) {
    document.getElementById("playerWinCounter").innerHTML = val;
    }
}


//function to count computer wins
let computerWins = 0

function computerWinCounter() {
 updatedisplay(++computerWins)

    function updatedisplay(val) {
    document.getElementById("computerWinCounter").innerHTML = val;
    }
}



function round(selection) {

    // Gets Player selection via buttons on the html & computer choice via function
    let playerChoice = selection.value;
    let computerChoice = getComputerChoice();

    alert("You have selected " + playerChoice);
    alert("Computer has selected " + computerChoice);

    if (computerChoice == "Rock" && playerChoice == "Paper") {
        alert("You Win!");
        playerWinCounter();

    } else if (computerChoice == "Rock" && playerChoice == "Scissors") {
        alert("You Lose!");
        computerWinCounter();

    } else if (computerChoice == "Paper" && playerChoice == "Scissors") {
        alert("You Win!");
        playerWinCounter();

    } else if (computerChoice == "Paper" && playerChoice == "Rock") {
        alert("You Lose!");
        computerWinCounter();

    } else if (computerChoice == "Scissors" && playerChoice == "Paper") {
        alert("You Lose!");
        computerWinCounter();

    } else if (computerChoice == "Scissors" && playerChoice == "Rock") {
        alert("You Win!");
        playerWinCounter();

    } else {
        alert("Draw!")
    }
    
    return (computerChoice);
}









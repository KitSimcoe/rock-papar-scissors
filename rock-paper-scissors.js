let choices = ["Rock!", "Paper!", "Scissors!"]


function getComputerChoice() {
    // choose from array at random
    let computerChoice = choices[(Math.floor(Math.random() * choices.length))];
    return computerChoice;
    
}


console.log(getComputerChoice())
console.log(choices.length)




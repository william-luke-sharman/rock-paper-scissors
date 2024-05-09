const buttons = document.querySelectorAll("button");
const humanScore = document.querySelector("#human-score");
const computerScore = document.querySelector("#computer-score");
const OUTCOMES = [
    [0,-1,1],
    [1,0,-1],
    [-1,1,0]
]

buttons.forEach((button) => {
    button.addEventListener("click", playRound)
})

function playRound() {
    const humanChoice = parseInt(this.id);
    const computerChoice = Math.floor(Math.random() * 3);
    const outcome = OUTCOMES[humanChoice][computerChoice];
    switch(outcome) {
        case 1: updateScore(humanScore); break;
        case -1: updateScore(computerScore); break;
    }
}

function updateScore(winner) {
    const newScore = parseInt(winner.textContent) + 1;
    winner.textContent = newScore;
    if (newScore == 5) {declareWinner(winner);}
}

function declareWinner(winner) {
   alert("GET IN SON!");
}

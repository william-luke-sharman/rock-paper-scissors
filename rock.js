const CHOICES = ["Rock", "Paper", "Scissors"];

function playGame() {
    let scores = [0, 0];

    for (let i = 0; i < 2; i++) {
        scores = playRound(scores);
    }

    declareGameWinner(scores);
}

function playRound(scores) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    const winner = decideWinner(humanChoice, computerChoice);
    const updatedScores = updateScores(winner, scores);
    return updatedScores;
}

function getHumanChoice() {
    const chosenNumber = prompt("Choose your weapon: 1: Rock, 2: Paper, 3: Scissors");
    const choice = CHOICES[chosenNumber - 1];
    return choice;
}

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    const choice = CHOICES[randomNumber];
    return choice;
}

function decideWinner(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) return "Tie";
    if (humanChoice === "Rock" && computerChoice === "Scissors") return "Human";
    if (humanChoice === "Scissors" && computerChoice === "Paper") return "Human";
    if (humanChoice === "Paper" && computerChoice === "Rock") return "Human";
    return "Computer";
}

function updateScores(winner, [humanScore, computerScore]) {
    if (winner === "Tie") return [humanScore, computerScore];
    if (winner === "Human") return [humanScore + 1, computerScore];
    if (winner === "Computer") return [humanScore, computerScore + 1];
}

function declareGameWinner([humanScore, computerScore]) {
    if (humanScore === computerScore) {
        console.log("It's a tie!");
    } else if (humanScore > computerScore) {
        console.log("Go humans!");
    } else {
        console.log("1011010101");
    }
}
const OUTCOMES = [
    [0,-1,1],
    [1,0,-1],
    [-1,1,0]
]

function playGame(remainingRounds = 5, score = 0) {
    if (remainingRounds === 0) {
        declareWinner(score);
    } else {
        playGame(remainingRounds -= 1, score+= playRound())
    }
}

function playRound() {
    return getOutcome(getHumanChoice(), getComputerChoice());
}

function getHumanChoice() {
    return prompt("Choose your weapon: 1: Rock, 2: Paper, 3: Scissors") - 1;
}

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function getOutcome(humanChoice, computerChoice) {
    return OUTCOMES[humanChoice][computerChoice];
}

function declareWinner(score) {
    console.log(`Final score: ${score}`)
    if (score === 0) {
        console.log("It's a tie!");
    } else if (score > 0) {
        console.log("Go humans!");
    } else {
        console.log("1011010101");
    }
}

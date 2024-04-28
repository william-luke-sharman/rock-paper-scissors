const OUTCOMES = [
    [0,-1,1],
    [1,0,-1],
    [-1,1,0]
]

function playGame(remainingRounds = 5, score = 0) {
    if (remainingRounds == 0) {
        console.log(`Final score: ${score}. ${declareWinner(score)}`)
    } else {
        playGame(remainingRounds -= 1, score+= playRound())
    }
}

function playRound() {
    const humanChoice = prompt("Choose your weapon: 1: Rock, 2: Paper, 3: Scissors") - 1;
    const computerChoice = Math.floor(Math.random() * 3);
    return OUTCOMES[humanChoice][computerChoice];
}

function declareWinner(score) {
    if (score == 0) return "It's a tie!";
    if (score > 0) return "Humans win!";
    if (score < 0) return "Robots win!";
}

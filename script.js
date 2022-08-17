//define game possible entries
const gameChoices = ['Rock', 'Paper', 'Scissors'];

//computer's random choice
//1st option: const computerChoices = () => gameChoices[Math.floor(Math.random() * gameChoices.length)];
//2nd option:
function getComputerChoice () {
  return gameChoices[Math.floor(Math.random() * gameChoices.length)]
}

//gather input
let playerSelection = 'rOCk';
let computerSelection = getComputerChoice();
let playerScore = 0;
let computerScore = 0;

//one round + game scenarios + user input insensitive
function playRound(playerSelection, computerSelection) {

  switch(true) {
    case computerSelection === gameChoices[0] && playerSelection.toLowerCase() === gameChoices[1].toLowerCase():
      return('player');
      break;
    case computerSelection === gameChoices[1] && playerSelection.toLowerCase() === gameChoices[0].toLowerCase():
      return('computer');
      break; 
    case computerSelection === gameChoices[0] && playerSelection.toLowerCase() === gameChoices[2].toLowerCase():
      return('computer');
      break;
    case computerSelection === gameChoices[2] && playerSelection.toLowerCase() === gameChoices[0].toLowerCase():
      return('player');
      break;
    case computerSelection === gameChoices[1] && playerSelection.toLowerCase() === gameChoices[2].toLowerCase():
      return('player');
      break;
    case computerSelection === gameChoices[2] && playerSelection.toLowerCase() === gameChoices[1].toLowerCase():
      return('computer');
      break;
    case computerSelection === gameChoices[0] && playerSelection.toLowerCase() === gameChoices[0].toLowerCase():
    case computerSelection === gameChoices[1] && playerSelection.toLowerCase() === gameChoices[1].toLowerCase():
    case computerSelection === gameChoices[2] && playerSelection.toLowerCase() === gameChoices[2].toLowerCase():
      return('tie')
    default:
      return('Incorrect user input')
  }
}

console.log(playRound(playerSelection, computerSelection));

//5 rounds + score summary
let playerFinalScore = 0;
let computerFinalScore = 0;
function game() {
  for (let i = 0; i < 5; i++) {
    playerSelection = prompt('Let\s play! Rock, paper or scissors?');
    computerSelection = getComputerChoice();
    console.log(`You pick: ${playerSelection}, Computer pick: ${computerSelection}`)
    console.log(`Your score is ${playRound(playerSelection, computerSelection)}`);

    if (playRound(playerSelection, computerSelection) === 'player') {
      playerScore = 1;
    } else if (playRound(playerSelection, computerSelection) === 'computer'){
      computerScore =1;
    } else {
      playerScore = 0;
      computerScore = 0;
    }

    if (playerScore === 1) {
      playerFinalScore = playerFinalScore + 1;
    } else {
      playerFinalScore = playerFinalScore;
    }
    if (computerScore === 1) {
      computerFinalScore = computerFinalScore + 1;
    } else {
      computerFinalScore = computerFinalScore;
    }
  }
  console.log(`Overall result for Player: ${playerFinalScore} for Computer: ${computerFinalScore}`)
}

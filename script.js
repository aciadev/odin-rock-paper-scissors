//define game possible entries
const gameChoices = ['Rock', 'Paper', 'Scissors'];

//computer's random choice
//1st option: const computerChoices = () => gameChoices[Math.floor(Math.random() * gameChoices.length)];
//2nd option:
function getComputerChoice () {
  return gameChoices[Math.floor(Math.random() * gameChoices.length)]
}

//gather input
const playerSelection = 'Rock';
const computerSelection = getComputerChoice();
//make user input case insensitive

//game scenarios
function playRound() {

  switch(true) {
    case computerSelection === gameChoices[0] && playerSelection === gameChoices[1]:
      return('You Win! Paper beats Rock');
      break;
    case computerSelection === gameChoices[1] && playerSelection === gameChoices[0]:
      return('You Lose! Paper beats Rock');
      break; 
    case computerSelection === gameChoices[0] && playerSelection === gameChoices[2]:
      return('You Lose! Rock beats Scissors');
      break;
    case computerSelection === gameChoices[2] && playerSelection === gameChoices[0]:
      return('You Win! Rock beats Scissors');
      break;
    case computerSelection === gameChoices[1] && playerSelection === gameChoices[2]:
      return('You Win! Scissors beats Paper');
      break;
    case computerSelection === gameChoices[2] && playerSelection === gameChoices[1]:
      return('You Lose! Scissors beats Paper');
      break;
    case computerSelection === gameChoices[0] && playerSelection === gameChoices[0]:
    case computerSelection === gameChoices[1] && playerSelection === gameChoices[1]:
    case computerSelection === gameChoices[2] && playerSelection === gameChoices[2]:
      return('It\s a tie! Play again')
    default:
      return('Incorrect user input')
  }
}

console.log(playRound(playerSelection, computerSelection));

// DOM ELEMENTS ******************************************************
const gameDisplay = document.querySelector('.game_display');
const winnerDisplay = document.querySelector('.outcome_display');
const playerWinsDisplay = document.querySelector('.player-wins_display');
const computerWinsDisplay = document.querySelector('.computer-wins_display');

// GLOBAL VARIABLES **************************************************
let currentGame;

// EVENT LISTENERS ***************************************************
window.addEventListener('load', startGame);
gameDisplay.addEventListener('click', function(event) {
  makeSelections(event);
});

// EVENT HANDLERS ****************************************************
function startGame() {
  currentGame = new Game();
  human = new Player(1);
  computer = new Player(2);

  currentGame.addPlayers(human, computer);
  console.log(currentGame);

  displayWins();
}

function displayWins() {
  playerWinsDisplay.innerText = currentGame.players[0].wins;
  computerWinsDisplay.innerText = currentGame.players[1].wins;
}

function makeSelections(event) {
  const playerSelection = event.target.value;
  const computerSelection = randomSelection();

  console.log("Player Selection:", playerSelection);
  console.log("Computer Selection:", computerSelection);

  const outcome = currentGame.determineOutcome(playerSelection, computerSelection);
  displayOutcome(outcome, playerSelection, computerSelection);
}

function randomSelection() {
  const r = Math.floor(Math.random()*100);

  if (r < 33) {
    return "rock";
  } else if (r < 66) {
    return "paper";
  } else if (r > 67) {
    return "scissors";
  }
}

function displayOutcome(outcome, playerSelection, computerSelection) {
  winnerDisplay.innerText = "";
  
  if (!outcome) {
    winnerDisplay.innerText = "Tie game! Try again!";
  } else if (outcome = 1) {
    winnerDisplay.innerText = "You win! " + playerSelection + " beats " + computerSelection;
  } else { 
    winnerDisplay.innerText = "You Lose! " + computerSelection + " beats " + playerSelection;
  }

  displayWins();
}
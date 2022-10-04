class Game {
  constructor() {
    this.players = [];
  }

  addPlayers(human, computer) {
    this.players.push(human);
    this.players.push(computer);
  }

  determineOutcome(playerSelection, computerSelection) {
    let outcome;
  
    if (playerSelection === computerSelection) {
      outcome = 0;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
      outcome = 1;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
      outcome = 1;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
      outcome = 1;
    } else { 
      outcome = 2;
    }
    
    if (outcome) {
      const winner = this.players.find(player => player.id === outcome)
      winner.increaseWins();
    }

    return outcome;
  }
}
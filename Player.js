class Player {
  constructor(id) {
    this.id = id;
    this.wins = 0;
  }

  increaseWins() {
    this.wins++;
  }
}
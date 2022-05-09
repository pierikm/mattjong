import Deck from "./Deck";
import Player from "./Player";

class Game {
    constructor(playerOne, playerTwo, playerThree, playerFour) {
        this.deck = new Deck()
        this.playerOne = new Player(playerOne);
        this.playerTwo = new Player(playerTwo);
        this.playerThree = new Player(playerThree);
        this.playerFour = new Player(playerFour);
        this.seating = [this.playerOne, this.playerTwo, this.playerThree, this.playerFour];
        initialSeat();
    }

    initalSeat() {
        let index = 4;
        let randIndex;

        while (index) {
            randIndex = Math.floor(Math.random() * index);
            index--;
            [this.seating[index], this.seating[randIndex]] = [this.seating[randIndex], this.seating[index]];
        }
    }

    deal() {
        this.deck.shuffle();
    }
}

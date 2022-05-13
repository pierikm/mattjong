import Deck from "./Deck";
import Player from "./Player";

const setIndex = (index) => {
    if (index === 16) return 34;
    if (index === 50) return 68;
    if (index === 84) return 102;
    if (index === 118) return 0;
    return index + 1;
}

class Game {
    constructor(playerOne, playerTwo, playerThree, playerFour) {
        this.deck = new Deck()
        this.playerOne = new Player(playerOne);
        this.playerTwo = new Player(playerTwo);
        this.playerThree = new Player(playerThree);
        this.playerFour = new Player(playerFour);
        this.seating = [this.playerOne, this.playerTwo, this.playerThree, this.playerFour];
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
        let index = this.deck.breakWall();
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 2; j++) {
                this.seating[0].hand.push(this.deck.wall[index])
                this.seating[0].hand.push(this.deck.wall[index + 17])
                this.deck.wall[index] = null;
                this.deck.wall[index + 17] = null;
                index = setIndex(index);
            }
            for (let j = 0; j < 2; j++) {
                this.seating[1].hand.push(this.deck.wall[index])
                this.seating[1].hand.push(this.deck.wall[index + 17])
                this.deck.wall[index] = null;
                this.deck.wall[index + 17] = null;
                index = setIndex(index);
            }
            for (let j = 0; j < 2; j++) {
                this.seating[2].hand.push(this.deck.wall[index])
                this.seating[2].hand.push(this.deck.wall[index + 17])
                this.deck.wall[index] = null;
                this.deck.wall[index + 17] = null;
                index = setIndex(index);
            }
            for (let j = 0; j < 2; j++) {
                this.seating[3].hand.push(this.deck.wall[index])
                this.seating[3].hand.push(this.deck.wall[index + 17])
                this.deck.wall[index] = null;
                this.deck.wall[index + 17] = null;
                index = setIndex(index);
            }
        }
        this.seating[0].hand.push(this.deck.wall[index])
        this.seating[1].hand.push(this.deck.wall[index + 17])
        this.deck.wall[index] = null;
        this.deck.wall[index + 17] = null;
        index = setIndex(index);
        this.seating[2].hand.push(this.deck.wall[index])
        this.seating[3].hand.push(this.deck.wall[index + 17])
        this.deck.wall[index] = null;
        this.deck.wall[index + 17] = null;
        index = setIndex(index);
        this.seating[0].hand.push(this.deck.wall[index])
        this.deck.wall[index] = null;
        this.deck.setWalls();
    }
}

export default Game;

import Tile from "./Tile";
import tiles from "./data"


class Deck {
    constructor() {
        this.deck = [];
        this.northWall = [];
        this.westWall = [];
        this.southWall = [];
        this.eastWall = [];

        this.northLoose = [].fill(null, 0, 16)
        this.westLoose = [].fill(null, 0, 16)
        this.southLoose = [].fill(null, 0, 16)
        this.eastLoose = [].fill(null, 0, 16)

        this.initiate();
    }
    initiate() {
        for (const suit in tiles) {
            const suitStr = `${suit}`
            for (const tile of tiles[suitStr]) {
                this.deck.push(new Tile(suitStr, tile))
                this.deck.push(new Tile(suitStr, tile))
                this.deck.push(new Tile(suitStr, tile))
                this.deck.push(new Tile(suitStr, tile))
            }
        }
    }
    shuffle() {
        let index = this.deck.length;
        let randIndex;

        while (index) {
            randIndex = Math.floor(Math.random() * index);
            index--;
            [this.deck[index], this.deck[randIndex]] = [this.deck[randIndex], this.deck[index]];
        }
    }
    buildWall() {
        this.shuffle();
        while (this.deck.length) {
            this.northWall.push(this.deck.pop());
            this.westWall.push(this.deck.pop());
            this.southWall.push(this.deck.pop());
            this.eastWall.push(this.deck.pop());
        }
    }

    breakWall() {
        const firstRoll = Math.ceil(Math.random() * 6) + Math.ceil(Math.random() * 6);
        const secondRoll = Math.ceil(Math.random() * 6) + Math.ceil(Math.random() * 6);
        const totalRoll = firstRoll + secondRoll;
        const breakPosition = totalRoll > 17 ? (firstRoll + 1) % 4 : firstRoll % 4;
        let wall;
        switch (breakPosition) {
            case 0:
                console.log('break east wall')
                wall = this.eastWall;
                break;
            case 1:
                console.log('break south wall')
                wall = this.southWall;
                break;
            case 2:
                console.log('break west wall')
                wall = this.westWall;
                break;
            case 3:
                console.log('break north wall')
                wall = this.northWall;
                break;

        }
        const indexOne = totalRoll > 17 ? totalRoll % 17 - 1 : totalRoll - 1;
        const indexTwo = indexOne + 17;
        const looseTiles = [wall[indexOne], wall[indexTwo]];
        wall[indexOne] = null;
        wall[indexTwo] = null;
        console.log(firstRoll, secondRoll, totalRoll, breakPosition, wall);
        console.log(looseTiles);

    }
}

export default Deck;

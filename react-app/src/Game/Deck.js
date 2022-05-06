import Tile from "./Tile";
import tiles from "./data"


class Deck {
    constructor() {
        this.deck = [];
        this.northWall = [];
        this.westWall = [];
        this.southWall = [];
        this.eastWall = [];
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
    shuffle(){
        let index = this.deck.length;
        let randIndex;

        while(index){
            randIndex = Math.floor(Math.random() * index);
            index--;
            [this.deck[index], this.deck[randIndex]] = [this.deck[randIndex], this.deck[index]];
        }
    }
    buildWall() {
        while(this.deck.length){
            this.northWall.push(this.deck.pop());
            this.westWall.push(this.deck.pop());
            this.southWall.push(this.deck.pop());
            this.eastWall.push(this.deck.pop());
        }
    }
}

export default Deck;

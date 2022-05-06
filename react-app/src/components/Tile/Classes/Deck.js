import Tile from "./Tile";
import tiles from "./data"


class Deck {
    constructor() {
        this.deck = [];
        this.initiate();
    }
    initiate() {
        for (const suit in tiles) {
            const suitStr = `${suit}`
            for (const tile of tiles[suitStr]) {
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
}

export default Deck;

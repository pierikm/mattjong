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
}

export default Deck;

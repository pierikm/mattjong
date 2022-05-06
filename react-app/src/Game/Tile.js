class Tile{
    constructor(suit, tile){
        this.tile = tile;
        this.suit = suit;
        this.image = `static/${suit}/${tile}.png`
    }
}

export default Tile;

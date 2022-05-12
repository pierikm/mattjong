import Tile from "./Tile";
import tiles from "./data"


class Deck {
    constructor(deck, wall) {
        this.deck = [];
        this.wall = wall ? wall : [];
        // this.loose = loose ? loose : [];
        this.eastWall = [];
        this.southWall = [];
        this.westWall = [];
        this.northWall = [];
        // this.northWall = northWall ? northWall : {
        //     tiles: [],
        //     left: null,
        //     right: null,
        //     loose: Array(17).fill(null)
        // };
        // this.westWall = westWall ? westWall : {
        //     tiles: [],
        //     left: null,
        //     right: this.northWall,
        //     loose: Array(17).fill(null)
        // };
        // this.southWall = southWall ? southWall : {
        //     tiles: [],
        //     left: null,
        //     right: this.westWall,
        //     loose: Array(17).fill(null)
        // };
        // this.eastWall = eastWall ? eastWall : {
        //     tiles: [],
        //     left: null,
        //     right: this.southWall,
        //     loose: Array(17).fill(null)
        // };

        // this.northWall.left = this.westWall;

        // this.westWall.left = this.southWall;

        // this.southWall.left = this.eastWall

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

    setWalls(){
        for(let i = 0; i < 34; i++){
            this.eastWall[i] = this.wall[i];
            this.southWall[i] = this.wall[i + 34];
            this.westWall[i] = this.wall[i + 68];
            this.northWall[i] = this.wall[i + 102];
        }
    }

    buildWall() {
        this.shuffle();
        while (this.deck.length) {
            // this.northWall.tiles.push(this.deck.pop());
            // this.westWall.tiles.push(this.deck.pop());
            // this.southWall.tiles.push(this.deck.pop());
            // this.eastWall.tiles.push(this.deck.pop());
            this.wall.push(this.deck.pop())
        }
        this.setWalls();
    }

    breakWall() {
        const firstRoll = Math.ceil(Math.random() * 6) + Math.ceil(Math.random() * 6);
        const secondRoll = Math.ceil(Math.random() * 6) + Math.ceil(Math.random() * 6);
        const totalRoll = firstRoll + secondRoll;
        const breakPosition = totalRoll > 17 ? (firstRoll + 1) % 4 : firstRoll % 4;
        let wall = this.eastWall;
        for (let i = 1; i <= breakPosition; i++) {
            wall = wall.right;
        }
        const indexOne = totalRoll > 17 ? totalRoll % 17 - 1 : totalRoll - 1;
        const indexTwo = indexOne + 17;
        const looseTiles = [wall.tiles[indexOne], wall.tiles[indexTwo]];
        wall.tiles[indexOne] = null;
        wall.tiles[indexTwo] = null;
        console.log(indexOne, indexTwo, breakPosition, wall);
        // console.log(looseTiles);

        if (indexOne > 15) {
            const newWall = wall.right ? wall.right : this.northWall;
            newWall.loose[indexOne - 17 + 1] = looseTiles[0];
        } else {
            wall.loose[indexOne + 1] = looseTiles[0];
        }
        if (indexOne > 17) {
            const newWall = wall.right ? wall.right : this.northWall;
            newWall.loose[indexOne - 17 + 3] = looseTiles[1];
        } else {
            wall.loose[indexOne + 3] = looseTiles[1];
        }
        return breakPosition;
    }
}

export default Deck;

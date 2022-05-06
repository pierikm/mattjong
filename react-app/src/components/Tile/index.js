import Tile from "./Classes/Tile";
import Deck from "./Classes/Deck";


function TileEle() {
    const oneDot = new Tile('dots', "one-dots");
    const deck = new Deck();

    console.log(deck.deck);
    return (
        <div>
            {deck.deck.map(tile => (
                <div key={tile.tile}>
                    <img alt={tile.tile} src={tile.image}></img>
                </div>
            ))}
            <img alt="tile" src='static/dots/one-dots.png' />
        </div>
    )
}

export default TileEle;

import Tile from "./Classes/Tile";
import Deck from "./Classes/Deck";
import './Tile.css';
import { useState, useEffect } from "react";

function TileEle() {
    const [deck, setDeck] = useState([]);
    const oneDot = new Tile('dots', "one-dots");
    // deck.shuffle();

    const mainDeck = new Deck();

    useEffect(() => {
        setDeck(mainDeck.deck)
    }, []);

    const shuffle = () => {
        console.log("shuffle");
        mainDeck.shuffle();
        setDeck(mainDeck.deck);
    }

    return (
        <div className="tiles-container">
            {deck.map(tile => (
                <div key={tile.tile}>
                    <img className="tile-image" alt={tile.tile} src={tile.image}></img>
                </div>
            ))}
            <button onClick={shuffle}>Shuffle</button>
        </div>
    )
}

export default TileEle;

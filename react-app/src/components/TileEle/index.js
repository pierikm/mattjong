import Tile from "../../Game/Tile";
import Deck from "../../Game/Deck";
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

    const breakWall = () => {
        mainDeck.breakWall();
        // setDeck(mainDeck.deck);
    }

    return (
        <>
            <button onClick={breakWall}>Break Wall</button>
            <div className="tiles-container">
                {deck.map(tile => (
                    <div key={Math.random() * 1000}>
                        <img className="tile-image" alt={tile.tile} src={tile.image}></img>
                    </div>
                ))}
            </div>
        </>
    )
}

export default TileEle;

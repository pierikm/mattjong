import Tile from "../../Game/Tile";
import Deck from "../../Game/Deck";
import { useState, useEffect } from "react";
import './Board.css';

function Board() {
    const [deck, setDeck] = useState(new Deck());
    const [loaded, setLoaded] = useState(false);
    // deck.shuffle();

    const mainDeck = new Deck();

    useEffect(() => {
        mainDeck.shuffle();
        mainDeck.buildWall();
        console.log(mainDeck);
        setDeck(mainDeck)
        setLoaded(true);
    }, []);

    const shuffle = () => {
        setDeck(mainDeck);
    }

    if (!loaded) return null;
    return (
        <>
            <button onClick={shuffle}>Shuffle</button>
            <h3>North Wall</h3>
            <div className="wall-container">
                {deck.northWall?.map(tile => (
                    <div key={Math.random() * 1000}>
                        <img className="tile-image" alt={tile.tile} src={tile.image}></img>
                    </div>
                ))}
            </div>
            <h3>West Wall</h3>
            <div className="wall-container">
                {deck.westWall?.map(tile => (
                    <div key={Math.random() * 1000}>
                        <img className="tile-image" alt={tile.tile} src={tile.image}></img>
                    </div>
                ))}
            </div>
            <h3>South Wall</h3>
            <div className="wall-container">
                {deck.southWall?.map(tile => (
                    <div key={Math.random() * 1000}>
                        <img className="tile-image" alt={tile.tile} src={tile.image}></img>
                    </div>
                ))}
            </div>
            <h3>East Wall</h3>
            <div className="wall-container">
                {deck.eastWall?.map(tile => (
                    <div key={Math.random() * 1000}>
                        <img className="tile-image" alt={tile.tile} src={tile.image}></img>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Board;

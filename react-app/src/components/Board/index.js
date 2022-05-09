import Tile from "../../Game/Tile";
import Deck from "../../Game/Deck";
import { useState, useEffect } from "react";
import './Board.css';

function Board() {
    const [deck, setDeck] = useState(new Deck());
    const [loaded, setLoaded] = useState(false);
    // deck.shuffle();


    useEffect(() => {
        const mainDeck = new Deck();
        mainDeck.buildWall();
        setDeck(mainDeck)
        setLoaded(true);
    }, []);

    const breakWall = () => {
        deck.breakWall();
        console.log(deck);
    }

    if (!loaded) return null;
    return (
        <>
            <button onClick={breakWall}>break wall</button>
            <h3>North Wall</h3>
            <div className="wall-container">
                {deck.northWall?.loose.map(tile => (
                    <div key={Math.random() * 1000}>
                        {tile && <img className="tile-image" alt={tile.tile} src={tile.image}></img>}
                    </div>
                ))}
                {deck.northWall?.tiles.map(tile => (
                    <div key={Math.random() * 1000}>
                        {tile && <img className="tile-image" alt={tile.tile} src={tile.image}></img>}
                    </div>
                ))}
            </div>
            <h3>West Wall</h3>
            <div className="wall-container">
                {deck.westWall?.loose.map(tile => (
                    <div key={Math.random() * 1000}>
                        {tile && <img className="tile-image" alt={tile.tile} src={tile.image}></img>}
                    </div>
                ))}
                {deck.westWall?.tiles.map(tile => (
                    <div key={Math.random() * 1000}>
                        {tile && <img className="tile-image" alt={tile.tile} src={tile.image}></img>}
                    </div>
                ))}
            </div>
            <h3>South Wall</h3>
            <div className="wall-container">
                {deck.southWall?.loose.map(tile => (
                    <div key={Math.random() * 1000}>
                        {tile && <img className="tile-image" alt={tile.tile} src={tile.image}></img>}
                    </div>
                ))}
                {deck.southWall?.tiles.map(tile => (
                    <div key={Math.random() * 1000}>
                        {tile && <img className="tile-image" alt={tile.tile} src={tile.image}></img>}
                    </div>
                ))}
            </div>
            <h3>East Wall</h3>
            <div className="wall-container">
                {deck.eastWall?.loose.map(tile => (
                    <div key={Math.random() * 1000}>
                        {tile && <img className="tile-image" alt={tile.tile} src={tile.image}></img>}
                    </div>
                ))}
                {deck.eastWall?.tiles.map(tile => (
                    <div key={Math.random() * 1000}>
                        {tile && <img className="tile-image" alt={tile.tile} src={tile.image}></img>}
                    </div>
                ))}
            </div>
        </>
    )
}

export default Board;

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Tile from "../../Game/Tile";
import Deck from "../../Game/Deck";
import Game from "../../Game/Game";
import { buildWall, breakWall } from "../../store/game";
import './Board.css';

function Board() {
    // const [deck, setDeck] = useState(new Deck());
    const [loaded, setLoaded] = useState(false);
    // deck.shuffle();
    const deck = useSelector(state => state.game);
    const dispatch = useDispatch();

    useEffect(() => {
        // const mainDeck = new Deck();
        // mainDeck.buildWall();
        // setDeck(mainDeck)
        setLoaded(true);
    }, []);

    const buildWallBoard = async () => {
        await dispatch(buildWall());
        console.log(deck);
    }

    const breakWallBoard = async () => {
        await dispatch(breakWall());
    }

    if (!loaded) return null;
    return (
        <>
            <button onClick={buildWallBoard}>build wall</button>
            <button onClick={breakWallBoard}>break wall</button>
            <h3>North Wall</h3>
            <div className="wall-container">
                {deck.northWall.map(tile => (
                    <div key={Math.random() * 1000}>
                        {tile && <img className="tile-image" alt={tile.tile} src={tile.image}></img>}
                    </div>
                ))}
            </div>
            <h3>West Wall</h3>
            <div className="wall-container">
                {deck.westWall.map(tile => (
                    <div key={Math.random() * 1000}>
                        {tile && <img className="tile-image" alt={tile.tile} src={tile.image}></img>}
                    </div>
                ))}
            </div>
            <h3>South Wall</h3>
            <div className="wall-container">
                {deck.southWall.map(tile => (
                    <div key={Math.random() * 1000}>
                        {tile && <img className="tile-image" alt={tile.tile} src={tile.image}></img>}
                    </div>
                ))}
            </div>
            <h3>East Wall</h3>
            <div className="wall-container">
                {deck.eastWall.map(tile => (
                    <div key={Math.random() * 1000}>
                        {tile && <img className="tile-image" alt={tile.tile} src={tile.image}></img>}
                    </div>
                ))}
            </div>
        </>
    )
}

export default Board;

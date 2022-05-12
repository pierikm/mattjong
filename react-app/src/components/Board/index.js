import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Tile from "../../Game/Tile";
import Deck from "../../Game/Deck";
import Game from "../../Game/Game";
// import { buildWall, breakWall } from "../../store/game";
import './Board.css';

function Board() {
    const [game, setGame] = useState(new Game());
    // const [deck, setDeck] = useState(new Deck());
    const [eastWall, setEastWall] = useState([]);
    const [southWall, setSouthWall] = useState([]);
    const [westWall, setWestWall] = useState([]);
    const [northWall, setNorthWall] = useState([]);
    const [loaded, setLoaded] = useState(false);
    // deck.shuffle();
    // const deck = useSelector(state => state.game);
    const dispatch = useDispatch();

    useEffect(() => {
        // const mainDeck = new Deck();
        // mainDeck.buildWall();
        // setDeck(mainDeck)
        setLoaded(true);
    }, []);

    const buildWall = () => {
        // await dispatch(buildWall());
        game.deck.buildWall();
        // deck.buildWall();
        setEastWall(game.deck.eastWall);
        setWestWall(game.deck.westWall);
        setSouthWall(game.deck.southWall);
        setNorthWall(game.deck.northWall);
        console.log(game.deck);
    }

    const breakWall = async () => {
        game.deal();
        // await dispatch(breakWall());
    }

    if (!loaded) return null;
    return (
        <>
            <button onClick={buildWall}>build wall</button>
            <button onClick={breakWall}>break wall</button>
            <h3>East Wall</h3>
            <div className="wall-container">
                {eastWall.map(tile => (
                    <div key={Math.random() * 1000}>
                        {tile && <img className="tile-image" alt={tile.tile} src={tile.image}></img>}
                    </div>
                ))}
            </div>
            <h3>North Wall</h3>
            <div className="wall-container">
                {northWall.map(tile => (
                    <div key={Math.random() * 1000}>
                        {tile && <img className="tile-image" alt={tile.tile} src={tile.image}></img>}
                    </div>
                ))}
            </div>
            <h3>West Wall</h3>
            <div className="wall-container">
                {westWall.map(tile => (
                    <div key={Math.random() * 1000}>
                        {tile && <img className="tile-image" alt={tile.tile} src={tile.image}></img>}
                    </div>
                ))}
            </div>
            <h3>South Wall</h3>
            <div className="wall-container">
                {southWall.map(tile => (
                    <div key={Math.random() * 1000}>
                        {tile && <img className="tile-image" alt={tile.tile} src={tile.image}></img>}
                    </div>
                ))}
            </div>
        </>
    )
}

export default Board;

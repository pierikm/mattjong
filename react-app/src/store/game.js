import Deck from "../Game/Deck";

const LOAD = 'deck/LOAD';
const BUILD = 'deck/BUILD';
const BREAK = 'deck/BREAK';

const load = (deck) => ({
    type: LOAD,
    deck
})

const build = () => ({
    type: BUILD
})

const breakW = () => ({
    type: BREAK
})

export const loadDeck = () => async dispatch => {
    const deck = new Deck();
    await dispatch(load(deck))
}

export const buildWall = () => async dispatch => {
    await dispatch(build())
}

export const breakWall = () => async dispatch => {
    await dispatch(breakW());
}

const initialState = {};

export default function reducer(state = initialState, action) {
    const newDeck = new Deck(state.deck, state.northWall, state.westWall, state.southWall, state.eastWall)
    switch (action.type) {
        case LOAD:
            return action.deck;
        case BUILD:
            newDeck.buildWall()
            // console.log(newDeck);
            return newDeck;
        case BREAK:
            newDeck.breakWall();
            return newDeck;
        default:
            return state;
    }
}

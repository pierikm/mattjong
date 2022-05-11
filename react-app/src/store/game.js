import Deck from "../Game/Deck";

const LOAD = 'deck/LOAD';

const load = (deck) => ({
    type: LOAD,
    deck
})

export const loadDeck = () => async dispatch => {
    const deck = new Deck();
    await dispatch(load(deck))
}

const initialState = {};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case LOAD:
            return action.deck;
        default:
            return state;
    }
}

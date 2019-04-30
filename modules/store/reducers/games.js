import actionTypes from '../actions/types';

export const INITIAL_STATE = {};

export default function games(state = INITIAL_STATE, action = {}) {
    switch (action.type) {
        case actionTypes.GET_GAME_SUCCESS: {
        const { gameId, game } = action.payload;

        return {
            ...state,
            [gameId]: game,
        };
        }

        default:
        return state;
    }
}
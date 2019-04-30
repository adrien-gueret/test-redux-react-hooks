import { get } from '../../api';

import actions from '../actions';
import actionTypes from '../actions/types';

export default store => next => async (action) => {
    let nextReturn = next(action);

    switch (action.type) {
        case actionTypes.GET_GAME_REQUEST: {
            const { gameId } = action.payload;

            try {
                const game = await get('games', gameId);

                nextReturn = store.dispatch(actions.getGameSuccess(game, gameId));
            } catch (error) {
                nextReturn = store.dispatch(actions.getGameFailure(error, gameId));
            }

            break;
        }

        default:
        break;
    }

    return nextReturn;
};
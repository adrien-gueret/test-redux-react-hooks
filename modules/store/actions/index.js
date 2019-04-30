import actionsTypes from './types';

export default {
  getGame(gameId) {
    return {
      type: actionsTypes.GET_GAME_REQUEST,
      payload: { gameId },
    };
  },

  getGameSuccess(game, gameId) {
    return {
      type: actionsTypes.GET_GAME_SUCCESS,
      payload: { game, gameId },
    };
  },

  getGameFailure(error, gameId) {
    return {
      type: actionsTypes.GET_GAME_FAILURE,
      error: true,
      payload: { gameId, error },
    };
  },
};
function get(state) {
    return state.games;
}

function getById(state, gameId) {
    return get(state)[gameId];
}

export default {
    get,
    getById,
};
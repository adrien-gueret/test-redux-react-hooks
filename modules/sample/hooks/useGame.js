import { useActions, useSelector } from 'react-redux';
import { useLayoutEffect } from 'react';
import { useDispatch } from '../../utils';
import { actions, selectors } from '../../store'

export default function useGame(gameId) {
    const game = useSelector(state => selectors.games.getById(state, gameId), [gameId]);
    const getGame = useActions(() => actions.getGame(gameId), [gameId]);

    const {
        runDispatch,
        isLoading,
        error,
        reset,
    } = useDispatch(getGame, [gameId]);

    useLayoutEffect(() => {
        if (!game && !error && !isLoading) {
            runDispatch();
        }
    }, [gameId]);

    return {
        game,
        isLoading,
        error,
        reset,
    };
}
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useAction } from '../../utils';
import { actions, selectors } from '../../store'

export default function useGame(gameId) {
    const game = useSelector(state => selectors.games.getById(state, gameId), [gameId]);
  
    const {
        dispatch,
        isLoading,
        error,
        reset,
    } = useAction(actions.getGame(gameId), [gameId]);

    useEffect(() => {
        if (game || error || isLoading) {
            return;
        }

        dispatch();
    }, [gameId]);

    return {
        game,
        isLoading,
        error,
        reset,
    };
}
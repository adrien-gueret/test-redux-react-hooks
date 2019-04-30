import React from 'react';
import useGame from '../../hooks/useGame';
import ShowGame from './ShowGame';

function HookedShowGame({ gameId }) {    
    const { game, isLoading, error, reset } = useGame(gameId);

    return (
        <ShowGame
            game={game}
            isLoading={isLoading}
            error={error}
            reset={reset}
        />
    );
}

export default HookedShowGame;
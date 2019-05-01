import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { actions, selectors } from '../../store'
import { useAction } from '../../utils'

function withGame(WrappedComponent) {
  const displayName = `WithGame(${WrappedComponent.displayName || WrappedComponent.name})`;

  function WithGame({
    gameId,
    game,
    ...otherProps
  }) {
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

    return (
        <WrappedComponent
            {...otherProps}
            game={game}
            isLoading={isLoading}
            error={error}
            reset={reset}
        />
    );
  }

  WithGame.displayName = displayName;

  return WithGame;
}

export default function withGameContainer(WrappedComponent) {
  const WithGame = withGame(WrappedComponent);

  const mapStateToProps = (state, { gameId }) => ({
    game: selectors.games.getById(state, gameId),
  });

  return connect(mapStateToProps)(WithGame);
}
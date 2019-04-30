import React, { useLayoutEffect } from 'react';
import { connect } from 'react-redux';

import { actions, selectors } from '../../store'
import { useDispatch } from '../../utils'

function withGame(WrappedComponent) {
  const displayName = `WithGame(${WrappedComponent.displayName || WrappedComponent.name})`;

  function WithGame({
    gameId,
    fetchGame,
    game,
    ...otherProps
  }) {
    const {
        runDispatch,
        isLoading,
        error,
        reset,
    } = useDispatch(fetchGame, [gameId]);

    useLayoutEffect(() => {
        if (!game && !error && !isLoading) {
            runDispatch();
        }
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

  const mapDispatchToProps = (dispatch, { gameId }) => ({
    fetchGame() {
      return dispatch(actions.getGame(gameId));
    },
  });

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(WithGame);
}
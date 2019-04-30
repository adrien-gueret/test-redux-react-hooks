import React from 'react';

function ShowGame({ game, isLoading, error, reset }) {       
    if (game) {
        return  `✔️ ${game}`;
    }
    
    if (error) {
        return (
            <React.Fragment>
                😞 { error.message }
                <input type="button" onClick={reset} value="Hide error" />
            </React.Fragment>
        );
    }
    
    if (isLoading) {
        return '⏳ Loading...';
    }

    return null;
}

export default ShowGame;
import React, { useState } from 'react';
import { HookedShowGame, ShowGameContainer } from '../ShowGame';

const buttonData = [
    { id: 1, label: 'SMB '},
    { id: 2, label: 'SMW '},
    { id: 3, label: 'MK64 '},
    { id: 4, label: 'MP10 '},
    { id: 999, label: 'Not found '},
];

function Application() {    
    const [gameId, setGameId] = useState(null);
  
    return (
        <div>
            { buttonData.map(({ id, label }) => (
                <input
                    key={id}
                    disabled={gameId === id}
                    type="button"
                    onClick={() => setGameId(id) }
                    value={label}
                />
            )) }
            
            { gameId && (
                <div>
                    <b>Hook: </b> <HookedShowGame gameId={gameId} />
                    <br />
                    <b>HOC: </b> <ShowGameContainer gameId={gameId} />
                </div>
            ) }
        </div>
    );
}


export default Application;
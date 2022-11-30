import React from 'react';

const Player = ({view, player, isWinner, onClick}) => {

    const additional = view === 'list'
        ? <>
            <span className={'info'}>{player.car}</span>
            <span className={'info'}>{player.team}</span>
        </>
        : <></>

    return (
        <div className={`player ${isWinner ? 'winner' : ''}`}
             onClick={onClick}>
            <span className={'info'}>
                <strong>{player.number}</strong>: {player.name}
            </span>
            {additional}
        </div>
    );
};

export default Player;
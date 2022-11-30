import React, {useEffect, useState} from 'react';
import Player from "../../Player";

const MatchUp = ({pair}) => {

    const [winner, setWinner] = useState({...pair.winner});

    const checkWin = player => {
        return winner.id !== 0 && winner.id === player.id
    }

    useEffect(() => {
        const obs = p => {
            setWinner({...p.winner});
        };
        pair.subscribeViewObservers(obs);
        return function cleanup() {
            pair.unsubscribeViewObservers(obs);
        };

    }, []);

    if (!pair.isVisible()) return <></>;
    return (
        <div className={'match-up'}>
            <Player player={pair.leader}
                    isWinner={checkWin(pair.leader)}
                    onClick={() => {
                        pair.trySetWinner(pair.leader)
                    }}/>
            <Player player={pair.chaser}
                    isWinner={checkWin(pair.chaser)}
                    onClick={() => {
                        pair.trySetWinner(pair.chaser)
                    }}/>
        </div>

    );
};

export default React.memo(MatchUp);
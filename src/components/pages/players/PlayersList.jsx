import React from 'react';
import Player from "../../Player";
import MyButton from "../../UI/Buttons/MyButton";

const PlayersList = ({players, onSelect}) => {

    return (
        <div className={'list'}>
            <h1>Карточки пилотов</h1>
            <MyButton onClick={() => {
                onSelect({});
            }}>
                Новая карточка
            </MyButton>
            {players.map(p => <Player key={p.id}
                                      player={p}
                                      onClick={() => {
                                          onSelect(p);
                                      }}
                                      view={'list'}
            />)}
        </div>
    );
};

export default PlayersList;
import React from 'react';
import MyInput from "../../UI/Inputs/MyInput";
import MyButton from "../../UI/Buttons/MyButton";

const PlayerForm = ({player, setPlayer, onSubmit}) => {

    const update = (e) => {
        e.preventDefault();
        onSubmit(
            {
                ...player,
                id: player.id ?? Date.now()
            });
    }

    return (
        <form>
            <MyInput type={'number'}
                     placeholder={'Стартовый номер'}
                     value={player?.number ?? ''}
                     onChange={e => setPlayer({...player, number: +e.target.value})}/>
            <MyInput type={'text'}
                     value={player?.name ?? ''}
                     placeholder={'Имя и Фамилия'}
                     onChange={e => setPlayer({...player, name: e.target.value})}/>
            <MyInput type={'text'}
                     value={player?.car ?? ''}
                     placeholder={'Автомобиль'}
                     onChange={e => setPlayer({...player, car: e.target.value})}/>
            <MyInput type={'text'}
                     value={player?.team ?? ''}
                     placeholder={'Команда'}
                     onChange={e => setPlayer({...player, team: e.target.value})}/>
            <MyButton onClick={update}>Сохранить</MyButton>
        </form>
    );
};

export default PlayerForm;
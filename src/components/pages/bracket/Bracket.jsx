import React, {useContext} from 'react';
import MatchUp from "./MatchUp";
import MyButton from "../../UI/Buttons/MyButton";
import {BracketContext} from "../../../context/BracketContext";

const Bracket = () => {

    const {bracket} = useContext(BracketContext);

    const updateBracket = () => {
    }; //todo сохранение на сервер

    if (bracket.length === 0)
        return <h1>Идет квалификация</h1>;
    return (
        <>
            <div className={'panel'}>
                <MyButton onClick={updateBracket}>Сохранить изменения</MyButton>
            </div>
            <div className={'bracket'}>
                {bracket.map((tour, x) =>
                    <div className={'tour'}
                         key={x}
                    >
                        {tour.map(pair =>
                            <MatchUp key={pair.y}
                                     pair={pair}/>
                        )}
                    </div>
                )}
            </div>
        </>
    );
};

export default Bracket;
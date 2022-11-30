import React, {useContext, useEffect, useState} from 'react';
import {useFetch} from "../../../hooks/useFetch";
import DBService from "../../../API/DBService";
import Loader from "../../UI/Loader/Loader";
import PlayersList from "./PlayersList";
import ControlPanel from "./ControlPanel";
import PlayerForm from "./PlayerForm";
import MyModal from "../../UI/MyModal/MyModal";
import {BracketContext} from "../../../context/BracketContext";
import {prepareBracket} from "../../../classes/bracketService";
import {useNavigate} from "react-router-dom";

const Tournament = () => {

    const {players, setPlayers} = useContext(BracketContext);
    const [fetchPlayers, isPlFetched, errorFetchPl] = useFetch(async () => {
        const resp = await DBService.getPlayers();
        setPlayers(resp.data);
    });
    useEffect(() => {
        if (players.length !== 0) return ; //todo сохранение на сервер
        fetchPlayers();
    }, []);


    const [selectedPlayer, setSelectedPlayer] = useState(null);
    const editPlayers = (p) => {
        if (p !== undefined) {
            let i = players.findIndex(d => d.id === p.id);
            if (i === -1) {
                setPlayers([...players, p]);
            } else {
                let temp = [...players];
                temp.splice(i, 1, p);
                setPlayers([...temp]);
            }
        }
        setSelectedPlayer(null);
    };


    const {setBracket} = useContext(BracketContext);
    let nav = useNavigate();
    const finishQual = (size, isDE) => {
        setBracket(prepareBracket(players, size, isDE));
        nav('/bracket');
    };

    if (!isPlFetched && players.length === 0) return <Loader/>;
    return (
        <>
            <MyModal visible={selectedPlayer !== null}
                     onHide={() => setSelectedPlayer(null)}>
                <PlayerForm player={selectedPlayer}
                            setPlayer={setSelectedPlayer}
                            onSubmit={p => editPlayers(p)}/>
            </MyModal>
            <ControlPanel callback={finishQual}/>
            <PlayersList players={players}
                         onSelect={c => setSelectedPlayer(c)}/>
        </>
    );
};

export default Tournament;
import './assets/App.css';
import Navbar from "./components/UI/Navbar/Navbar";
import {AuthContext} from "./context/AuthContext";
import {useContext, useEffect, useState} from "react";
import AppRouter from "./routing/AppRouter";
import {BrowserRouter as Router} from "react-router-dom";
import {BracketContext} from "./context/BracketContext";

function App() {

    const [isUserAuth, setIsUserAuth] = useState(true);
    const [isAuthAccepted, setIsAuthAccepted] = useState(true);

    const [players, setPlayers] = useState([]);
    const [bracket, setBracket] = useState([]);

    useEffect(() => {
        if (localStorage.getItem('auth') === 'true') {
            setIsUserAuth(true);
        }
        setIsAuthAccepted(true);
    }, []);

    return (
        <AuthContext.Provider value={{
            isUserAuth,
            setIsUserAuth,
            isAuthAccepted,
        }}>
            <BracketContext.Provider value={{
                bracket,
                setBracket,
                players,
                setPlayers
            }}>
                <Router>
                    <Navbar links={[ //todo переделать на routes.js
                        {path: "about", text: "О нас"},
                        {path: "list", text: "Пилоты"},
                        {path: "bracket", text: "Сетка"},
                    ]}/>
                    <AppRouter/>
                </Router>
            </BracketContext.Provider>
        </AuthContext.Provider>
    );
}

export default App;

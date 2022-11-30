import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import "./Navbar.css"
import MyButton from "../Buttons/MyButton";
import {AuthContext} from "../../../context/AuthContext";

const Navbar = ({...props}) => {
    const {isUserAuth, setIsUserAuth} = useContext(AuthContext);

    const logout = () => {
        setIsUserAuth(false);
        localStorage.removeItem('auth');
    };

    return (
        <div className="navbar">
            {props.links.map(l =>
                <Link key={l.path} className={'nb-link'} to={l.path}>
                    {l.text}
                </Link>)}
            {isUserAuth &&
                <div className={'nb-btn-div'}>
                    <MyButton onClick={logout}>
                        Выйти
                    </MyButton>
                </div>
            }
        </div>
    );
};

export default Navbar;
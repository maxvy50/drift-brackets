import React, {useContext} from 'react';

import {AuthContext} from "../../../context/AuthContext";
import MyInput from "../../UI/Inputs/MyInput";
import MyButton from "../../UI/Buttons/MyButton";

const Login = () => {
    //const router = useHistory();
    const {setIsUserAuth} = useContext(AuthContext);
    const login = e => {
        e.preventDefault();
        setIsUserAuth(true);
        localStorage.setItem('auth', 'true');
      //  router.push('/posts');
    };

    return (
        <div>
            <h1>Войдите</h1>
            <form onSubmit={login}>
                <MyInput type={'text'} placeholder={'Логин'}/>
                <MyInput type={'password'} placeholder={'Пароль'}/>
                <MyButton>Войти</MyButton>
            </form>
        </div>
    );
};

export default Login;
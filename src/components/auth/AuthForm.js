import React, {useState} from 'react';
import loginIcon from "../../assets/image/element/login-icon.svg"
import passIcon from "../../assets/image/element/pass-icon.svg"
import clearIcon from "../../assets/image/element/clear-icon.svg"
import AuthInput from "./AuthInput";
import axios from "axios";
import {URL} from "../../data/Data";
import {logIn} from "../../store/actionCreators/auth";
import store from "../../store/store";

const AuthForm = () => {
    /*account is Login and Password*/
    const [account, setAccount] = useState({})
    console.dir(account)
    const handleClearName = () => {
        account.username = ''
    }
    const handleClearPass = () => {
        account.password = ''
    }
    /*"handleCheck" send "POST" request to backend*/
    const handleCheck = async () => {
        /*Check inputs data for emptiness*/
        if (account.username && account.password) {
             const config = {
                url: `${URL}auth/login`,
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                data: JSON.stringify(account)
            }
            /*Get token*/
             const {data} = await axios (config)
             store.dispatch(logIn(data))
        }
    }
    return (
        <div className='auth'>
            <div className="auth__form">
                <h2 className="auth__title">Войти в систему</h2>
                <label htmlFor='username' className="auth__label">
                    <div className="auth__log">
                        <img src={loginIcon} alt="login"/>
                    </div>
                    <button onClick={handleClearName} className="auth__clear">
                        <img src={clearIcon} alt="clear"/>
                    </button>
                </label>
                <AuthInput setAccount={setAccount} account={account} type='text' placeholder='Имя пользователя' id='username' field='username' className='auth__input'/>
                <label htmlFor="password" className="auth__label">
                    <but className="auth__pass">
                        <img src={passIcon} alt="pass"/>
                    </but>
                    <div onClick={handleClearPass} className="auth__clear">
                        <img src={clearIcon} alt="clear"/>
                    </div>
                </label>
                <AuthInput setAccount={setAccount} account={account} type='password' placeholder='Пароль' id='password' field='password' className='auth__input'/>
                <button className="auth__btn" onClick={handleCheck}>Войти</button>
            </div>
        </div>
    );
};

export default AuthForm;
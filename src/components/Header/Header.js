import React from 'react';
import {logOut} from "../../store/actionCreators/auth";
import store from "../../store/store";

const Header = () => {
    /*Remove token from Redux*/
    const removeToken = () => {
        store.dispatch(logOut(store?.authReducer?.token))
    }
    return (
        <div>
            <header className="header">
                <div className="container header__container">
                    <div className="header__location">
                        <a href='#' className='header__logo'>logo</a>
                        <nav className='header__nav'>
                            <div className="header__dropdown">
                                {/*choice language page*/}
                                <button className="header__button">Choose page</button>
                                <div className="header__homepages">
                                    <a href='#' className='header__link'>TDS Домашняя страница</a>
                                    <a href='#' className='header__link'>TDS Homepage</a>
                                    <a href='#' className='header__link'>TDS 工作台</a>
                                </div>
                            </div>
                            <div className="header__dropdown">
                                <button className="header__button">Account</button>
                                <div className="header__homepages">
                                    <a href='#' className='header__link'>Settings</a>
                                    <a href='#' className='header__link'>Personal Data</a>
                                    {/*Call function RemoveToken*/}
                                    <button onClick={removeToken} className='header__link'>Log Out</button>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className="header__home">
                        <a href="#">HSE Домашняя страница</a>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
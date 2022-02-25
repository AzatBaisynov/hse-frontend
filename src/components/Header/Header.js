import React from 'react';
import {logOut} from "../../store/actionCreators/auth";
import store from "../../store/store";
import {NavLink} from "react-router-dom";

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
                                    <a href='#' className='header__link'>HSE Домашняя страница</a>
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
                        <NavLink to="/">HSE Домашняя страница</NavLink>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
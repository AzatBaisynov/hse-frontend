import React from 'react';
import {MemoryRouter, NavLink, Route, Switch} from "react-router-dom";

const MenuEmissionsDischargesInitialData = ({actions}) => {

    const handleDraw = (el, idx) => {
        return <NavLink
            className='battery-charge__link'
            // if links is active, then change background img
            exact to={el.action_link}
            key={idx}>
            {`${el.action_title}`}</NavLink>
    }
    return (
        <MemoryRouter>
            <div className='menu_discharge'>
                <div className="battery-charge__menu">
                    {/*Draws NavLink, call function handleDraw*/}
                    {actions.map((el, idx) => handleDraw(el, idx))}
                </div>

                <div className="menu__block">
                    {/*Draws components across 'map'*/}
                    <Switch>
                        {
                            actions.map((el, idx) =>
                                <Route
                                    exact path={el.action_link}
                                    component={el.action}
                                    key={idx}/>
                            )
                        }
                    </Switch>
                </div>
            </div>
        </MemoryRouter>
    );
};

export default MenuEmissionsDischargesInitialData;
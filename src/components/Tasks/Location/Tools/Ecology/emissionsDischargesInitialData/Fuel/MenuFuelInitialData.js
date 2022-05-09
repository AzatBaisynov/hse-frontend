import React from 'react';
import {MemoryRouter, NavLink, Route, Switch} from "react-router-dom";

const MenuFuelInitialData = ({actions}) => {
    const handleDraw = (el, idx) => {
        return <NavLink
            className='battery-charge__link'
            // if links is active, then change background img
            exact to={el.action_link}
            key={idx}>
            {`${el.action_title}`}</NavLink>
    }
    return (
        <div className='menu__fuel'>
           <MemoryRouter>
               <div className='fuel__menu'>
                   {actions.map((el, idx) => handleDraw(el, idx))}
               </div>
               <div className='menu__block'>
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
           </MemoryRouter>
        </div>
    );
};

export default MenuFuelInitialData;
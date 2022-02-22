import React from 'react';
import {MemoryRouter, NavLink, Route, Routes} from "react-router-dom";
import Cosmos from '../../assets/image/background/cosmos_bc_links.jpg'

const TasksMenu = ({actions, minH, minW}) => {

    /*makes NavLink*/
    const handleDraw = (el, idx) => {
        return <NavLink
            // activeClassName='menu__active'
            className='menu__link'
            // if links is active, then change background img
            style={({isActive}) => (
                {background: isActive ? `url(${Cosmos}) no-repeat center/cover` : "none"})}
            to={el.action_link}
            key={idx}>
            {`${el.action_title}`}</NavLink>
    }

    return (
        /*Draws components, get arrays from "Homepage" get params: 'minH, minW and actions' */
        <MemoryRouter>
            <div className='menu'>
                <div className="menu__header">
                    {/*Draws NavLink, call function handleDraw*/}
                    {actions.map((el, idx) => handleDraw(el, idx))}
                </div>

                <div style={{width: minW, height: minH}} className="menu__block">
                    {/*Draws components across 'map'*/}
                    <Routes>
                        {
                            actions.map((el, idx) =>
                                <Route
                                exact path={el.action_link}
                                element={el.action}
                                key={idx}/>)
                        }
                    </Routes>
                </div>
            </div>
        </MemoryRouter>
    )
};

export default TasksMenu;
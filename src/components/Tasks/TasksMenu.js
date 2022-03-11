import React from 'react';
import {MemoryRouter, NavLink, Route, Routes, Switch} from "react-router-dom";
import EmissionsDischargesInitialData from "./Location/Tools/Ecology/EmissionsDischargesInitialData";

const TasksMenu = ({actions, minH, minW}) => {

    /*makes NavLink*/
    const handleDraw = (el, idx) => {
        return <NavLink
            className='menu__link'
            // if links is active, then change background img
            exact to={el.action_link}
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
    )
};

export default TasksMenu;
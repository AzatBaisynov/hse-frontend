import React from 'react';
import Education from "./Tasks/Location/Tools/Education";
import Ecology from "./Tasks/Location/Tools/Ecology";
import TasksMenu from "./Tasks/TasksMenu";

const Homepage = () => {

    /*Record components params to array of objects*/
    const tools = [
        {
            action_link: '/Education',
            action_title: 'Обучение',
            action: <Education />
        },
        {
            action_link: '/Ecology',
            action_title: 'Экология',
            action: <Ecology />
        }
    ]



    return (
        <div className='main'>
            <div className="container">
                <div className="main__top">
                    {/*transfer array "tools"*/}
                    <TasksMenu actions={tools} minW={'100%'} minH={"370px"} />
                </div>
            </div>
        </div>
    );
};

export default Homepage;
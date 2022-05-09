import React from 'react';
import Education from "./Tasks/Location/Tools/Education";
import Ecology from "./Tasks/Location/Tools/Ecology";
import TasksMenu from "./Tasks/TasksMenu";
import PersonalPortal from "./Tasks/Location/personalPortal/PersonalPortal";
import ProcessControl from "./Tasks/Location/processControl/ProcessControl";

const Homepage = () => {

    /*Record components params to array of objects*/
    const tools = [
        {
            action_link: '/',
            action_title: 'Обучение',
            action: Education
        },
        {
            action_link: '/Ecology',
            action_title: 'Экология',
            action: Ecology
        }
    ]
    /*Record components params to array of object*/
    const personalPortal = [
        {
            action_link: '/',
            action_title: 'Персональный портал',
            action: PersonalPortal
        }
    ]
    /*Record components params to array of object*/
    const processControl = [
        {
            action_link: '/',
            action_title: 'Управление процессом',
            action: ProcessControl
        }
    ]


    return (
        <div className='main'>
            <div className="container">
                <div className="main__top">
                    {/*transfer array "tools"*/}
                    <TasksMenu actions={tools} minW={'100%'} minH={"370px"} />
                </div>
                {/*transfer array "personalPortal and processControl"*/}
                <div className="main__bot">
                    <TasksMenu actions={personalPortal} minW={'808px'} minH={'323px'}/>
                    <TasksMenu actions={processControl} minW={'358px'} minH={'323px'}/>
                </div>
            </div>
        </div>
    );
};

export default Homepage;
import React from 'react';
import hatIcon from '../../../../assets/image/element/icons/education/hat_icon.svg'
import testIcon from '../../../../assets/image/element/icons/education/tasksIcon.svg'
import briefingIcon from '../../../../assets/image/element/icons/education/breefing.svg'
import educationIcon from '../../../../assets/image/element/icons/education/education.svg'
import training from '../../../../assets/image/element/icons/education/treners.svg'
import {NavLink} from "react-router-dom";

const Education = () => {
    /*Change title's width*/
    const cutWidth = (title) => {
        if (title.length > 35){
            return '244px'
        }
    }
    /*Record apps data*/
    const education = [
        {
            link: '/',
            img: hatIcon,
            title: "HSE training (обучение)"
        },
        {
            link: '/',
            img: educationIcon,
            title: "Программа обучения"
        },
        {
            link: '/',
            img: briefingIcon,
            title: "Инструктажи"
        },
        {
            link: '/',
            img: testIcon,
            title: "Экзамен (по HSE обучению и инструктажам)"
        },
        {
            link: '/',
            img: training,
            title: "Тренировка"
        }
    ]

    return (
        <div className='tools'>
           <div className="container">
               <nav className="tools__nav">
                   {/*Draws apps across map*/}
                   {
                       education.map((el, idx) =>
                           <NavLink to='#' className='tools__link'>
                               <div className="tools__img">
                                   <img src={el.img} alt={el.title}/>
                               </div>
                               <span className="tools__title" style={{width: cutWidth(el.title)}}>{el.title}</span>
                           </NavLink>
                       )
                   }
               </nav>
           </div>
        </div>
    );
};

export default Education;
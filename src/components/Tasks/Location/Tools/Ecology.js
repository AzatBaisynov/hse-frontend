import React from 'react';
import gas from '../../../../assets/image/element/icons/ecology/gas.svg'
import payment from '../../../../assets/image/element/icons/ecology/payment.svg'
import pay from '../../../../assets/image/element/icons/ecology/pay.svg'
import form870 from '../../../../assets/image/element/icons/ecology/form870.svg'
import processing from '../../../../assets/image/element/icons/ecology/proccesing.svg'
import plans from '../../../../assets/image/element/icons/ecology/plans.svg'
import projectEm from '../../../../assets/image/element/icons/ecology/projectEm.svg'
import projectOVOS from '../../../../assets/image/element/icons/ecology/projectOVOS.svg'
import security from '../../../../assets/image/element/icons/ecology/securityObj.svg'
import programs from '../../../../assets/image/element/icons/ecology/program.svg'
/*Change title's width*/
const cutWidth = (title) => {
    if (title.length > 35) {
        return '244px'
    }
}
/*Record apps data*/
const Ecology = () => {
    const ecology = [
        {
            link: '/InitialDataPages',
            img: gas,
            title: "Выбросы/сбросы - Исходные данные"
        },
        {
            link: '/EmissionsEffluentsEmissionCalculations',
            img: payment,
            title: "Выбросы/сбросы - Расчеты выбросов"
        },
        {
            link: '/',
            img: pay,
            title: "Выбросы/сбросы - Платежи за выбросы"
        },
        {
            link: '/',
            img: form870,
            title: "Выбросы/сбросы - Форма 870"
        },
        {
            link: '/',
            img: processing,
            title: "Отходы - Утилизация отходов"
        },
        {
            link: '/',
            img: plans,
            title: "Планы и программы"
        },
        {
            link: '/',
            img: projectEm,
            title: "Проекты эмиссии"
        },
        {
            link: '/',
            img: projectOVOS,
            title: "Проекты ОВОС. Заключения вневедомственной экспертизы, заключения экологической эскпенртизы"
        },
        {
            link: '/',
            img: security,
            title: "Планы мероприятий по охране ОС"
        },
        {
            link: '/',
            img: programs,
            title: "Программы производственного экологического контроля"
        },
    ]
    return (
        <div className='tools ecology'>
            <div className="container">
                <nav className="tools__nav tools__ecology">
                    {/*Draws apps across map*/}
                    {
                        ecology.map((el, idx) =>
                                <a href={el.link} className='tools__link'>
                                    <div className="tools__img">
                                        <img src={el.img} alt={el.title}/>
                                    </div>
                                    <span className="tools__title"
                                          style={{width: cutWidth(el.title)}}>{el.title}</span>
                                </a>
                        )
                    }
                </nav>
            </div>
        </div>
    );
};

export default Ecology;
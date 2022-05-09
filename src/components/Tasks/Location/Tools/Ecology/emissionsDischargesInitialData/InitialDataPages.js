import React from 'react';
import battery from '../../../../../../assets/image/element/icons/ecology/emessionsDischarge/battery.svg'
import fuel from '../../../../../../assets/image/element/icons/ecology/emessionsDischarge/fuel.svg'
import equipment from '../../../../../../assets/image/element/icons/ecology/emessionsDischarge/equipment.svg'


const InitialDataPages = () => {
    // Makes links to section
    const emissionsDischargesInitialData = [
        {
            link: '/InitialDataDischarge',
            img: battery,
            title: 'Исходные данные для расчета выбросов при зарядке аккумуляторов'
        },
        {
            link: '/InitialDataFuel',
            img: fuel,
            title: 'Исходные данные для расчета выбросов при сгорании топлива'
        },
        {
            link: '/',
            img: equipment,
            title: 'Исходные данные для расчета выбросов при проведении ППР тех. обрудования  (стравливание газа )'
        }
    ]
    return (
        <div className='initialData'>
            <div className="container">
                <div className="d-grid  fuel__grid">
                    {
                        emissionsDischargesInitialData.map((el)=>
                            <a href={el.link} className='tools__link fuel__link'>
                                <div className="tools__img">
                                    <img src={el.img} alt={el.title}/>
                                </div>
                                <span className="tools__title">{el.title}</span>
                            </a>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default InitialDataPages;
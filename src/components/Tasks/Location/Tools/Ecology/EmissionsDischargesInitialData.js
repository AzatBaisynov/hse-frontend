import React from 'react';
import {NavLink} from "react-router-dom";

const EmissionsDischargesInitialData = () => {
    return (
        <div className='battery-charge'>
            <div className="container">
                <h2 className="battery-charge__main-title">Исходные данные для расчета выбросов при зарядке аккумуляторов</h2>
                <div className="battery-charge__menu">
                    <NavLink exact to='/' className="battery-charge__link">Лимиты</NavLink>
                    <NavLink exact to='/' className="battery-charge__link">Форма заполнения (месячный)</NavLink>
                    <NavLink exact to='/' className="battery-charge__link">Квартальный отчет</NavLink>
                    <NavLink exact to='/' className="battery-charge__link">Годовой отчет</NavLink>
                </div>
                <div className="battery-charge__block d-grid">
                    <div className="battery-charge__name-production">
                        <h2 className='battery-charge__title-value'>Наименование производства, номер цеха, участка и т.п.</h2>
                        <div className="battery-charge__titles">
                            <p className='battery-charge__sub-value battery-charge__first'>КС. Производственно-энергетический блок (ПЭБ)</p>
                            <p className='battery-charge__sub-value battery-charge__second'>КС. Здание резервуара СО2</p>
                            <p className='battery-charge__sub-value battery-charge__third'>ПНС</p>
                            <p className='battery-charge__sub-value battery-charge__fourth'>КС. Административно-бытовой корпус</p>
                        </div>
                    </div>
                    <div className="battery-charge__pollution-source-number">
                        <h2 className='battery-charge__title-value'>Номер источника загрязнения атмосферы</h2>
                        <div className="battery-charge__titles">
                            <div className="battery-charge__first d-grid d-grid_temp-column-2fr">
                                <p className='battery-charge__sub-value'>0092</p>
                                <p className="battery-charge__sub-value">0098</p>
                            </div>
                            <p className="battery-charge__sub-value battery-charge__second">0102</p>
                            <p className="battery-charge__sub-value battery-charge__third">0104</p>
                            <p className="battery-charge__sub-value battery-charge__fourth">0106</p>
                        </div>
                    </div>
                    <div className="battery-charge__name-source-selection">
                        <h2 className='battery-charge__title-value'>Наименование источника выделения загрязняющих веществ </h2>
                        <div className="battery-charge__title d-grid">
                            <div className="battery-charge__first d-grid d-grid_temp-column-2fr">
                                <p className='battery-charge__sub-value'>Аккумуляторы кислотные ГПЭС №1-3</p>
                                <p className="battery-charge__sub-value">Аккумуляторы кислотные в блоке ДЭС Caterpiller C15</p>
                            </div>
                            <p className="battery-charge__sub-value battery-charge__second">Аккумуляторная в здании газового пожаротушения СО2</p>
                            <p className="battery-charge__sub-value battery-charge__third">Аккумуляторы кислотные в здание пожарной насосной станции</p>
                            <p className="battery-charge__sub-value battery-charge__fourth">Аккумуляторная АБК КС</p>
                        </div>
                    </div>
                    <div className="battery-charge__annual-limit">
                        <div className="battery-charge__annual-limit_high">
                            <div className="battery-charge__annual-limit-top">
                                <h2 className="battery-charge__annual-limit-title color_red">ЛИМИТ ПО ПРОЕКТУ ПДВ НА <i>_2021_</i>ГОД
                                </h2>
                            </div>
                            <div className="battery-charge__annual-limit-bot d-grid">
                                <div className="battery-charge__annual-limit-brands d-flex d-flex_center">
                                    <h3 className='battery-charge__annual-limit-brands-name'>марка аккумуляторов</h3>
                                </div>
                                <div className="battery-charge__annual-limit-work-time d-grid d-grid_temp-column-2fr d-grid_center">
                                    <p className='battery-charge__annual-limit_sub d-flex d-flex_center'>Время работы оборудования</p>
                                    <p className='battery-charge__annual-limit_unit'>ч/год</p>
                                </div>
                                <div className="battery-charge__annual-limit-number d-grid d-grid_temp-column-2fr d-grid_center">
                                    <p className='battery-charge__annual-limit_sub d-flex d-flex_center'>Количество аккумуляторов, шт.</p>
                                    <p className='battery-charge__annual-limit_unit'>ед.</p>
                                </div>
                                <div className="battery-charge__annual-limit-cleverness d-grid d-grid_temp-column-2fr d-grid_center">
                                    <p className='battery-charge__annual-limit_sub d-flex d-flex_center'>Емкость аккумуляторов</p>
                                    <p className='battery-charge__annual-limit_unit'>А*ч</p>
                                </div>
                            </div>
                        </div>
                        <div className="battery-charge__annual-limit_low d-grid">
                            <div className="battery-charge__annual-limit_low-first">
                                <div className="battery-charge__first d-grid d-grid_temp-column-2fr">
                                    <p className=" battery-charge__sub-value"> </p>
                                    <p className=" battery-charge__sub-value"> </p>
                                </div>
                                <p className="battery-charge__second battery-charge__sub-value"> </p>
                                <p className="battery-charge__third battery-charge__sub-value"> </p>
                                <div className="battery-charge__fourth d-grid d-grid_temp-column-4fr ">
                                    <p className='battery-charge__sub-value'> 2V 120-12 (Powerstar)</p>
                                    <p className='battery-charge__sub-value'>LEOCH DJM 12150</p>
                                    <p className='battery-charge__sub-value'>P12V2130 (Spinter)</p>
                                    <p className='battery-charge__sub-value'>L2V270 (Marathon)</p>
                                </div>
                            </div>
                            <div className="battery-charge__annual-limit_low-second">
                                <div className="battery-charge__first d-grid d-grid_temp-column-2fr">
                                    <p className=" battery-charge__sub-value">8760</p>
                                    <p className=" battery-charge__sub-value">8760</p>
                                </div>
                                <p className="battery-charge__second battery-charge__sub-value">8760</p>
                                <p className="battery-charge__third battery-charge__sub-value">8760</p>
                                <div className="battery-charge__fourth d-grid d-grid_temp-column-4fr ">
                                    <p className='battery-charge__sub-value'>8760</p>
                                    <p className='battery-charge__sub-value'>8760</p>
                                    <p className='battery-charge__sub-value'>8760</p>
                                    <p className='battery-charge__sub-value'>8760</p>
                                </div>
                            </div>
                            <div className="battery-charge__annual-limit_low-third">
                                <div className="battery-charge__first d-grid d-grid_temp-column-2fr">
                                    <p className=" battery-charge__sub-value">12</p>
                                    <p className=" battery-charge__sub-value">2</p>
                                </div>
                                <p className="battery-charge__second battery-charge__sub-value">2</p>
                                <p className="battery-charge__third battery-charge__sub-value">2</p>
                                <div className="battery-charge__fourth d-grid d-grid_temp-column-4fr ">
                                    <p className='battery-charge__sub-value'>32</p>
                                    <p className='battery-charge__sub-value'>44</p>
                                    <p className='battery-charge__sub-value'>136</p>
                                    <p className='battery-charge__sub-value'>96</p>
                                </div>
                            </div>
                            <div className="battery-charge__annual-limit_low-fourth">
                                <div className="battery-charge__first d-grid d-grid_temp-column-2fr">
                                    <p className=" battery-charge__sub-value">190</p>
                                    <p className=" battery-charge__sub-value">90</p>
                                </div>
                                <p className="battery-charge__second battery-charge__sub-value">7</p>
                                <p className="battery-charge__third battery-charge__sub-value">225</p>
                                <div className="battery-charge__fourth d-grid d-grid_temp-column-4fr ">
                                    <p className='battery-charge__sub-value'>120</p>
                                    <p className='battery-charge__sub-value'>150</p>
                                    <p className='battery-charge__sub-value'>94</p>
                                    <p className='battery-charge__sub-value'>270</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmissionsDischargesInitialData;
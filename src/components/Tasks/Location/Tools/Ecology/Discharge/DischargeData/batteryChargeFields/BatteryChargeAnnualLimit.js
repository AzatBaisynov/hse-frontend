import React from 'react';

const BatteryChargeAnnualLimit = ({month}) => {
    return (
        <div>
            <div className="battery-charge__annual-limit_high">
                <div className="battery-charge__annual-limit-top">
                    <h2 className="battery-charge__annual-limit-title color_red">{month}</h2>
                </div>
                <div className="battery-charge__annual-limit-bot d-grid">
                    <div className="battery-charge__annual-limit-work-time d-grid d-grid_temp-column-2fr d-grid_center">
                        <p className='battery-charge__annual-limit_sub d-flex d-flex_center'>Время работы оборудования</p>
                        <p className='battery-charge__annual-limit_unit'>ч/месяц</p>
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
        </div>
    );
};

export default BatteryChargeAnnualLimit;
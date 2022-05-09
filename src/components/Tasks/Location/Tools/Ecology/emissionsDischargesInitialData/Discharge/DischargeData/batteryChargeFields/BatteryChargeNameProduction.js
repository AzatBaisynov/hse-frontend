import React from 'react';

const BatteryChargeNameProduction = () => {
    // First block with name of the workshop (Limit Section)

    return (
        <div>
            <div className="battery-charge__name-production">
                <h2 className='battery-charge__title-value'>Наименование производства, номер цеха, участка и т.п.</h2>
                <div className="battery-charge__titles">
                    <p className='battery-charge__sub-value battery-charge__first'>КС. Производственно-энергетический блок (ПЭБ)</p>
                    <p className='battery-charge__sub-value battery-charge__second'>КС. Здание резервуара СО2</p>
                    <p className='battery-charge__sub-value battery-charge__third'>ПНС</p>
                    <p className='battery-charge__sub-value battery-charge__fourth'>КС. Административно-бытовой корпус</p>
                </div>
            </div>
        </div>
    );
};

export default BatteryChargeNameProduction;
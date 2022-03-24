import React from 'react';

const BatteryChargeAnnualLimitsThird = ({numberBatteries}) => {
    let {batteriesGPES,
        batteriesDES,
        accumulatorC02,
        accumulatorPumpingStation,
        powerstar,
        leochDjm,
        spinter,
        Marathon} = numberBatteries
    return (
        <div>
            <div className="battery-charge__annual-limit_low-third">
                <div className="battery-charge__first d-grid d-grid_temp-column-2fr">
                    <p className=" battery-charge__sub-value">{batteriesGPES}</p>
                    <p className=" battery-charge__sub-value">{batteriesDES}</p>
                </div>
                <p className="battery-charge__second battery-charge__sub-value">{accumulatorC02}</p>
                <p className="battery-charge__third battery-charge__sub-value">{accumulatorPumpingStation}</p>
                <div className="battery-charge__fourth d-grid d-grid_temp-column-4fr ">
                    <p className='battery-charge__sub-value'>{powerstar}</p>
                    <p className='battery-charge__sub-value'>{leochDjm}</p>
                    <p className='battery-charge__sub-value'>{spinter}</p>
                    <p className='battery-charge__sub-value'>{Marathon}</p>
                </div>
            </div>
        </div>
    );
};

export default BatteryChargeAnnualLimitsThird;
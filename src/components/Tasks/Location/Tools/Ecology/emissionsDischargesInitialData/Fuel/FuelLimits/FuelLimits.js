import React from 'react';
import FuelLimitsProduction from "./FuelLimitsFields/FuelLimitsProduction";
import FuelLimitsPollution from "./FuelLimitsFields/FuelLimitsPollution";
import FuelLimitsSource from "./FuelLimitsFields/FuelLimitsSource";
import FuelLimitsTypes from "./FuelLimitsFields/FuelLimitsTypes";
import FuelLimitsDensity from "./FuelLimitsFields/FuelLimitsDensity";
import FuelLimitsLimitation from "./FuelLimitsFields/FuelLimitsLimitation";
import FuelTotal from "./FuelTotal";

const FuelLimits = () => {
    // Total (Fuel Limits section)
    return (
        <div className='fuel'>
            <h2 className='fuel__main-title'>Исходные данные для расчета выбросов при сгорании топлива</h2>
            <div className="fuel__block d-grid">
                < FuelLimitsProduction/>
                < FuelLimitsPollution/>
                < FuelLimitsSource/>
                < FuelLimitsTypes/>
                < FuelLimitsDensity/>
                < FuelLimitsLimitation />
            </div>
            < FuelTotal/>
        </div>
    );
};

export default FuelLimits;
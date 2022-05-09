import React from 'react';
import FuelLimits from "./FuelLimits";
import FuelForm from "../FuelForm/FuelForm";
import FuelQuarterReport from "../FuelQuarterReport/FuelQuarterReport";
import FuelYearReport from "../FuelYearReport/FuelYearReport";
import MenuFuelInitialData from "../MenuFuelInitialData";

const InitialDataFuel = () => {
    // Links different sections
    const fuelData = [
        {
            action_link: '/',
            action_title: 'Лимиты',
            action: FuelLimits
        },
        {
            action_link: '/FuelForm',
            action_title: 'Форма заполнения(месячный)',
            action: FuelForm
        },
        {
            action_link: '/FuelQuarterReport',
            action_title: 'Квартальный отчет',
            action: FuelQuarterReport
        },
        {
            action_link: '/FuelYearReport',
            action_title: 'Годовой отчет',
            action: FuelYearReport
        },
    ]
    return (
        <div>
            <div className="container">
                < MenuFuelInitialData actions={fuelData} />
            </div>
        </div>
    );
};

export default InitialDataFuel;
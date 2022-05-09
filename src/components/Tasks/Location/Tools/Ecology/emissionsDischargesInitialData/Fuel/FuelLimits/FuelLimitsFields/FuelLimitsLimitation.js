import React from 'react';
import FuelLimitsYear from "../FuelLimitsLimitation/FuelLimitsYear";
import FuelLimitsCube from "../FuelLimitsLimitation/FuelLimitsCube";
import FuelLimitsKg from "../FuelLimitsLimitation/FuelLimitsKg";
import FuelLimitsTwoYear from "../FuelLimitsLimitation/FuelLimitsTwoYear";

const FuelLimitsLimitation = () => {
    // Year Limits (Fuel Limits Section)
    return (
        <div>
            <div className="fuel__limits">
                <div className="fuel__section d-grid d-grid__temp-rows-2fr">
                    <div className="fuel__limits-top">
                        <h2 className="fuel__limits-title color_red">ЛИМИТ ПО ПРОЕКТУ ПДВ НА <i>_2021_ГОД</i></h2>
                    </div>
                    <div className="fuel__limits-bot">
                        <div className="fuel__expenses d-grid">
                            <h3 className="fuel__expenses-title">Время  работы оборудования</h3>
                            <h3 className="fuel__expenses-title ">Расход топлива (газ, дизтоплива и масла) </h3>
                        </div>
                        <div className="fuel__unit d-grid">
                            <h3 className="fuel__unit-title fuel_border-right">ч/год</h3>
                            <h3 className="fuel__unit-title fuel_border-right">м3/год</h3>
                            <h3 className="fuel__unit-title fuel_border-right">кг</h3>
                            <h3 className="fuel__unit-title">т/год</h3>
                        </div>
                    </div>
                </div>
                <div className="fuel__number d-grid">
                    < FuelLimitsYear />
                    < FuelLimitsCube />
                    < FuelLimitsKg />
                    < FuelLimitsTwoYear />
                </div>
            </div>
        </div>
    );
};

export default FuelLimitsLimitation;
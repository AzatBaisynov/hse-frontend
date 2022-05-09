import React from 'react';
import FuelFormCube from "./FuelFormInputs/FuelFormCube";
import FuelFormYearField from "./FuelFormFields/FuelFormYearField";
import FuelFormKgField from "./FuelFormFields/FuelFormKgField";
import FuelFormSecondYearField from "./FuelFormFields/FuelFormSecondYearField";

const FuelFormFields = ({month}) => {
    // Fields of Form (Month section)
    return (
        <div>
            <div className="fuel__limits">
                <div className="fuel__section d-grid d-grid__temp-rows-2fr">
                    <div className="fuel__limits-top">
                        <h2 className="fuel__limits-title color_red">{month}</h2>
                    </div>
                    <div className="fuel__limits-bot">
                        <div className="fuel__expenses d-grid">
                            <h3 className="fuel__expenses-title">Время  работы оборудования</h3>
                            <h3 className="fuel__expenses-title ">Расход топлива (газ, дизтоплива и масла) </h3>
                        </div>
                        <div className="fuel__unit fuel__unit_grid d-grid">
                            <h3 className="fuel__unit-title fuel_border-right">ч/год</h3>
                            <h3 className="fuel__unit-title fuel_border-right">м3/год</h3>
                            <h3 className="fuel__unit-title fuel_border-right">кг</h3>
                            <h3 className="fuel__unit-title  fuel_border-right">т/год</h3>
                            <h3 className="fuel__unit-title">т/месяц</h3>
                        </div>
                    </div>
                </div>
                <div className="fuel__number fuel__number_grid d-grid">
                    < FuelFormYearField />
                    < FuelFormCube />
                    < FuelFormKgField />
                    < FuelFormSecondYearField />
                    < FuelFormSecondYearField />
                </div>
            </div>
        </div>
    );
};

export default FuelFormFields;
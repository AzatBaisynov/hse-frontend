import React, {useState} from 'react';
import FuelLimitsProduction from "../FuelLimits/FuelLimitsFields/FuelLimitsProduction";
import FuelLimitsPollution from "../FuelLimits/FuelLimitsFields/FuelLimitsPollution";
import FuelLimitsSource from "../FuelLimits/FuelLimitsFields/FuelLimitsSource";
import FuelLimitsTypes from "../FuelLimits/FuelLimitsFields/FuelLimitsTypes";
import FuelLimitsDensity from "../FuelLimits/FuelLimitsFields/FuelLimitsDensity";
import FuelTotal from "../FuelLimits/FuelTotal";
import FuelFormFields from "./FuelFormFields";

const FuelForm = () => {
    //Get current month for "tag" select
    const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Октябрь', 'Ноябрь', 'Декабрь']

    //get current date
    const date = new Date()
    const currentMonth = date.getMonth()
    const [month, setMonth] = useState(months[currentMonth])
    // if need to change Month
    const returnMonth = (e) => {
        setMonth(e.target.value)
    }
    return (
        <div>
            <div className='fuel'>
                <div className="container">
                    <select className="dischargeForm__date" name="month" id="month0" onChange={returnMonth}>
                        <option disabled>Выберите месяц</option>
                        {
                            months.map((el, idx) =>
                                <option key={idx} value={el} className='option'>{el}</option>
                            )
                        }
                    </select>
                    <div className="fuel__block d-grid">
                        <FuelLimitsProduction/>
                        <FuelLimitsPollution/>
                        <FuelLimitsSource/>
                        <FuelLimitsTypes/>
                        <FuelLimitsDensity/>
                        <FuelFormFields month={month}/>
                    </div>
                    < FuelTotal/>
                </div>
            </div>
        </div>
    );
};

export default FuelForm;
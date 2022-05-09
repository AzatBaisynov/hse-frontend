import React, {useState} from 'react';
import BatteryChargeNameProduction from "../batteryChargeFields/BatteryChargeNameProduction";
import BatteryChargePollutionSource from "../batteryChargeFields/BatteryChargePollutionSource";
import BatteryChargeNameSource from "../batteryChargeFields/BatteryChargeNameSource";
import BatteryChargeAnnualLimit from "../annualLimit/BatteryChargeAnnualLimit";
import QuarterReportMonth from "./QuarterReportMonth";
import QuarterReportTotal from "./QuarterReportTotal";
const QuarterReport = () => {

    const date = new Date()
    const currentYear = date.getFullYear()
    const [year, setYear] = useState(0)

    const returnYear = (e) => {
        setYear(e.target.value)
    }

    return (
        <div className='quarterReport'>
            <div className="container">
                <div className="dischargeForm__form">
                    <select onClick={returnYear} className="dischargeForm__date" name="year" id="year" onChange={returnYear}>
                        <option disabled>Выберите год</option>
                        <option value={currentYear} className="option">{currentYear}</option>
                        <option value="2021" className="option">2021</option>
                        <option value="2020" className="option">2020</option>
                        <option value="2019" className="option">2019</option>
                        <option value="2018" className="option">2018</option>
                        <option value="2017" className="option">2017</option>
                    </select>
                    <select className="dischargeForm__date" name="month" id="month">
                        <option  disabled>Выберите квартал</option>
                        <option value="1 квартал" className="option">1 квартал</option>
                        <option value="2 квартал" className="option">2 квартал</option>
                        <option value="3 квартал" className="option">3 квартал</option>
                        <option value="4 квартал" className="option">4 квартал</option>
                    </select>
                </div>
                < QuarterReportMonth />
                < QuarterReportMonth />
                < QuarterReportMonth />
                <span className="quarterReport__bot-line"/>
                <h2 className="quarterReport__title">Итог за квартал</h2>
                < QuarterReportTotal />
            </div>
        </div>
    );
};

export default QuarterReport;
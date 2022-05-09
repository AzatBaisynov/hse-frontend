import React, {useState} from 'react';
import BatteryChargeNameProduction from "../batteryChargeFields/BatteryChargeNameProduction";
import BatteryChargePollutionSource from "../batteryChargeFields/BatteryChargePollutionSource";
import BatteryChargeNameSource from "../batteryChargeFields/BatteryChargeNameSource";
import BatteryChargeAnnualLimit from "../annualLimit/BatteryChargeAnnualLimit";
import BatteryChargeAnnualLimitsThird from "../annualLimit/BatteryChargeAnnualLimitsThird";

const DischargeForm = () => {
    // get current date
    const date = new Date()
    // get year
    const currentYear = date.getFullYear()
    const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Октябрь', 'Ноябрь', 'Декабрь']
    // object of the Limits fields
    const numberBatteries = {
        batteriesGPES: 12,
        batteriesDES: 2,
        accumulatorC02: 2,
        accumulatorPumpingStation: 2,
        powerstar: 32,
        leochDjm: 44,
        spinter: 136,
        Marathon: 96
    }
    // get month
    const currentMonth = date.getMonth()
    // set current year for the initial state
    const [year, setYear] = useState(date.getFullYear())
    // set current month for the initial state
    const [month, setMonth] = useState(months[currentMonth])
    // record inputs value for the object
    const [workTime, setWorkTime] = useState({})
    const returnYear = (e) => {
        setYear(e.target.value)
    }
    const returnMonth = (e) => {
        setMonth(e.target.value)
    }

    // set values for the object "workTime"
    const handleChange = (e) => {
        const id = e.target.id
        const value = e.target.value
        switch (id) {
            case "batteriesGPES":
                setWorkTime({...workTime, batteriesGPES: value})
                break
            case "batteriesDES":
                setWorkTime({...workTime, batteriesDES: value})
                break
            case "accumulatorC02":
                setWorkTime({...workTime, accumulatorC02: value})
                break
            case "accumulatorPumpingStation":
                setWorkTime({...workTime, accumulatorPumpingStation: value})
                break
            case "powerstar":
                setWorkTime({...workTime, powerstar: value})
                break
            case "leochDjm":
                setWorkTime({...workTime, leochDjm: value})
                break
            case "Spinter":
                setWorkTime({...workTime, spinter: value})
                break
            case "Marathon":
                setWorkTime({...workTime, Marathon: value})
                break
        }
    }
    // check false
    const isEmpty = (e) => {
        if (e.target.value === undefined) {
            return '#a3a3a3c9'
        } else{
            return '#50d57f'
        }
    }
    // entry form
    return (
        <div className="dischargeForm">
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
                    <select className="dischargeForm__date" name="month" id="month0" onChange={returnMonth}>
                        <option disabled>Выберите месяц</option>
                        {
                            months.map((el, idx) =>
                                <option key={idx} value={el} className='option'>{el}</option>
                            )
                        }
                    </select>
                </div>
                <div className="dischargeForm__month-form">
                    <div className="dischargeForm__equipment-time">
                        <div className="battery-charge__block d-grid">
                            < BatteryChargeNameProduction/>
                            < BatteryChargePollutionSource/>
                            < BatteryChargeNameSource/>
                            <div className="battery-charge__annual-limit">
                                < BatteryChargeAnnualLimit month={month}/>
                                <div className="battery-charge__annual-limit_low d-grid">
                                    <div className="battery-charge__annual-limit_low-second">
                                        <div className="battery-charge__first d-grid d-grid_temp-column-2fr">
                                            <input placeholder='Введите число' id='batteriesGPES' onChange={isEmpty} onInput={handleChange}
                                                   type='number' className='dischargeForm__month-input'/>
                                            <input placeholder='Введите число' id='batteriesDES' onInput={handleChange}
                                                   type='number' className='dischargeForm__month-input'/>
                                        </div>
                                        <div className="battery-charge__second">
                                            <input placeholder='Введите число' id='accumulatorC02'
                                                   onInput={handleChange} type='number'
                                                   className='dischargeForm__month-input'/>
                                        </div>
                                        <div className="battery-charge__third">
                                            <input placeholder='Введите число' id='accumulatorPumpingStation'
                                                   type='number' onInput={handleChange}
                                                   className='dischargeForm__month-input '/>
                                        </div>
                                        <div className="battery-charge__fourth d-grid d-grid_temp-column-4fr ">
                                            <input placeholder='Введите число' id='powerstar' type='number'
                                                   onInput={handleChange} className='dischargeForm__month-input '/>
                                            <input placeholder='Введите число' id='leochDjm' type='number'
                                                   onInput={handleChange} className='dischargeForm__month-input '/>
                                            <input placeholder='Введите число' id='spinter' type='number'
                                                   onInput={handleChange} className='dischargeForm__month-input '/>
                                            <input placeholder='Введите число' id='Marathon' type='number'
                                                   onInput={handleChange} className='dischargeForm__month-input '/>
                                        </div>
                                    </div>
                                    <BatteryChargeAnnualLimitsThird numberBatteries={numberBatteries}/>
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
                    <div className="dischargeForm__send-button">
                        <button style={{background: {}}} className='dischargeForm__send-form'>Отправить</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DischargeForm;
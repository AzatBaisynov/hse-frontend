import React, {useState} from 'react';
import BatteryChargeNameProduction from "./batteryChargeFields/BatteryChargeNameProduction";
import BatteryChargePollutionSource from "./batteryChargeFields/BatteryChargePollutionSource";
import BatteryChargeNameSource from "./batteryChargeFields/BatteryChargeNameSource";
import BatteryChargeAnnualLimit from "./batteryChargeFields/BatteryChargeAnnualLimit";
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
                <div className="battery-charge__block d-grid">
                    < BatteryChargeNameProduction />
                    < BatteryChargePollutionSource />
                    < BatteryChargeNameSource />
                    <div className="battery-charge__annual-limit">
                        < BatteryChargeAnnualLimit month={'Январь'} />
                        <div className="battery-charge__annual-limit_low d-grid">
                            <div className="battery-charge__annual-limit_low-second">
                                <div className="battery-charge__first d-grid d-grid_temp-column-2fr">
                                    <p id='1' className='dischargeForm__month-input'>730</p>
                                    <p id='2' className='dischargeForm__month-input'>730</p>
                                </div>
                                <div className="battery-charge__second">
                                    <p className='dischargeForm__month-input'>730</p>
                                </div>
                                <div className="battery-charge__third">
                                    <p className='dischargeForm__month-input'>730</p>
                                </div>
                                <div className="battery-charge__fourth d-grid d-grid_temp-column-4fr ">
                                    <p className='dischargeForm__month-input '>730</p>
                                    <p className='dischargeForm__month-input '>730</p>
                                    <p className='dischargeForm__month-input '>730</p>
                                    <p className='dischargeForm__month-input '>730</p>
                                </div>
                            </div>
                            <div className="battery-charge__annual-limit_low-third">
                                <div className="battery-charge__first d-grid d-grid_temp-column-2fr">
                                    <p className=" battery-charge__sub-value">12</p>
                                    <p className=" battery-charge__sub-value">2</p>
                                </div>
                                <p className="battery-charge__second battery-charge__sub-value">2</p>
                                <p className="battery-charge__third battery-charge__sub-value">2</p>
                                <div className="battery-charge__fourth d-grid d-grid_temp-column-4fr ">
                                    <p className='battery-charge__sub-value'>32</p>
                                    <p className='battery-charge__sub-value'>44</p>
                                    <p className='battery-charge__sub-value'>136</p>
                                    <p className='battery-charge__sub-value'>96</p>
                                </div>
                            </div>
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
                <div className="battery-charge__block d-grid">
                    < BatteryChargeNameProduction />
                    < BatteryChargePollutionSource />
                    < BatteryChargeNameSource />
                    <div className="battery-charge__annual-limit">
                        < BatteryChargeAnnualLimit month={'Февраль'} />
                        <div className="battery-charge__annual-limit_low d-grid">
                            <div className="battery-charge__annual-limit_low-second">
                                <div className="battery-charge__first d-grid d-grid_temp-column-2fr">
                                    <p id='1' className='dischargeForm__month-input'>730</p>
                                    <p id='2' className='dischargeForm__month-input'>730</p>
                                </div>
                                <div className="battery-charge__second">
                                    <p className='dischargeForm__month-input'>730</p>
                                </div>
                                <div className="battery-charge__third">
                                    <p className='dischargeForm__month-input'>730</p>
                                </div>
                                <div className="battery-charge__fourth d-grid d-grid_temp-column-4fr ">
                                    <p className='dischargeForm__month-input '>730</p>
                                    <p className='dischargeForm__month-input '>730</p>
                                    <p className='dischargeForm__month-input '>730</p>
                                    <p className='dischargeForm__month-input '>730</p>
                                </div>
                            </div>
                            <div className="battery-charge__annual-limit_low-third">
                                <div className="battery-charge__first d-grid d-grid_temp-column-2fr">
                                    <p className=" battery-charge__sub-value">12</p>
                                    <p className=" battery-charge__sub-value">2</p>
                                </div>
                                <p className="battery-charge__second battery-charge__sub-value">2</p>
                                <p className="battery-charge__third battery-charge__sub-value">2</p>
                                <div className="battery-charge__fourth d-grid d-grid_temp-column-4fr ">
                                    <p className='battery-charge__sub-value'>32</p>
                                    <p className='battery-charge__sub-value'>44</p>
                                    <p className='battery-charge__sub-value'>136</p>
                                    <p className='battery-charge__sub-value'>96</p>
                                </div>
                            </div>
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
                <div className="battery-charge__block d-grid">
                    < BatteryChargeNameProduction />
                    < BatteryChargePollutionSource />
                    < BatteryChargeNameSource />
                    <div className="battery-charge__annual-limit">
                        < BatteryChargeAnnualLimit month={'Март'} />
                        <div className="battery-charge__annual-limit_low d-grid">
                            <div className="battery-charge__annual-limit_low-second">
                                <div className="battery-charge__first d-grid d-grid_temp-column-2fr">
                                    <p id='1' className='dischargeForm__month-input'>730</p>
                                    <p id='2' className='dischargeForm__month-input'>730</p>
                                </div>
                                <div className="battery-charge__second">
                                    <p className='dischargeForm__month-input'>730</p>
                                </div>
                                <div className="battery-charge__third">
                                    <p className='dischargeForm__month-input'>730</p>
                                </div>
                                <div className="battery-charge__fourth d-grid d-grid_temp-column-4fr ">
                                    <p className='dischargeForm__month-input '>730</p>
                                    <p className='dischargeForm__month-input '>730</p>
                                    <p className='dischargeForm__month-input '>730</p>
                                    <p className='dischargeForm__month-input '>730</p>
                                </div>
                            </div>
                            <div className="battery-charge__annual-limit_low-third">
                                <div className="battery-charge__first d-grid d-grid_temp-column-2fr">
                                    <p className=" battery-charge__sub-value">12</p>
                                    <p className=" battery-charge__sub-value">2</p>
                                </div>
                                <p className="battery-charge__second battery-charge__sub-value">2</p>
                                <p className="battery-charge__third battery-charge__sub-value">2</p>
                                <div className="battery-charge__fourth d-grid d-grid_temp-column-4fr ">
                                    <p className='battery-charge__sub-value'>32</p>
                                    <p className='battery-charge__sub-value'>44</p>
                                    <p className='battery-charge__sub-value'>136</p>
                                    <p className='battery-charge__sub-value'>96</p>
                                </div>
                            </div>
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
                <span className="quarterReport__bot-line"/>
                <h2 className="quarterReport__title">Итог за квартал</h2>
                <div className="battery-charge__block d-grid">
                    < BatteryChargeNameProduction />
                    < BatteryChargePollutionSource />
                    < BatteryChargeNameSource />
                    <div className="battery-charge__annual-limit">
                        < BatteryChargeAnnualLimit month={'ИТОГ ЗА КВАРТАЛ'} />
                        <div className="battery-charge__annual-limit_low d-grid">
                            <div className="battery-charge__annual-limit_low-second">
                                <div className="battery-charge__first d-grid d-grid_temp-column-2fr">
                                    <p id='1' className='dischargeForm__month-input'>2190</p>
                                    <p id='2' className='dischargeForm__month-input'>2190</p>
                                </div>
                                <div className="battery-charge__second">
                                    <p className='dischargeForm__month-input'>2190</p>
                                </div>
                                <div className="battery-charge__third">
                                    <p className='dischargeForm__month-input'>2190</p>
                                </div>
                                <div className="battery-charge__fourth d-grid d-grid_temp-column-4fr ">
                                    <p className='dischargeForm__month-input '>2190</p>
                                    <p className='dischargeForm__month-input '>2190</p>
                                    <p className='dischargeForm__month-input '>2190</p>
                                    <p className='dischargeForm__month-input '>2190</p>
                                </div>
                            </div>
                            <div className="battery-charge__annual-limit_low-third">
                                <div className="battery-charge__first d-grid d-grid_temp-column-2fr">
                                    <p className=" battery-charge__sub-value">12</p>
                                    <p className=" battery-charge__sub-value">2</p>
                                </div>
                                <p className="battery-charge__second battery-charge__sub-value">2</p>
                                <p className="battery-charge__third battery-charge__sub-value">2</p>
                                <div className="battery-charge__fourth d-grid d-grid_temp-column-4fr ">
                                    <p className='battery-charge__sub-value'>32</p>
                                    <p className='battery-charge__sub-value'>44</p>
                                    <p className='battery-charge__sub-value'>136</p>
                                    <p className='battery-charge__sub-value'>96</p>
                                </div>
                            </div>
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
        </div>
    );
};

export default QuarterReport;
import React from 'react';
import BatteryChargeNameProduction from "../batteryChargeFields/BatteryChargeNameProduction";
import BatteryChargePollutionSource from "../batteryChargeFields/BatteryChargePollutionSource";
import BatteryChargeNameSource from "../batteryChargeFields/BatteryChargeNameSource";
import BatteryChargeAnnualLimit from "../annualLimit/BatteryChargeAnnualLimit";

const QuarterReportTotal = () => {

    // Quarter Report Months
    return (
        <div>
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
    );
};

export default QuarterReportTotal;
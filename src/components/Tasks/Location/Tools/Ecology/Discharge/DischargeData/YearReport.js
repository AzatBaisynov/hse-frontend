import React, {useState} from 'react';

const YearReport = () => {

    const date = new Date()
    const currentYear = date.getFullYear()
    const [yearReport, setYearReport] = useState(0)


    const returnYear = (e) => {
        setYearReport(e.target.value)
    }

    console.log(yearReport)


    return (
        <div className='yearReport'>
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
                </div>
                <div className="yearReport__flex">
                    <div className="yearReport__batteries">
                        <div className="battery-charge__name-production">
                            <h2 className='battery-charge__title-value'>Наименование производства, номер цеха, участка и
                                т.п.</h2>
                            <div className="battery-charge__titles">
                                <p className='battery-charge__sub-value battery-charge__first'>КС.
                                    Производственно-энергетический блок (ПЭБ)</p>
                                <p className='battery-charge__sub-value battery-charge__second'>КС. Здание резервуара
                                    СО2</p>
                                <p className='battery-charge__sub-value battery-charge__third'>ПНС</p>
                                <p className='battery-charge__sub-value battery-charge__fourth'>КС.
                                    Административно-бытовой корпус</p>
                            </div>
                        </div>
                        <div className="battery-charge__pollution-source-number">
                            <h2 className='battery-charge__title-value'>Номер источника загрязнения атмосферы</h2>
                            <div className="battery-charge__titles">
                                <div className="battery-charge__first d-grid d-grid_temp-column-2fr">
                                    <p className='battery-charge__sub-value'>0092</p>
                                    <p className="battery-charge__sub-value">0098</p>
                                </div>
                                <p className="battery-charge__sub-value battery-charge__second">0102</p>
                                <p className="battery-charge__sub-value battery-charge__third">0104</p>
                                <p className="battery-charge__sub-value battery-charge__fourth">0106</p>
                            </div>
                        </div>
                        <div className="battery-charge__name-source-selection">
                            <h2 className='battery-charge__title-value'>Наименование источника выделения загрязняющих
                                веществ </h2>
                            <div className="battery-charge__title d-grid">
                                <div className="battery-charge__first d-grid d-grid_temp-column-2fr">
                                    <p className='battery-charge__sub-value battery-charge__sub_height75'>Аккумуляторы
                                        кислотные ГПЭС №1-3</p>
                                    <p className="battery-charge__sub-value battery-charge__sub_height75">Аккумуляторы
                                        кислотные в блоке ДЭС Caterpiller C15</p>
                                </div>
                                <p className="battery-charge__sub-value battery-charge__second">Аккумуляторная в здании
                                    газового пожаротушения СО2</p>
                                <p className="battery-charge__sub-value battery-charge__third">Аккумуляторы кислотные в
                                    здание пожарной насосной станции</p>
                                <div className="battery-charge__fourth d-grid d-grid_temp-column-4fr ">
                                    <p className='battery-charge__sub-value'> 2V 120-12 (Powerstar)</p>
                                    <p className='battery-charge__sub-value'>LEOCH DJM 12150</p>
                                    <p className='battery-charge__sub-value'>P12V2130 (Spinter)</p>
                                    <p className='battery-charge__sub-value'>L2V270 (Marathon)</p>
                                </div>
                            </div>
                        </div>
                        <div className="yearReport__first-quarter yearReport_width-160">
                            <div className="battery-charge__name-source-selection">
                                <h2 className='yearReport__number-quarter'>1 квартал</h2>
                                <div className="battery-charge__title d-grid">
                                    <div className="battery-charge__first d-grid d-grid_temp-column-2fr">
                                        <p className='yearReport__sub-value battery-charge__sub_height75'>2190</p>
                                        <p className="yearReport__sub-value battery-charge__sub_height75">2190</p>
                                    </div>
                                    <p className="yearReport__sub-value battery-charge__second">2190</p>
                                    <p className="yearReport__sub-value battery-charge__third">2190</p>
                                    <div className="battery-charge__fourth d-grid d-grid_temp-column-4fr ">
                                        <p className='yearReport__sub-value'>2190</p>
                                        <p className='yearReport__sub-value'>2190</p>
                                        <p className='yearReport__sub-value'>2190</p>
                                        <p className='yearReport__sub-value'>2190</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="yearReport__second-quarter yearReport_width-160">
                            <div className="battery-charge__name-source-selection">
                                <h2 className='yearReport__number-quarter'>2 квартал</h2>
                                <div className="battery-charge__title d-grid">
                                    <div className="battery-charge__first d-grid d-grid_temp-column-2fr">
                                        <p className='yearReport__sub-value battery-charge__sub_height75'>2190</p>
                                        <p className="yearReport__sub-value battery-charge__sub_height75">2190</p>
                                    </div>
                                    <p className="yearReport__sub-value battery-charge__second">2190</p>
                                    <p className="yearReport__sub-value battery-charge__third">2190</p>
                                    <div className="battery-charge__fourth d-grid d-grid_temp-column-4fr ">
                                        <p className='yearReport__sub-value'>2190</p>
                                        <p className='yearReport__sub-value'>2190</p>
                                        <p className='yearReport__sub-value'>2190</p>
                                        <p className='yearReport__sub-value'>2190</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="yearReport__third-quarter yearReport_width-160">
                            <div className="battery-charge__name-source-selection">
                                <h2 className='yearReport__number-quarter'>3 квартал</h2>
                                <div className="battery-charge__title d-grid">
                                    <div className="battery-charge__first d-grid d-grid_temp-column-2fr">
                                        <p className='yearReport__sub-value battery-charge__sub_height75'>2190</p>
                                        <p className="yearReport__sub-value battery-charge__sub_height75">2190</p>
                                    </div>
                                    <p className="yearReport__sub-value battery-charge__second">2190</p>
                                    <p className="yearReport__sub-value battery-charge__third">2190</p>
                                    <div className="battery-charge__fourth d-grid d-grid_temp-column-4fr ">
                                        <p className='yearReport__sub-value'>2190</p>
                                        <p className='yearReport__sub-value'>2190</p>
                                        <p className='yearReport__sub-value'>2190</p>
                                        <p className='yearReport__sub-value'>2190</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="yearReport__fourth-quarter yearReport_width-160">
                            <div className="battery-charge__name-source-selection">
                                <h2 className='yearReport__number-quarter'>4 квартал</h2>
                                <div className="battery-charge__title d-grid">
                                    <div className="battery-charge__first d-grid d-grid_temp-column-2fr">
                                        <p className='yearReport__sub-value battery-charge__sub_height75'>2190</p>
                                        <p className="yearReport__sub-value battery-charge__sub_height75">2190</p>
                                    </div>
                                    <p className="yearReport__sub-value battery-charge__second">2190</p>
                                    <p className="yearReport__sub-value battery-charge__third">2190</p>
                                    <div className="battery-charge__fourth d-grid d-grid_temp-column-4fr ">
                                        <p className='yearReport__sub-value'>2190</p>
                                        <p className='yearReport__sub-value'>2190</p>
                                        <p className='yearReport__sub-value'>2190</p>
                                        <p className='yearReport__sub-value'>2190</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="yearReport__year">
                            <div className="battery-charge__name-source-selection">
                                <h2 className='yearReport__number-quarter'>Годовой отчет {yearReport}</h2>
                                <div className="battery-charge__title d-grid">
                                    <div className="battery-charge__first d-grid d-grid_temp-column-2fr">
                                        <p className='yearReport__sub-value battery-charge__sub_height75'>8760</p>
                                        <p className="yearReport__sub-value battery-charge__sub_height75">8760</p>
                                    </div>
                                    <p className="yearReport__sub-value battery-charge__second">8760</p>
                                    <p className="yearReport__sub-value battery-charge__third">8760</p>
                                    <div className="battery-charge__fourth d-grid d-grid_temp-column-4fr ">
                                        <p className='yearReport__sub-value'>8760</p>
                                        <p className='yearReport__sub-value'>8760</p>
                                        <p className='yearReport__sub-value'>8760</p>
                                        <p className='yearReport__sub-value'>8760</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default YearReport;
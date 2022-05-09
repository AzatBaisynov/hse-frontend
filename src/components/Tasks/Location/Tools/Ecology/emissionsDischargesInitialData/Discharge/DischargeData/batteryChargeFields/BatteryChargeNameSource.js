import React from 'react';

const BatteryChargeNameSource = () => {
    // Second block with a source of emission of pollutants (Limit Section)
    return (
        <div>
            <div className="battery-charge__name-source-selection">
                <h2 className='battery-charge__title-value'>Наименование источника выделения загрязняющих веществ </h2>
                <div className="battery-charge__title d-grid">
                    <div className="battery-charge__first d-grid d-grid_temp-column-2fr">
                        <p className='battery-charge__sub-value battery-charge__sub_height75'>Аккумуляторы кислотные ГПЭС №1-3</p>
                        <p className="battery-charge__sub-value battery-charge__sub_height75">Аккумуляторы кислотные в блоке ДЭС Caterpiller C15</p>
                    </div>
                    <p className="battery-charge__sub-value battery-charge__second">Аккумуляторная в здании газового пожаротушения СО2</p>
                    <p className="battery-charge__sub-value battery-charge__third">Аккумуляторы кислотные в здание пожарной насосной станции</p>
                    <div className="battery-charge__fourth d-grid d-grid_temp-column-4fr ">
                        <p className='battery-charge__sub-value'> 2V 120-12 (Powerstar)</p>
                        <p className='battery-charge__sub-value'>LEOCH DJM 12150</p>
                        <p className='battery-charge__sub-value'>P12V2130 (Spinter)</p>
                        <p className='battery-charge__sub-value'>L2V270 (Marathon)</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BatteryChargeNameSource;
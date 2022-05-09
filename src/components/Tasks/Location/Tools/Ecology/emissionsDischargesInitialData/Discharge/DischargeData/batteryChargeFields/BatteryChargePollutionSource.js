import React from 'react';

const BatteryChargePollutionSource = () => {
    // Third block with Number of the source of air pollution

    return (
        <div>
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
        </div>
    );
};

export default BatteryChargePollutionSource;
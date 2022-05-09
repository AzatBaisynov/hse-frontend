import React from 'react';

const FuelFormYearField = () => {
    // Year Fields (Form section)
    const inputNumber = 'Введите число'
    return (
        <div>
            <div className="fuel__limits_year-input">
                <input type='number' id='yearRollsGPAOne' placeholder={inputNumber} className="fuel__limits-year fuel_height-40"/>
                <input type='number' id='yearRollsGPATwo'  placeholder={inputNumber} className="fuel__limits-year fuel_height-40"/>
                <input type='number' id='yearRollsGPAThree' placeholder={inputNumber} className="fuel__limits-year fuel_height-40"/>
                <input type='number' id='yearRollsGPAFour' placeholder={inputNumber} className="fuel__limits-year fuel_height-40"/>
                <div className="fuel_height-120 d-grid">
                    <input type='number' id='yearPowerStationOne' placeholder={inputNumber} className="fuel__limits-year"/>
                    <input type='number' id='yearPowerStationTwo' placeholder={inputNumber} className="fuel__limits-year"/>
                    <input type='number' id='yearPowerStationThree' placeholder={inputNumber} className="fuel__limits-year"/>
                </div>
                <input type='number' id='yearBoilerPipe' placeholder={inputNumber} className="fuel__limits-year fuel_height-40"/>
                <input type='number' id='yearDiningRoom' placeholder={inputNumber} className="fuel__limits-year fuel_height-40"/>
                <input type='number' id='yearDieselGenerator' placeholder={inputNumber} className="fuel__limits-year fuel_height-40"/>
                <input type='number' id='yearDieselPumping' placeholder={inputNumber} className="fuel__limits-year fuel_height-40"/>
                <input type='number' id='yearCandleMineralOilGPAOne' placeholder={inputNumber} className="fuel__limits-year fuel_height-40"/>
                <input type='number' id='yearCandleMineralOilGPATwo' placeholder={inputNumber} className="fuel__limits-year fuel_height-40"/>
                <input type='number' id='yearCandleMineralOilGPAThree' placeholder={inputNumber} className="fuel__limits-year fuel_height-40"/>
                <input type='number' id='yearCandleMineralOilGPAFour' placeholder={inputNumber} className="fuel__limits-year fuel_height-40"/>
                <input type='number' id='yearCandleSyntheticOilGPAOne' placeholder={inputNumber} className="fuel__limits-year fuel_height-40"/>
                <input type='number' id='yearCandleSyntheticOilGPATwo' placeholder={inputNumber} className="fuel__limits-year fuel_height-40"/>
                <input type='number' id='yearCandleSyntheticOilGPAThree' placeholder={inputNumber} className="fuel__limits-year fuel_height-40"/>
                <input type='number' id='yearCandleSyntheticOilGPAFour' placeholder={inputNumber} className="fuel__limits-year fuel_height-40"/>
                <div className="fuel_height-120 d-grid">
                    <input type='number' id='yearOilSeparatorCandleGPESOne' placeholder={inputNumber} className="fuel__limits-year "/>
                    <input type='number' id='yearOilSeparatorCandleGPESTwo' placeholder={inputNumber} className="fuel__limits-year "/>
                    <input type='number' id='yearOilSeparatorCandleGPESThree' placeholder={inputNumber} className="fuel__limits-year "/>
                </div>
                <div className="fuel_height-400 d-grid fuel__gild">
                    <div className="d-grid">
                        <input type='number' id='yearMineralOilChangeGPAOne' placeholder={inputNumber} className="fuel__limits-year"/>
                        <input type='number' id='yearSyntheticOilChangeGPAOne' placeholder={inputNumber} className="fuel__limits-year"/>
                    </div>
                    <div className="d-grid">
                        <input type='number' id='yearMineralOilChangeGPATwo' placeholder={inputNumber} className="fuel__limits-year"/>
                        <input type='number' id='yearSyntheticOilChangeGPATwo' placeholder={inputNumber} className="fuel__limits-year"/>
                    </div>
                    <div className="d-grid">
                        <input type='number' id='yearMineralOilChangeGPAThree' placeholder={inputNumber} className="fuel__limits-year"/>
                        <input type='number' id='yearSyntheticOilChangeGPAThree' placeholder={inputNumber} className="fuel__limits-year"/>
                    </div>
                    <div className="d-grid">
                        <input type='number' id='yearMineralOilChangeGPAFour' placeholder={inputNumber} className="fuel__limits-year"/>
                        <input type='number' id='yearSyntheticOilChangeGPAFour' placeholder={inputNumber} className="fuel__limits-year"/>
                    </div>
                    <input type='number' id='yearCondensateCollectorKS6' placeholder={inputNumber} className="fuel__limits-year"/>
                    <input type='number' id='yearDrainageCapacityGPA' placeholder={inputNumber} className="fuel__limits-year"/>
                </div>
                <div className="fuel_height-80 d-grid d-grid__temp-rows-2fr">
                    <input type='number' id='yearOilChangeGPESOneTwoThree' placeholder={inputNumber} className="fuel__limits-year"/>
                    <input type='number' id='yearConsumableCapacityDieselDPP' placeholder={inputNumber} className="fuel__limits-year"/>
                </div>
                <input type='number' id='yearTankDieselDNU' placeholder={inputNumber} className="fuel__limits-year fuel_height-40"/>
                <input type='number' id='yearAirCompressorSeparator' placeholder={inputNumber} className="fuel__limits-year fuel_height-40"/>
                <div className="fuel_height-240 d-grid fuel__kc-work">
                    <div className="d-grid d-grid__temp-rows-3fr">
                        <input type='number' id='yearWeldingAWSE7015KS' placeholder={inputNumber} className="fuel__limits-year"/>
                        <input type='number' id='yearFillerWireKS' placeholder={inputNumber} className="fuel__limits-year"/>
                        <input type='number' id='yearWeldingAWSER70S6KS' placeholder={inputNumber} className="fuel__limits-year"/>
                    </div>
                    <input type='number' id='yearMetalCutting' placeholder={inputNumber} className="fuel__limits-year"/>
                    <div className="d-grid">
                        <input type='number' id='yearPaintworkEnamelPF115KS' placeholder={inputNumber} className="fuel__limits-year"/>
                        <input type='number' id='yearPaintworkSolvent647KS' placeholder={inputNumber} className="fuel__limits-year"/>
                    </div>
                </div>
                <div className="fuel_height-400 d-grid fuel__azc">
                    <input type='number' id='yearReceivingTanksAI92' placeholder={inputNumber} className="fuel__limits-year "/>
                    <input type='number' id='yearReceivingTanksDieselFuel' placeholder={inputNumber} className="fuel__limits-year "/>
                    <input type='number' id='yearGasolineStationTRK' placeholder={inputNumber} className="fuel__limits-year "/>
                    <input type='number' id='yearDieselFuelTRK' placeholder={inputNumber} className="fuel__limits-year "/>
                    <div className="d-grid d-grid__temp-rows-2fr">
                        <input type='number' id='yearPaintworkEnamelPF115VP' placeholder={inputNumber} className="fuel__limits-year"/>
                        <input type='number' id='yearPaintworkSolvent647VP' placeholder={inputNumber} className="fuel__limits-year"/>
                    </div>
                    <div className="d-grid d-grid__temp-rows-3fr">
                        <input type='number' id='yearWeldingAWSE7015VP' placeholder={inputNumber} className="fuel__limits-year "/>
                        <input type='number' id='yearFillerWireVP' placeholder={inputNumber} className="fuel__limits-year "/>
                        <input type='number'  id='yearWeldingAWSER70S6VP' placeholder={inputNumber} className="fuel__limits-year "/>
                    </div>
                    <input type='number' id='yearGasCuttingMetal' placeholder={inputNumber} className="fuel__limits-year "/>
                </div>
            </div>
        </div>
    );
};

export default FuelFormYearField;
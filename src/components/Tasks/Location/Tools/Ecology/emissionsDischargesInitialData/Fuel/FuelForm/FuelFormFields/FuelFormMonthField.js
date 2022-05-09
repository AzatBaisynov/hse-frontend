import React from 'react';

const FuelFormSecondYearField = () => {
    // Month Fields (Form section)
    const inputNumber = 'Введите число'
    return (
        <div>
            <div className="fuel__limits_secondYear-input">
                <input type='number' id='monthRollsGPAOne' placeholder={inputNumber} className="fuel__limits-month fuel_height-40"/>
                <input type='number' id='monthRollsGPATwo'  placeholder={inputNumber} className="fuel__limits-month fuel_height-40"/>
                <input type='number' id='monthRollsGPAThree' placeholder={inputNumber} className="fuel__limits-month fuel_height-40"/>
                <input type='number' id='monthRollsGPAFour' placeholder={inputNumber} className="fuel__limits-month fuel_height-40"/>
                <div className="fuel_height-120 d-grid">
                    <input type='number' id='monthPowerStationOne' placeholder={inputNumber} className="fuel__limits-month"/>
                    <input type='number' id='monthPowerStationTwo' placeholder={inputNumber} className="fuel__limits-month"/>
                    <input type='number' id='monthPowerStationThree' placeholder={inputNumber} className="fuel__limits-month"/>
                </div>
                <input type='number' id='monthBoilerPipe' placeholder={inputNumber} className="fuel__limits-month fuel_height-40"/>
                <input type='number' id='monthDiningRoom' placeholder={inputNumber} className="fuel__limits-month fuel_height-40"/>
                <input type='number' id='monthDieselGenerator' placeholder={inputNumber} className="fuel__limits-month fuel_height-40"/>
                <input type='number' id='monthDieselPumping' placeholder={inputNumber} className="fuel__limits-month fuel_height-40"/>
                <input type='number' id='monthCandleMineralOilGPAOne' placeholder={inputNumber} className="fuel__limits-month fuel_height-40"/>
                <input type='number' id='monthCandleMineralOilGPATwo' placeholder={inputNumber} className="fuel__limits-month fuel_height-40"/>
                <input type='number' id='monthCandleMineralOilGPAThree' placeholder={inputNumber} className="fuel__limits-month fuel_height-40"/>
                <input type='number' id='monthCandleMineralOilGPAFour' placeholder={inputNumber} className="fuel__limits-month fuel_height-40"/>
                <input type='number' id='monthCandleSyntheticOilGPAOne' placeholder={inputNumber} className="fuel__limits-month fuel_height-40"/>
                <input type='number' id='monthCandleSyntheticOilGPATwo' placeholder={inputNumber} className="fuel__limits-month fuel_height-40"/>
                <input type='number' id='monthCandleSyntheticOilGPAThree' placeholder={inputNumber} className="fuel__limits-month fuel_height-40"/>
                <input type='number' id='monthCandleSyntheticOilGPAFour' placeholder={inputNumber} className="fuel__limits-month fuel_height-40"/>
                <div className="fuel_height-120 d-grid">
                    <input type='number' id='monthOilSeparatorCandleGPESOne' placeholder={inputNumber} className="fuel__limits-month "/>
                    <input type='number' id='monthOilSeparatorCandleGPESTwo' placeholder={inputNumber} className="fuel__limits-month "/>
                    <input type='number' id='monthOilSeparatorCandleGPESThree' placeholder={inputNumber} className="fuel__limits-month "/>
                </div>
                <div className="fuel_height-400 d-grid fuel__gild">
                    <div className="d-grid">
                        <input type='number' id='monthMineralOilChangeGPAOne' placeholder={inputNumber} className="fuel__limits-month"/>
                        <input type='number' id='monthSyntheticOilChangeGPAOne' placeholder={inputNumber} className="fuel__limits-month"/>
                    </div>
                    <div className="d-grid">
                        <input type='number' id='monthMineralOilChangeGPATwo' placeholder={inputNumber} className="fuel__limits-month"/>
                        <input type='number' id='monthSyntheticOilChangeGPATwo' placeholder={inputNumber} className="fuel__limits-month"/>
                    </div>
                    <div className="d-grid">
                        <input type='number' id='monthMineralOilChangeGPAThree' placeholder={inputNumber} className="fuel__limits-month"/>
                        <input type='number' id='monthSyntheticOilChangeGPAThree' placeholder={inputNumber} className="fuel__limits-month"/>
                    </div>
                    <div className="d-grid">
                        <input type='number' id='monthMineralOilChangeGPAFour' placeholder={inputNumber} className="fuel__limits-month"/>
                        <input type='number' id='monthSyntheticOilChangeGPAFour' placeholder={inputNumber} className="fuel__limits-month"/>
                    </div>
                    <input type='number' id='monthCondensateCollectorKS6' placeholder={inputNumber} className="fuel__limits-month"/>
                    <input type='number' id='monthDrainageCapacityGPA' placeholder={inputNumber} className="fuel__limits-month"/>
                </div>
                <div className="fuel_height-80 d-grid d-grid__temp-rows-2fr">
                    <input type='number' id='monthOilChangeGPESOneTwoThree' placeholder={inputNumber} className="fuel__limits-month"/>
                    <input type='number' id='monthConsumableCapacityDieselDPP' placeholder={inputNumber} className="fuel__limits-month"/>
                </div>
                <input type='number' id='monthTankDieselDNU' placeholder={inputNumber} className="fuel__limits-month fuel_height-40"/>
                <input type='number' id='monthAirCompressorSeparator' placeholder={inputNumber} className="fuel__limits-month fuel_height-40"/>
                <div className="fuel_height-240 d-grid fuel__kc-work">
                    <div className="d-grid d-grid__temp-rows-3fr">
                        <input type='number' id='monthWeldingAWSE7015KS' placeholder={inputNumber} className="fuel__limits-month"/>
                        <input type='number' id='monthFillerWireKS' placeholder={inputNumber} className="fuel__limits-month"/>
                        <input type='number' id='monthWeldingAWSER70S6KS' placeholder={inputNumber} className="fuel__limits-month"/>
                    </div>
                    <input type='number' id='monthMetalCutting' placeholder={inputNumber} className="fuel__limits-month"/>
                    <div className="d-grid">
                        <input type='number' id='monthPaintworkEnamelPF115KS' placeholder={inputNumber} className="fuel__limits-month"/>
                        <input type='number' id='monthPaintworkSolvent647KS' placeholder={inputNumber} className="fuel__limits-month"/>
                    </div>
                </div>
                <div className="fuel_height-400 d-grid fuel__azc">
                    <input type='number' id='monthReceivingTanksAI92' placeholder={inputNumber} className="fuel__limits-month "/>
                    <input type='number' id='monthReceivingTanksDieselFuel' placeholder={inputNumber} className="fuel__limits-month "/>
                    <input type='number' id='monthGasolineStationTRK' placeholder={inputNumber} className="fuel__limits-month "/>
                    <input type='number' id='monthDieselFuelTRK' placeholder={inputNumber} className="fuel__limits-month "/>
                    <div className="d-grid d-grid__temp-rows-2fr">
                        <input type='number' id='monthPaintworkEnamelPF115VP' placeholder={inputNumber} className="fuel__limits-month"/>
                        <input type='number' id='monthPaintworkSolvent647VP' placeholder={inputNumber} className="fuel__limits-month"/>
                    </div>
                    <div className="d-grid d-grid__temp-rows-3fr">
                        <input type='number' id='monthWeldingAWSE7015VP' placeholder={inputNumber} className="fuel__limits-month "/>
                        <input type='number' id='monthFillerWireVP' placeholder={inputNumber} className="fuel__limits-month "/>
                        <input type='number'  id='monthWeldingAWSER70S6VP' placeholder={inputNumber} className="fuel__limits-month "/>
                    </div>
                    <input type='number' id='monthGasCuttingMetal' placeholder={inputNumber} className="fuel__limits-month "/>
                </div>
            </div>
        </div>
    );
};

export default FuelFormSecondYearField;
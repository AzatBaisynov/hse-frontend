import React from 'react';

const FuelFormSecondYearField = () => {
    // SecondYear Fields (Form section)
    const inputNumber = 'Введите число'
    return (
        <div>
            <div className="fuel__limits_SecondYear-input">
                <input type='number' id='secondYearRollsGPAOne' placeholder={inputNumber} className="fuel__limits-secondYear fuel_height-40"/>
                <input type='number' id='secondYearRollsGPATwo'  placeholder={inputNumber} className="fuel__limits-secondYear fuel_height-40"/>
                <input type='number' id='secondYearRollsGPAThree' placeholder={inputNumber} className="fuel__limits-secondYear fuel_height-40"/>
                <input type='number' id='secondYearRollsGPAFour' placeholder={inputNumber} className="fuel__limits-secondYear fuel_height-40"/>
                <div className="fuel_height-120 d-grid">
                    <input type='number' id='secondYearPowerStationOne' placeholder={inputNumber} className="fuel__limits-secondYear"/>
                    <input type='number' id='secondYearPowerStationTwo' placeholder={inputNumber} className="fuel__limits-secondYear"/>
                    <input type='number' id='secondYearPowerStationThree' placeholder={inputNumber} className="fuel__limits-secondYear"/>
                </div>
                <input type='number' id='secondYearBoilerPipe' placeholder={inputNumber} className="fuel__limits-secondYear fuel_height-40"/>
                <input type='number' id='secondYearDiningRoom' placeholder={inputNumber} className="fuel__limits-secondYear fuel_height-40"/>
                <input type='number' id='secondYearDieselGenerator' placeholder={inputNumber} className="fuel__limits-secondYear fuel_height-40"/>
                <input type='number' id='secondYearDieselPumping' placeholder={inputNumber} className="fuel__limits-secondYear fuel_height-40"/>
                <input type='number' id='secondYearCandleMineralOilGPAOne' placeholder={inputNumber} className="fuel__limits-secondYear fuel_height-40"/>
                <input type='number' id='secondYearCandleMineralOilGPATwo' placeholder={inputNumber} className="fuel__limits-secondYear fuel_height-40"/>
                <input type='number' id='secondYearCandleMineralOilGPAThree' placeholder={inputNumber} className="fuel__limits-secondYear fuel_height-40"/>
                <input type='number' id='secondYearCandleMineralOilGPAFour' placeholder={inputNumber} className="fuel__limits-secondYear fuel_height-40"/>
                <input type='number' id='secondYearCandleSyntheticOilGPAOne' placeholder={inputNumber} className="fuel__limits-secondYear fuel_height-40"/>
                <input type='number' id='secondYearCandleSyntheticOilGPATwo' placeholder={inputNumber} className="fuel__limits-secondYear fuel_height-40"/>
                <input type='number' id='secondYearCandleSyntheticOilGPAThree' placeholder={inputNumber} className="fuel__limits-secondYear fuel_height-40"/>
                <input type='number' id='secondYearCandleSyntheticOilGPAFour' placeholder={inputNumber} className="fuel__limits-secondYear fuel_height-40"/>
                <div className="fuel_height-120 d-grid">
                    <input type='number' id='secondYearOilSeparatorCandleGPESOne' placeholder={inputNumber} className="fuel__limits-secondYear "/>
                    <input type='number' id='secondYearOilSeparatorCandleGPESTwo' placeholder={inputNumber} className="fuel__limits-secondYear "/>
                    <input type='number' id='secondYearOilSeparatorCandleGPESThree' placeholder={inputNumber} className="fuel__limits-secondYear "/>
                </div>
                <div className="fuel_height-400 d-grid fuel__gild">
                    <div className="d-grid">
                        <input type='number' id='secondYearMineralOilChangeGPAOne' placeholder={inputNumber} className="fuel__limits-secondYear"/>
                        <input type='number' id='secondYearSyntheticOilChangeGPAOne' placeholder={inputNumber} className="fuel__limits-secondYear"/>
                    </div>
                    <div className="d-grid">
                        <input type='number' id='secondYearMineralOilChangeGPATwo' placeholder={inputNumber} className="fuel__limits-secondYear"/>
                        <input type='number' id='secondYearSyntheticOilChangeGPATwo' placeholder={inputNumber} className="fuel__limits-secondYear"/>
                    </div>
                    <div className="d-grid">
                        <input type='number' id='secondYearMineralOilChangeGPAThree' placeholder={inputNumber} className="fuel__limits-secondYear"/>
                        <input type='number' id='secondYearSyntheticOilChangeGPAThree' placeholder={inputNumber} className="fuel__limits-secondYear"/>
                    </div>
                    <div className="d-grid">
                        <input type='number' id='secondYearMineralOilChangeGPAFour' placeholder={inputNumber} className="fuel__limits-secondYear"/>
                        <input type='number' id='secondYearSyntheticOilChangeGPAFour' placeholder={inputNumber} className="fuel__limits-secondYear"/>
                    </div>
                    <input type='number' id='secondYearCondensateCollectorKS6' placeholder={inputNumber} className="fuel__limits-secondYear"/>
                    <input type='number' id='secondYearDrainageCapacityGPA' placeholder={inputNumber} className="fuel__limits-secondYear"/>
                </div>
                <div className="fuel_height-80 d-grid d-grid__temp-rows-2fr">
                    <input type='number' id='secondYearOilChangeGPESOneTwoThree' placeholder={inputNumber} className="fuel__limits-secondYear"/>
                    <input type='number' id='secondYearConsumableCapacityDieselDPP' placeholder={inputNumber} className="fuel__limits-secondYear"/>
                </div>
                <input type='number' id='secondYearTankDieselDNU' placeholder={inputNumber} className="fuel__limits-secondYear fuel_height-40"/>
                <input type='number' id='secondYearAirCompressorSeparator' placeholder={inputNumber} className="fuel__limits-secondYear fuel_height-40"/>
                <div className="fuel_height-240 d-grid fuel__kc-work">
                    <div className="d-grid d-grid__temp-rows-3fr">
                        <input type='number' id='secondYearWeldingAWSE7015KS' placeholder={inputNumber} className="fuel__limits-secondYear"/>
                        <input type='number' id='secondYearFillerWireKS' placeholder={inputNumber} className="fuel__limits-secondYear"/>
                        <input type='number' id='secondYearWeldingAWSER70S6KS' placeholder={inputNumber} className="fuel__limits-secondYear"/>
                    </div>
                    <input type='number' id='secondYearMetalCutting' placeholder={inputNumber} className="fuel__limits-secondYear"/>
                    <div className="d-grid">
                        <input type='number' id='secondYearPaintworkEnamelPF115KS' placeholder={inputNumber} className="fuel__limits-secondYear"/>
                        <input type='number' id='secondYearPaintworkSolvent647KS' placeholder={inputNumber} className="fuel__limits-secondYear"/>
                    </div>
                </div>
                <div className="fuel_height-400 d-grid fuel__azc">
                    <input type='number' id='secondYearReceivingTanksAI92' placeholder={inputNumber} className="fuel__limits-secondYear "/>
                    <input type='number' id='secondYearReceivingTanksDieselFuel' placeholder={inputNumber} className="fuel__limits-secondYear "/>
                    <input type='number' id='secondYearGasolineStationTRK' placeholder={inputNumber} className="fuel__limits-secondYear "/>
                    <input type='number' id='secondYearDieselFuelTRK' placeholder={inputNumber} className="fuel__limits-secondYear "/>
                    <div className="d-grid d-grid__temp-rows-2fr">
                        <input type='number' id='secondYearPaintworkEnamelPF115VP' placeholder={inputNumber} className="fuel__limits-secondYear"/>
                        <input type='number' id='secondYearPaintworkSolvent647VP' placeholder={inputNumber} className="fuel__limits-secondYear"/>
                    </div>
                    <div className="d-grid d-grid__temp-rows-3fr">
                        <input type='number' id='secondYearWeldingAWSE7015VP' placeholder={inputNumber} className="fuel__limits-secondYear "/>
                        <input type='number' id='secondYearFillerWireVP' placeholder={inputNumber} className="fuel__limits-secondYear "/>
                        <input type='number'  id='secondYearWeldingAWSER70S6VP' placeholder={inputNumber} className="fuel__limits-secondYear "/>
                    </div>
                    <input type='number' id='secondYearGasCuttingMetal' placeholder={inputNumber} className="fuel__limits-secondYear "/>
                </div>
            </div>
        </div>
    );
};

export default FuelFormSecondYearField;
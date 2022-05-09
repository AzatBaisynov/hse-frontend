import React from 'react';

const FuelFormCubeField = ({handleChange}) => {
    // Cube Fields (Form section)
    const inputNumber = 'Введите число'
    return (
        <div>
            <div className="fuel__limits_m3-input">
                <input onInput={handleChange} type='number' id='cubeRollsGPAOne' placeholder={inputNumber} className="fuel__limits-cube fuel_height-40"/>
                <input onInput={handleChange} type='number' id='cubeRollsGPATwo'  placeholder={inputNumber} className="fuel__limits-cube fuel_height-40"/>
                <input onInput={handleChange} type='number' id='cubeRollsGPAThree' placeholder={inputNumber} className="fuel__limits-cube fuel_height-40"/>
                <input onInput={handleChange} type='number' id='cubeRollsGPAFour' placeholder={inputNumber} className="fuel__limits-cube fuel_height-40"/>
                <div className="fuel_height-120 d-grid">
                    <input onInput={handleChange} type='number' id='cubePowerStationOne' placeholder={inputNumber} className="fuel__limits-cube"/>
                    <input onInput={handleChange} type='number' id='cubePowerStationTwo' placeholder={inputNumber} className="fuel__limits-cube"/>
                    <input onInput={handleChange} type='number' id='cubePowerStationThree' placeholder={inputNumber} className="fuel__limits-cube"/>
                </div>
                <input onInput={handleChange} type='number' id='cubeBoilerPipe' placeholder={inputNumber} className="fuel__limits-cube fuel_height-40"/>
                <input onInput={handleChange} type='number' id='cubeDiningRoom' placeholder={inputNumber} className="fuel__limits-cube fuel_height-40"/>
                <input onInput={handleChange} type='number' id='cubeDieselGenerator' placeholder={inputNumber} className="fuel__limits-cube fuel_height-40"/>
                <input onInput={handleChange} type='number' id='cubeDieselPumping' placeholder={inputNumber} className="fuel__limits-cube fuel_height-40"/>
                <input onInput={handleChange} type='number' id='cubeCandleMineralOilGPAOne' placeholder={inputNumber} className="fuel__limits-cube fuel_height-40"/>
                <input onInput={handleChange} type='number' id='cubeCandleMineralOilGPATwo' placeholder={inputNumber} className="fuel__limits-cube fuel_height-40"/>
                <input onInput={handleChange} type='number' id='cubeCandleMineralOilGPAThree' placeholder={inputNumber} className="fuel__limits-cube fuel_height-40"/>
                <input onInput={handleChange} type='number' id='cubeCandleMineralOilGPAFour' placeholder={inputNumber} className="fuel__limits-cube fuel_height-40"/>
                <input onInput={handleChange} type='number' id='cubeCandleSyntheticOilGPAOne' placeholder={inputNumber} className="fuel__limits-cube fuel_height-40"/>
                <input onInput={handleChange} type='number' id='cubeCandleSyntheticOilGPATwo' placeholder={inputNumber} className="fuel__limits-cube fuel_height-40"/>
                <input onInput={handleChange} type='number' id='cubeCandleSyntheticOilGPAThree' placeholder={inputNumber} className="fuel__limits-cube fuel_height-40"/>
                <input onInput={handleChange} type='number' id='cubeCandleSyntheticOilGPAFour' placeholder={inputNumber} className="fuel__limits-cube fuel_height-40"/>
                <div className="fuel_height-120 d-grid">
                    <input onInput={handleChange} type='number' id='cubeOilSeparatorCandleGPESOne' placeholder={inputNumber} className="fuel__limits-cube "/>
                    <input onInput={handleChange} type='number' id='cubeOilSeparatorCandleGPESTwo' placeholder={inputNumber} className="fuel__limits-cube "/>
                    <input onInput={handleChange} type='number' id='cubeOilSeparatorCandleGPESThree' placeholder={inputNumber} className="fuel__limits-cube "/>
                </div>
                <div className="fuel_height-400 d-grid fuel__gild">
                    <div className="d-grid">
                        <input onInput={handleChange} type='number' id='cubeMineralOilChangeGPAOne' placeholder={inputNumber} className="fuel__limits-cube"/>
                        <input onInput={handleChange} type='number' id='cubeSyntheticOilChangeGPAOne' placeholder={inputNumber} className="fuel__limits-cube"/>
                    </div>
                    <div className="d-grid">
                        <input onInput={handleChange} type='number' id='cubeMineralOilChangeGPATwo' placeholder={inputNumber} className="fuel__limits-cube"/>
                        <input onInput={handleChange} type='number' id='cubeSyntheticOilChangeGPATwo' placeholder={inputNumber} className="fuel__limits-cube"/>
                    </div>
                    <div className="d-grid">
                        <input onInput={handleChange} type='number' id='cubeMineralOilChangeGPAThree' placeholder={inputNumber} className="fuel__limits-cube"/>
                        <input onInput={handleChange} type='number' id='cubeSyntheticOilChangeGPAThree' placeholder={inputNumber} className="fuel__limits-cube"/>
                    </div>
                    <div className="d-grid">
                        <input onInput={handleChange} type='number' id='cubeMineralOilChangeGPAFour' placeholder={inputNumber} className="fuel__limits-cube"/>
                        <input onInput={handleChange} type='number' id='cubeSyntheticOilChangeGPAFour' placeholder={inputNumber} className="fuel__limits-cube"/>
                    </div>
                    <input onInput={handleChange} type='number' id='cubeCondensateCollectorKS6' placeholder={inputNumber} className="fuel__limits-cube"/>
                    <input onInput={handleChange} type='number' id='cubeDrainageCapacityGPA' placeholder={inputNumber} className="fuel__limits-cube"/>
                </div>
                <div className="fuel_height-80 d-grid d-grid__temp-rows-2fr">
                    <input onInput={handleChange} type='number' id='cubeOilChangeGPESOneTwoThree' placeholder={inputNumber} className="fuel__limits-cube"/>
                    <input onInput={handleChange} type='number' id='cubeConsumableCapacityDieselDPP' placeholder={inputNumber} className="fuel__limits-cube"/>
                </div>
                <input onInput={handleChange} type='number' id='cubeTankDieselDNU' placeholder={inputNumber} className="fuel__limits-cube fuel_height-40"/>
                <input onInput={handleChange} type='number' id='cubeAirCompressorSeparator' placeholder={inputNumber} className="fuel__limits-cube fuel_height-40"/>
                <div className="fuel_height-240 d-grid fuel__kc-work">
                    <div className="d-grid d-grid__temp-rows-3fr">
                        <input onInput={handleChange} type='number' id='cubeWeldingAWSE7015KS' placeholder={inputNumber} className="fuel__limits-cube"/>
                        <input onInput={handleChange} type='number' id='cubeFillerWireKS' placeholder={inputNumber} className="fuel__limits-cube"/>
                        <input onInput={handleChange} type='number' id='cubeWeldingAWSER70S6KS' placeholder={inputNumber} className="fuel__limits-cube"/>
                    </div>
                    <input onInput={handleChange} type='number' id='cubeMetalCutting' placeholder={inputNumber} className="fuel__limits-cube"/>
                    <div className="d-grid">
                        <input onInput={handleChange} type='number' id='cubePaintworkEnamelPF115KS' placeholder={inputNumber} className="fuel__limits-cube"/>
                        <input onInput={handleChange} type='number' id='cubePaintworkSolvent647KS' placeholder={inputNumber} className="fuel__limits-cube"/>
                    </div>
                </div>
                <div className="fuel_height-400 d-grid fuel__azc">
                    <input onInput={handleChange} type='number' id='cubeReceivingTanksAI92' placeholder={inputNumber} className="fuel__limits-cube "/>
                    <input onInput={handleChange} type='number' id='cubeReceivingTanksDieselFuel' placeholder={inputNumber} className="fuel__limits-cube "/>
                    <input onInput={handleChange} type='number' id='cubeGasolineStationTRK' placeholder={inputNumber} className="fuel__limits-cube "/>
                    <input onInput={handleChange} type='number' id='cubeDieselFuelTRK' placeholder={inputNumber} className="fuel__limits-cube "/>
                    <div className="d-grid d-grid__temp-rows-2fr">
                        <input onInput={handleChange} type='number' id='cubePaintworkEnamelPF115VP' placeholder={inputNumber} className="fuel__limits-cube"/>
                        <input onInput={handleChange} type='number' id='cubePaintworkSolvent647VP' placeholder={inputNumber} className="fuel__limits-cube"/>
                    </div>
                    <div className="d-grid d-grid__temp-rows-3fr">
                        <input onInput={handleChange} type='number' id='cubeWeldingAWSE7015VP' placeholder={inputNumber} className="fuel__limits-cube "/>
                        <input onInput={handleChange} type='number' id='cubeFillerWireVP' placeholder={inputNumber} className="fuel__limits-cube "/>
                        <input onInput={handleChange} type='number'  id='cubeWeldingAWSER70S6VP' placeholder={inputNumber} className="fuel__limits-cube "/>
                    </div>
                    <input onInput={handleChange} type='number' id='cubeGasCuttingMetal' placeholder={inputNumber} className="fuel__limits-cube "/>
                </div>
            </div>
        </div>
    );
};

export default FuelFormCubeField;
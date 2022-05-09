import React from 'react';

const FuelFormKgField = () => {
    // kg Fields (Form section)
    const inputNumber = 'Введите число'
    return (
        <div>
            <div className="fuel__limits_kg-input">
                <input type='number' id='kgRollsGPAOne' placeholder={inputNumber} className="fuel__limits-kg fuel_height-40"/>
                <input type='number' id='kgRollsGPATwo'  placeholder={inputNumber} className="fuel__limits-kg fuel_height-40"/>
                <input type='number' id='kgRollsGPAThree' placeholder={inputNumber} className="fuel__limits-kg fuel_height-40"/>
                <input type='number' id='kgRollsGPAFour' placeholder={inputNumber} className="fuel__limits-kg fuel_height-40"/>
                <div className="fuel_height-120 d-grid">
                    <input type='number' id='kgPowerStationOne' placeholder={inputNumber} className="fuel__limits-kg"/>
                    <input type='number' id='kgPowerStationTwo' placeholder={inputNumber} className="fuel__limits-kg"/>
                    <input type='number' id='kgPowerStationThree' placeholder={inputNumber} className="fuel__limits-kg"/>
                </div>
                <input type='number' id='kgBoilerPipe' placeholder={inputNumber} className="fuel__limits-kg fuel_height-40"/>
                <input type='number' id='kgDiningRoom' placeholder={inputNumber} className="fuel__limits-kg fuel_height-40"/>
                <input type='number' id='kgDieselGenerator' placeholder={inputNumber} className="fuel__limits-kg fuel_height-40"/>
                <input type='number' id='kgDieselPumping' placeholder={inputNumber} className="fuel__limits-kg fuel_height-40"/>
                <input type='number' id='kgCandleMineralOilGPAOne' placeholder={inputNumber} className="fuel__limits-kg fuel_height-40"/>
                <input type='number' id='kgCandleMineralOilGPATwo' placeholder={inputNumber} className="fuel__limits-kg fuel_height-40"/>
                <input type='number' id='kgCandleMineralOilGPAThree' placeholder={inputNumber} className="fuel__limits-kg fuel_height-40"/>
                <input type='number' id='kgCandleMineralOilGPAFour' placeholder={inputNumber} className="fuel__limits-kg fuel_height-40"/>
                <input type='number' id='kgCandleSyntheticOilGPAOne' placeholder={inputNumber} className="fuel__limits-kg fuel_height-40"/>
                <input type='number' id='kgCandleSyntheticOilGPATwo' placeholder={inputNumber} className="fuel__limits-kg fuel_height-40"/>
                <input type='number' id='kgCandleSyntheticOilGPAThree' placeholder={inputNumber} className="fuel__limits-kg fuel_height-40"/>
                <input type='number' id='kgCandleSyntheticOilGPAFour' placeholder={inputNumber} className="fuel__limits-kg fuel_height-40"/>
                <div className="fuel_height-120 d-grid">
                    <input type='number' id='kgOilSeparatorCandleGPESOne' placeholder={inputNumber} className="fuel__limits-kg "/>
                    <input type='number' id='kgOilSeparatorCandleGPESTwo' placeholder={inputNumber} className="fuel__limits-kg "/>
                    <input type='number' id='kgOilSeparatorCandleGPESThree' placeholder={inputNumber} className="fuel__limits-kg "/>
                </div>
                <div className="fuel_height-400 d-grid fuel__gild">
                    <div className="d-grid">
                        <input type='number' id='kgMineralOilChangeGPAOne' placeholder={inputNumber} className="fuel__limits-kg"/>
                        <input type='number' id='kgSyntheticOilChangeGPAOne' placeholder={inputNumber} className="fuel__limits-kg"/>
                    </div>
                    <div className="d-grid">
                        <input type='number' id='kgMineralOilChangeGPATwo' placeholder={inputNumber} className="fuel__limits-kg"/>
                        <input type='number' id='kgSyntheticOilChangeGPATwo' placeholder={inputNumber} className="fuel__limits-kg"/>
                    </div>
                    <div className="d-grid">
                        <input type='number' id='kgMineralOilChangeGPAThree' placeholder={inputNumber} className="fuel__limits-kg"/>
                        <input type='number' id='kgSyntheticOilChangeGPAThree' placeholder={inputNumber} className="fuel__limits-kg"/>
                    </div>
                    <div className="d-grid">
                        <input type='number' id='kgMineralOilChangeGPAFour' placeholder={inputNumber} className="fuel__limits-kg"/>
                        <input type='number' id='kgSyntheticOilChangeGPAFour' placeholder={inputNumber} className="fuel__limits-kg"/>
                    </div>
                    <input type='number' id='kgCondensateCollectorKS6' placeholder={inputNumber} className="fuel__limits-kg"/>
                    <input type='number' id='kgDrainageCapacityGPA' placeholder={inputNumber} className="fuel__limits-kg"/>
                </div>
                <div className="fuel_height-80 d-grid d-grid__temp-rows-2fr">
                    <input type='number' id='kgOilChangeGPESOneTwoThree' placeholder={inputNumber} className="fuel__limits-kg"/>
                    <input type='number' id='kgConsumableCapacityDieselDPP' placeholder={inputNumber} className="fuel__limits-kg"/>
                </div>
                <input type='number' id='kgTankDieselDNU' placeholder={inputNumber} className="fuel__limits-kg fuel_height-40"/>
                <input type='number' id='kgAirCompressorSeparator' placeholder={inputNumber} className="fuel__limits-kg fuel_height-40"/>
                <div className="fuel_height-240 d-grid fuel__kc-work">
                    <div className="d-grid d-grid__temp-rows-3fr">
                        <input type='number' id='kgWeldingAWSE7015KS' placeholder={inputNumber} className="fuel__limits-kg"/>
                        <input type='number' id='kgFillerWireKS' placeholder={inputNumber} className="fuel__limits-kg"/>
                        <input type='number' id='kgWeldingAWSER70S6KS' placeholder={inputNumber} className="fuel__limits-kg"/>
                    </div>
                    <input type='number' id='kgMetalCutting' placeholder={inputNumber} className="fuel__limits-kg"/>
                    <div className="d-grid">
                        <input type='number' id='kgPaintworkEnamelPF115KS' placeholder={inputNumber} className="fuel__limits-kg"/>
                        <input type='number' id='kgPaintworkSolvent647KS' placeholder={inputNumber} className="fuel__limits-kg"/>
                    </div>
                </div>
                <div className="fuel_height-400 d-grid fuel__azc">
                    <input type='number' id='kgReceivingTanksAI92' placeholder={inputNumber} className="fuel__limits-kg "/>
                    <input type='number' id='kgReceivingTanksDieselFuel' placeholder={inputNumber} className="fuel__limits-kg "/>
                    <input type='number' id='kgGasolineStationTRK' placeholder={inputNumber} className="fuel__limits-kg "/>
                    <input type='number' id='kgDieselFuelTRK' placeholder={inputNumber} className="fuel__limits-kg "/>
                    <div className="d-grid d-grid__temp-rows-2fr">
                        <input type='number' id='kgPaintworkEnamelPF115VP' placeholder={inputNumber} className="fuel__limits-kg"/>
                        <input type='number' id='kgPaintworkSolvent647VP' placeholder={inputNumber} className="fuel__limits-kg"/>
                    </div>
                    <div className="d-grid d-grid__temp-rows-3fr">
                        <input type='number' id='kgWeldingAWSE7015VP' placeholder={inputNumber} className="fuel__limits-kg "/>
                        <input type='number' id='kgFillerWireVP' placeholder={inputNumber} className="fuel__limits-kg "/>
                        <input type='number'  id='kgWeldingAWSER70S6VP' placeholder={inputNumber} className="fuel__limits-kg "/>
                    </div>
                    <input type='number' id='kgGasCuttingMetal' placeholder={inputNumber} className="fuel__limits-kg "/>
                </div>
            </div>
        </div>
    );
};

export default FuelFormKgField;
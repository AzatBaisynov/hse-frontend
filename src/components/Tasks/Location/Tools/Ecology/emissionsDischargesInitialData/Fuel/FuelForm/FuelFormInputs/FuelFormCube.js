import React, {useState} from 'react';
import FuelFormCubeField from "../FuelFormFields/FuelFormCubeField";
import {logOut} from "../../../../../../../../../store/actionCreators/auth";

const FuelFormCube = () => {
    const [cube, setCube] = useState({})
    const handleChange = (e) =>{
        const id = e.target.id
        const value = e.target.value

        switch (id){
            case 'cubeRollsGPAOne':
                setCube({...cube, cubeRollsGPAOne: value})
                break
            case 'cubeRollsGPATwo':
                setCube({...cube, cubeRollsGPATwo: value})
                break
            case 'cubeRollsGPAThree':
                setCube({...cube, cubeRollsGPAThree: value})
                break
            case 'cubeRollsGPAFour':
                setCube({...cube, cubeRollsGPAFour: value})
                break
            case 'cubePowerStationOne':
                setCube({...cube, cubePowerStationOne: value})
                break
            case 'cubePowerStationTwo':
                setCube({...cube, cubePowerStationTwo: value})
                break
            case 'cubePowerStationThree':
                setCube({...cube, cubePowerStationThree: value})
                break
            case 'cubeBoilerPipe':
                setCube({...cube, cubeBoilerPipe: value})
                break
            case 'cubeDiningRoom':
                setCube({...cube, cubeDiningRoom: value})
                break
            case 'cubeDieselGenerator':
                setCube({...cube, cubeDieselGenerator: value})
                break
            case 'cubeDieselPumping':
                setCube({...cube, cubeDieselPumping: value})
                break
            case 'cubeCandleMineralOilGPAOne':
                setCube({...cube, cubeCandleMineralOilGPAOne: value})
                break
            case 'cubeCandleMineralOilGPATwo':
                setCube({...cube, cubeCandleMineralOilGPATwo: value})
                break
            case 'cubeCandleMineralOilGPAThree':
                setCube({...cube, cubeCandleMineralOilGPAThree: value})
                break
            case 'cubeCandleMineralOilGPAFour':
                setCube({...cube, cubeCandleMineralOilGPAFour: value})
                break
            case 'cubeCandleSyntheticOilGPAOne':
                setCube({...cube, cubeCandleSyntheticOilGPAOne: value})
                break
            case 'cubeCandleSyntheticOilGPATwo':
                setCube({...cube, cubeCandleSyntheticOilGPATwo: value})
                break
            case 'cubeCandleSyntheticOilGPAThree':
                setCube({...cube, cubeCandleSyntheticOilGPAThree: value})
                break
            case 'cubeCandleSyntheticOilGPAFour':
                setCube({...cube, cubeCandleSyntheticOilGPAFour: value})
                break
            case 'cubeOilSeparatorCandleGPESOne':
                setCube({...cube, cubeOilSeparatorCandleGPESOne: value})
                break
            case 'cubeOilSeparatorCandleGPESTwo':
                setCube({...cube, cubeOilSeparatorCandleGPESTwo: value})
                break
            case 'cubeOilSeparatorCandleGPESThree':
                setCube({...cube, cubeOilSeparatorCandleGPESThree: value})
                break
            case 'cubeMineralOilChangeGPAOne':
                setCube({...cube, cubeMineralOilChangeGPAOne: value})
                break
            case 'cubeSyntheticOilChangeGPAOne':
                setCube({...cube, cubeSyntheticOilChangeGPAOne: value})
                break
            case 'cubeMineralOilChangeGPATwo':
                setCube({...cube, cubeMineralOilChangeGPATwo: value})
                break
            case 'cubeSyntheticOilChangeGPATwo':
                setCube({...cube, cubeSyntheticOilChangeGPATwo: value})
                break
            case 'cubeMineralOilChangeGPAThree':
                setCube({...cube, cubeMineralOilChangeGPAThree: value})
                break
            case 'cubeSyntheticOilChangeGPAThree':
                setCube({...cube, cubeSyntheticOilChangeGPAThree: value})
                break
            case 'cubeMineralOilChangeGPAFour':
                setCube({...cube, cubeMineralOilChangeGPAFour: value})
                break
            case 'cubeSyntheticOilChangeGPAFour':
                setCube({...cube, cubeSyntheticOilChangeGPAFour: value})
                break
            case 'cubeCondensateCollectorKS6':
                setCube({...cube, cubeCondensateCollectorKS6: value})
                break
            case 'cubeDrainageCapacityGPA':
                setCube({...cube, cubeDrainageCapacityGPA: value})
                break
            case 'cubeOilChangeGPESOneTwoThree':
                setCube({...cube, cubeOilChangeGPESOneTwoThree: value})
                break
            case 'cubeConsumableCapacityDieselDPP':
                setCube({...cube, cubeConsumableCapacityDieselDPP: value})
                break
            case 'cubeTankDieselDNU':
                setCube({...cube, cubeTankDieselDNU: value})
                break
            case 'cubeAirCompressorSeparator':
                setCube({...cube, cubeAirCompressorSeparator: value})
                break
            case 'cubeWeldingAWSE7015KS':
                setCube({...cube, cubeWeldingAWSE7015KS: value})
                break
            case 'cubeFillerWireKS':
                setCube({...cube, cubeFillerWireKS: value})
                break
            case 'cubeWeldingAWSER70S6KS':
                setCube({...cube, cubeWeldingAWSER70S6KS: value})
                break
            case 'cubeMetalCutting':
                setCube({...cube, cubeMetalCutting: value})
                break
            case 'cubePaintworkEnamelPF115KS':
                setCube({...cube, cubePaintworkEnamelPF115KS: value})
                break
            case 'cubePaintworkSolvent647KS':
                setCube({...cube, cubePaintworkSolvent647KS: value})
                break
            case 'cubeReceivingTanksAI92':
                setCube({...cube, cubeReceivingTanksAI92: value})
                break
            case 'cubeReceivingTanksDieselFuel':
                setCube({...cube, cubeReceivingTanksDieselFuel: value})
                break
            case 'cubeGasolineStationTRK':
                setCube({...cube, cubeGasolineStationTRK: value})
                break
            case 'cubeDieselFuelTRK':
                setCube({...cube, cubeDieselFuelTRK: value})
                break
            case 'cubePaintworkEnamelPF115VP':
                setCube({...cube, cubePaintworkEnamelPF115VP: value})
                break
            case 'cubePaintworkSolvent647VP':
                setCube({...cube, cubePaintworkSolvent647VP: value})
                break
            case 'cubeWeldingAWSE7015VP':
                setCube({...cube, cubeWeldingAWSE7015VP: value})
                break
            case 'cubeFillerWireVP':
                setCube({...cube, cubeFillerWireVP: value})
                break
            case 'cubeWeldingAWSER70S6VP':
                setCube({...cube, cubeWeldingAWSER70S6VP: value})
                break
            case 'cubeGasCuttingMetal':
                setCube({...cube, cubeGasCuttingMetal: value})
                break
        }
    }

    let count = 0;
    Object.values(cube).forEach((el) => {
        count = count + Number(el)
        console.log(count)
    })

    return (
        <div>
           <FuelFormCubeField handleChange={handleChange}/>
        </div>
    );
};

export default FuelFormCube;
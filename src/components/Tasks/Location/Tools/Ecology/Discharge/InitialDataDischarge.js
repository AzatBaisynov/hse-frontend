import React from 'react';
import EmissionsDischargesInitialData from "./DischargeData/EmissionsDischargesInitialData";
import MenuEmissionsDischargesInitialData from "./MenuEmissionsDischargesInitialData";
import DischargeForm from "./DischargeData/DischargeForm";
import QuarterReport from "./DischargeData/QuarterReport";
import YearReport from "./DischargeData/YearReport";

const InitialDataDischarge = () => {
    const dischargeData = [
        {
            action_link: '/',
            action_title: 'Лимиты',
            action: EmissionsDischargesInitialData
        },
        {
            action_link: '/DischargeForm',
            action_title: 'Форма заполнения(месячный)',
            action: DischargeForm
        },
        {
            action_link: '/QuarterReport',
            action_title: 'Квартальный отчет',
            action: QuarterReport
        },
        {
            action_link: '/YearReport',
            action_title: 'Годовой отчет',
            action: YearReport
        }
    ]
    return (
        <div>
            <div className="container">
                <MenuEmissionsDischargesInitialData actions={dischargeData} />
            </div>
        </div>
    );
};

export default InitialDataDischarge;
import React from 'react';
import EmissionsDischargesInitialData from "./DischargeData/EmissionsDischargesInitialData";
import MenuEmissionsDischargesInitialData from "./MenuEmissionsDischargesInitialData";
import DischargeForm from "./DischargeData/dischargeForm/DischargeForm";
import QuarterReport from "./DischargeData/quarterReport/QuarterReport";
import YearReport from "./DischargeData/yearReport/YearReport";

const InitialDataDischarge = () => {
    // get components and links
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
            action_link: '/quarterReport',
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
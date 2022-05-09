import React from 'react';

const FuelLimitsSource = () => {
    //Name of pollutant emission source (Fuel Limits section)
    return (
        <div>
            <div className="fuel__name-source-selection">
                <h2 className="fuel__title-value">Наименование источника выделения загрязняющих веществ</h2>
                <p className="fuel__sub-value fuel_height-40">Выхлопная труба ГПА №1 Роллс-Ройс, RB 211-DLE 24G</p>
                <p className="fuel__sub-value fuel_height-40">Выхлопная труба ГПА №2 Роллс-Ройс, RB 211-DLE 24G</p>
                <p className="fuel__sub-value fuel_height-40">Выхлопная труба ГПА №3 Роллс-Ройс, RB 211-DLE 24G</p>
                <p className="fuel__sub-value fuel_height-40">Выхлопная труба ГПА №4 Роллс-Ройс, RB 211-DLE 24G</p>
                <div className="fuel_height-120 d-grid">
                    <p className="fuel__sub-value">Выхлопная труба газопоршневой электростанций №1</p>
                    <p className="fuel__sub-value">Выхлопная труба газопоршневой электростанций №2  Caterpillar G3516C</p>
                    <p className="fuel__sub-value">Выхлопная труба газопоршневой электростанций №3  Caterpillar G3516C</p>
                </div>
                <p className="fuel__sub-value fuel_height-40">Выхлопная труба котла WNSO.7-0.8/95/70-Q</p>
                <p className="fuel__sub-value fuel_height-40">Столовая -Газовая плита</p>
                <p className="fuel__sub-value fuel_height-40">Выхлопная труба дизель-генератора Caterpiller C15</p>
                <p className="fuel__sub-value fuel_height-40"> Выхлопная труба дизельной насосной станции (ДНУ) CLARKE JU4H-UF22</p>
                <p className="fuel__sub-value fuel_height-40">Свеча маслоуловителя минерального масла ГПА №1 (Безвозвратные потери масла)</p>
                <p className="fuel__sub-value fuel_height-40">Свеча маслоуловителя минерального масла ГПА №2 (Безвозвратные потери масла)</p>
                <p className="fuel__sub-value fuel_height-40">Свеча маслоуловителя минерального масла ГПА №3 (Безвозвратные потери масла)</p>
                <p className="fuel__sub-value fuel_height-40">Свеча маслоуловителя минерального масла ГПА №4 (Безвозвратные потери масла)</p>
                <p className="fuel__sub-value fuel_height-40">Свеча маслоуловителя синтетического масла ГПА №1 (Безвозвратные потери масла)</p>
                <p className="fuel__sub-value fuel_height-40">Свеча маслоуловителя синтетического масла ГПА №2 (Безвозвратные потери масла)</p>
                <p className="fuel__sub-value fuel_height-40">Свеча маслоуловителя синтетического масла ГПА №3 (Безвозвратные потери масла)</p>
                <p className="fuel__sub-value fuel_height-40">Свеча маслоуловителя синтетического масла ГПА №4 (Безвозвратные потери масла)</p>
                <div className="fuel_height-120 d-grid">
                    <p className="fuel__sub-value text-align_center">Свеча сепаратора паров масла ГПЭС №1</p>
                    <p className="fuel__sub-value text-align_center">Свеча сепаратора паров масла ГПЭС №2</p>
                    <p className="fuel__sub-value text-align_center">Свеча сепаратора паров масла ГПЭС №3</p>
                </div>
                <div className="fuel_height-400 d-grid fuel__gild">
                    <div className="d-grid">
                        <p className="fuel__sub-value">Замена минерального масла ГПА №1</p>
                        <p className="fuel__sub-value">Замена синтетического масла ГПА №1</p>
                    </div>
                    <div className="d-grid">
                        <p className="fuel__sub-value">Замена минерального масла ГПА №2</p>
                        <p className="fuel__sub-value">Замена синтетического масла ГПА №2</p>
                    </div>
                    <div className="d-grid">
                        <p className="fuel__sub-value">Замена минерального масла ГПА №3</p>
                        <p className="fuel__sub-value">Замена синтетического масла ГПА №3</p>
                    </div>
                    <div className="d-grid">
                        <p className="fuel__sub-value">Замена минерального масла ГПА №4</p>
                        <p className="fuel__sub-value">Замена синтетического масла ГПА №4</p>
                    </div>
                    <p className="fuel__sub-value">Опорожнение конденсатосборника КС-6</p>
                    <p className="fuel__sub-value">Дренажная емкость ГПА</p>
                </div>
                <div className="fuel_height-80 d-grid d-grid__temp-rows-2fr">
                    <p className="fuel__sub-value">Замена масла в контуре ГПЭС №1,2,3</p>
                    <p className="fuel__sub-value">Расходная емкость дизтоплива ДЭС Caterpiller C15</p>
                </div>
                <p className="fuel__sub-value fuel_height-40">Резервуар для дизтоплива ДНУ</p>
                <p className="fuel__sub-value fuel_height-40">Сепаратор воздушного компрессора</p>
                <div className="fuel_height-240 d-grid fuel__kc-work">
                    <p className="fuel__sub-value">Сварочные работы на территории КC</p>
                    <p className="fuel__sub-value">Газовая резка металлов</p>
                    <p className="fuel__sub-value">Лакокрасочные работы на территории КC</p>
                </div>
                <div className="fuel_height-400 d-grid fuel__azc">
                    <p className="fuel__sub-value ">АЗС-Резервуары приема и хранения бензина АИ-92</p>
                    <p className="fuel__sub-value ">АЗС-Резервуары приема и хранения  дизтопливо</p>
                    <p className="fuel__sub-value ">АЗС -отпуск бензина через ТРК</p>
                    <p className="fuel__sub-value ">АЗС-отпуск дизтопливо через ТРК</p>
                    <p className="fuel__sub-value ">Покрасочные работы на территории ВП</p>
                    <p className="fuel__sub-value ">Сварочные работы на территории ВП</p>
                    <p className="fuel__sub-value ">Газовая резка металла</p>
                </div>
            </div>
        </div>
    );
};

export default FuelLimitsSource;
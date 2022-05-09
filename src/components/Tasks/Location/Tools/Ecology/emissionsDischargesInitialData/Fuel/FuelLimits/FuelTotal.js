import React from 'react';

const FuelTotal = () => {
    //Fuel total, total sum (Fuel Limits section)
    return (
        <div className='fuel__total'>
                <div className="d-grid d-grid__temp-column-2-1fr">
                    <div className="fuel__total-field">
                        <p className="fuel__total-sub">Всего топливного газа:</p>
                        <p className="fuel__total-sub">Всего минерального масло:</p>
                        <p className="fuel__total-sub">Всего синтетического масло по ГПА №1-4:</p>
                        <p className="fuel__total-sub">Всего дизтопливо:</p>
                        <p className="fuel__total-sub">Всего безина АИ-90:</p>
                        <p className="fuel__total-sub">Всего электрода:</p>
                        <p className="fuel__total-sub">Всего ЛКМ:</p>
                    </div>
                    <div className="fuel__total-numbers d-grid">
                        <div className="fuel__total-cube">
                            <p className="fuel__total-value">169 442 652,00</p>
                            <p className="fuel__total-value">-</p>
                            <p className="fuel__total-value">-</p>
                            <p className="fuel__total-value">-</p>
                            <p className="fuel__total-value">-</p>
                            <p className="fuel__total-value">-</p>
                            <p className="fuel__total-value">-</p>
                        </div>
                        <div className="fuel__total-kg">
                            <p className="fuel__total-value">-</p>
                            <p className="fuel__total-value">-</p>
                            <p className="fuel__total-value">-</p>
                            <p className="fuel__total-value">-</p>
                            <p className="fuel__total-value">-</p>
                            <p className="fuel__total-value">-</p>
                            <p className="fuel__total-value">-</p>
                        </div>
                        <div className="fuel__total-year">
                            <p className="fuel__total-value">123 693,14</p>
                            <p className="fuel__total-value">85,0634</p>
                            <p className="fuel__total-value">7,4778</p>
                            <p className="fuel__total-value">5,755</p>
                            <p className="fuel__total-value">2,22</p>
                            <p className="fuel__total-value">1.53</p>
                            <p className="fuel__total-value">1</p>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default FuelTotal;
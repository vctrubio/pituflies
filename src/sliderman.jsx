import React, { useState } from 'react';

const SliderComponent = ({Title}) => {
    //consolelog waernings...
    return (
        <div>
            <p style={{textAlign: 'center'}}>{Title}</p>
            <input type="range" min="1" max="100" value="50"
            style={{width: '100%'}}/>
        </div>
    )
}

const SliderChart = ({Title}) => {
    return (
        <div className="slider-chart">
            {Title}
        </div>
    )
}


export const SliderPage = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-evenly', flexDirection: 'column', height: '80vh', marginTop: '2em', marginBottom: '4em' }}>
            <h2 style={{textAlign: 'center'}}>CALCULA TU AHORRO CAMBIANDOTE A WARME</h2>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <div>
                    <SliderComponent Title="¿Cuantas estufas tienes?"/>
                    <SliderComponent Title="¿Cada cuanto cambias la bombona?"/>
                    <SliderComponent Title="¿Cuantas sillas tienes ?"/>
                    <SliderComponent Title="¿Cuanto pagas por la luz  ?"/>
                    <SliderComponent Title="¿Cada cuanto las cambias de media ?"/>
                </div>
                <div>
                    <SliderChart Title="Price Comparison"/>
                    <SliderChart Title="CO2 Consumption"/>
                    <SliderChart Title="Payback period"/>
                </div>
            </div>
        </div>
    )
}
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { hexToHSL } from './HexToHSLConverter';
import { hexToRGB } from './HexToRGBConverter';
import "./../assets/styles/PaletteInfo.css";

const PaletteInfo = () => {
    const location = useLocation();
    const colors = location.state.sendColors;
    const [infoColor, setInfoColor] = useState("#ffffff");

    return (
        <div>
            <header>
                Color Palette Application
            </header>
            <div className='PageContainer' >
                <div className='SubContainer' >
                    <div className='ColorPalette Style1'>
                        {
                            colors.map((color, i) => (
                                <div className='ColorDiv Style2' style={{backgroundColor: color}} onClick={() => setInfoColor(color)}>
                                    <span>{color}</span>
                                </div>
                            ))    
                        }
                    </div>
                </div>
                <div className='RightSidebar' >
                    <div className="ColorBox" style={{backgroundColor: infoColor}}>
                    </div>
                    <div className="ColorInfo" >
                    <div className='ColorCodeField'>
                            <label>{hexToHSL(infoColor)}</label>
                        </div>
                        <div className="ColorCodeField" >
                            <label>{infoColor.toUpperCase()}</label>
                        </div>
                        <div className='ColorCodeField'>
                            <label>{hexToRGB(infoColor)}</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaletteInfo
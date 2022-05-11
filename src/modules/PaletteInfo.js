import React from 'react';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { hexToHSL } from './HexToHSLConverter';
import { hexToRGB } from './HexToRGBConverter';
import RightSideBar from './RightSideBar';
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
                    <RightSideBar clickedColor={infoColor} />
                </div>
            </div>
        </div>
    )
}

export default PaletteInfo
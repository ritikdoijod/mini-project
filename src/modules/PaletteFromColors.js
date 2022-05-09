import React, { useState } from "react";
import { hexToHSL } from "./HexToHSLConverter";
import { hexToRGB } from "./HexToRGBConverter";
import "./../assets/styles/PaletteFromColors.css"

const PaletteFromColors = () => {
    const [addColor, setAddColor] = useState("#ffffff");
    const [colors, setColors] = useState([]);
    const [infoColor, setInfoColor] = useState("#ffffff");

    const colorInputHandler = () => {
        const x = document.getElementById("colorInput").value;
        setAddColor(x);
    }

    const addClickHandler = () => {
        setColors([...colors, addColor]);
    }

    const removeHandler = (c) => {
        const newColor = colors.filter(item => item != c);
        setColors(newColor);
    }

    return (
        <div>
            <header>
                Color Palette Application
            </header>
            <div className="PageContainer">
                <div className="SubContainer contents" >
                    <div className="ColorInputWrapper">
                        <input type="color" id="colorInput" value={addColor} onChange={colorInputHandler} />
                    </div>
                    <div>
                        <button onClick={addClickHandler}>ADD</button>
                    </div>
                    <div className="ColorPalette style1">
                        {
                            colors.map((c, i) => {
                                return (
                                    <div key={i} className="ColorDiv" style={{backgroundColor: c}} >
                                        <button type="button" className="RemoveColorButton" onClick={() => removeHandler(c)}>
                                            X
                                        </button>
                                        <div className="abc" onClick={() => setInfoColor(c)} >
                                        </div>
                                        <span>{c}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="RightSidebar">
                    <div className="ColorBox" style={{backgroundColor: infoColor}}></div>
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

export default PaletteFromColors;
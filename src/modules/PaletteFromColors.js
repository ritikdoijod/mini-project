import React, { useState } from "react";
import { hexToHSL } from "./HexToHSLConverter";
import { hexToRGB } from "./HexToRGBConverter";
import "./../assets/styles/PaletteFromColors.css"
import RightSideBar from "./RightSideBar";

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
        const newColor = colors.filter(item => item !== c);
        setColors(newColor);
    }

    return (
        <div>
            <header>
                Color Palette Application
            </header>
            <div className="PageContainer">
                <div className="SubContainer contents" >
                    <div className="ColorAddDiv">
                        <div className="ColorInputWrapper float-left">
                            <input type="color" id="colorInput" value={addColor} onChange={colorInputHandler} />
                        </div>
                        <div className="AddButtonDiv float-left">
                            <button onClick={addClickHandler}>ADD</button>
                        </div>
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
                    <RightSideBar clickedColor={infoColor} />
                </div>
            </div>
        </div>
    )
}

export default PaletteFromColors;
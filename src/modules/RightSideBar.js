import React from 'react'
import { hexToHSL } from './HexToHSLConverter';
import { hexToRGB } from './HexToRGBConverter';
import copyIcon from "./../assets/images/copy-icon.svg";

const RightSideBar  = (props) => {
    const color = props.clickedColor;

    const copyClickHandler = (id) => {
        const cpyText = document.getElementById(id).textContent;
        navigator.clipboard.writeText(cpyText);
    }

  return (
    <div>
        <div className="ColorBox" style={{backgroundColor: color}}>
        </div>
        <div className="ColorInfo">
            <div className="ColorCodeField">
                <div className="ColorLabel">
                    <label id="hslCode">{hexToHSL(color)}</label>
                </div>
                <button className="CopyButton" onClick={() => {copyClickHandler("hslCode")}}>
                    <img src={copyIcon} />
                </button>
            </div>
            <div className="ColorCodeField">
                <div className="ColorLabel">
                    <label  id="hexCode">{color.toUpperCase()}</label>
                </div>
                <button className="CopyButton" onClick={() => {copyClickHandler("hexCode")}}>
                    <img src={copyIcon} />
                </button>
            </div>
            <div className="ColorCodeField">
                <div className="ColorLabel">
                    <label id="rgbCode">{hexToRGB(color)}</label>
                </div>
                <button className="CopyButton" onClick={() => {copyClickHandler("rgbCode")}}>
                    <img src={copyIcon} />
                </button>
            </div>
        </div>
    </div>
  )
}

export default RightSideBar
import React, { useEffect, useState } from "react";
import "./../assets/styles/TrendingPalettes.css";
import OpenIcon from "./../assets/images/openIcon.svg";
import { useNavigate } from "react-router-dom";

const TrendingPalettes = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => { 
        const url = "http://localhost:5000/colors";
        fetch(url).then(resp => resp.json()).then(resp => setData(resp))
    }, [])

    return (
        <div>
            <header>
                Color Palette Application
            </header>
            <div className="PageContainer">
                <div className="ColorsDivContainer">
                    {
                        data.map((d, i) => {
                            return(
                                <div key={i} className="ColorsDivSubContainers">
                                    <div className="ColorsDiv">
                                        {d.colors.map((color, j) => {
                                            return (
                                                <div key={j} className="ColorDiv" style={{backgroundColor: color }} title={color}>
                                                    <span>{color}</span>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div className="ColorTagsDiv">
                                        <div className="labelDiv">
                                            <label><b>Tags :</b></label>
                                        </div>
                                        {d.tags.map((tag, j) => {
                                            return (
                                                <div key={j} className="tagDiv">
                                                    <span>{tag}</span>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div className="More">
                                        <button type="button" onClick={() => navigate("/paletteinfo", {state: {sendColors: d.colors}})}>
                                            <img src={OpenIcon} alt="" />
                                        </button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default TrendingPalettes;
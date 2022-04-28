import React, { useEffect, useState } from "react";
import "./../assets/styles/TrendingPalettes.css"


const TrendingPalettes = () => {
    const [data, setData] = useState([]);

    useEffect(() => { 
        const url = "http://localhost:5000/colors";
        fetch(url).then(resp => resp.json()).then(resp => setData(resp))
    }, [])

    // const data = ["#fcc404","#fc5433","#8d0b39","#930c3c","#977501"]
    return (
        <div className="ColorsDivContainer">
            {
                data.map(d => {
                    return(
                        <div className="ColorsDivSubContainers">
                            <div className="ColorsDiv">
                                {d.colors.map(color => {
                                    return (
                                        <div className="ColorDiv" style={{backgroundColor: color }}>
                                            <span>{color}</span>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="ColorsInfoDiv">
                                <label>Description - color palette</label>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default TrendingPalettes;
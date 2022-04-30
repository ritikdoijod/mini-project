import React from "react";
import { useNavigate } from "react-router-dom";
import "./../App.css"
import "./../assets/styles/Home.css"
import PaletteImage from "./../assets/images/ColorPalette.png"

function Home () {

    const navigate = useNavigate();

    return(
        <div className="Container">
            <header>
                Color Palette Application
            </header>
            <div className="DisplayBox">

{/******************** navigation buttons ******************/}

                <div className="PaletteImage">
                    <img src={PaletteImage} />
                </div>
                <div className="PaletteShadow">
                </div>
                <div className="NavigateButtons">
                    <button className="Button" onClick={() => navigate("/trendingpalettes")}>Trending Color Palettes</button>
                    <button className="Button" onClick={() => navigate("/palettefromimage")}>Generate Color Palette From Image</button>
                    <button className="Button" onClick={() => navigate("/palettefromcolors")}>Generate Color Palette From Colors</button>
                </div>
                

            </div>
        </div>
    )
}

export default Home;
import React from "react";
import { Link } from "react-router-dom";
import "./../App.css"

function Home () {
    return(
        <div className="container">
            <div className="links">
                <div className="link"><Link to="/trendingpalettes">Trending Color Palettes</Link></div>
                <div className="link"><Link to="/palettefromimage">Generate Color Palette From Image</Link></div>
                <div className="link"><Link to="palettefromcolors/">Generate Color Palette From Colors</Link></div>
            </div>
        </div>
    )
}

export default Home;
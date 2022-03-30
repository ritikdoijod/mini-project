import React from "react";
import { Link } from "react-router-dom";
import "./../App.css"

function Home () {
    return(
        <div className="Container">
            <div className="Header">
                <label>Color Palette Application</label>
            </div>
            <div className="DisplayBox">
                <div className="Links">
                    <div className="Link"><Link to="/trendingpalettes" className="RedirectLink">Trending Color Palettes</Link></div>
                    <div className="Link"><Link to="/palettefromimage" className="RedirectLink">Generate Color Palette From Image</Link></div>
                    <div className="Link"><Link to="/palettefromcolors" className="RedirectLink">Generate Color Palette From Colors</Link></div>
                </div>
            </div>
        </div>
    )
}

export default Home;
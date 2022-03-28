import React from "react";
import { Link } from "react-router-dom";

function Home () {
    return(
        <div className="container">
            <div>
                <h1>This is Home Page</h1>
                <Link to="/palettefromimage">Color Palette From Image</Link>
            </div>
        </div>
    )
}

export default Home;
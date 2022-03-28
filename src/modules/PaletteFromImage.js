import React, {useState} from "react";
import { usePalette } from "react-palette";
import "./../App.css"

function PaletteFromImage () {
    const[imageFile, uploadImage] = useState("")

    const imageHandler = (e) => {
        if(e.target.files.length !== 0) {
            uploadImage(URL.createObjectURL(e.target.files[0]))
        }
    }

    const {data, loading, error} = usePalette(imageFile);

    return (
        <div className="App">
            <div className="App-header">
                <div>
                    <img src={imageFile} alt="" width={400} />
                </div>
                <input type="file" name="image-upload" id="inputImage" accept="image/*" onChange={imageHandler} />
                <div style={{fontsize: 18, marginTop: 25, marginBottom: 50}} >
                    {loading ? (
                        "Loading..."
                    ) : error ? (
                        "Unable to get image"
                    ) : (
                        <div className="colorPalette" >
                            <div style={{width: 85, height: 120, backgroundColor: data.darkVibrant}}></div>
                            <div style={{width: 85, height: 120, backgroundColor: data.darkMuted}}></div>
                            <div style={{width: 85, height: 120, backgroundColor: data.vibrant}}></div>
                            <div style={{width: 85, height: 120, backgroundColor: data.muted}}></div>
                            <div style={{width: 85, height: 120, backgroundColor: data.lightMuted}}></div>
                            <div style={{width: 85, height: 120, backgroundColor: data.lightVibrant}}></div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default PaletteFromImage
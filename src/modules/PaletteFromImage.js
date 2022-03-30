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
                <input type="file" name="image-upload" id="inputImage" accept="image/*" onChange={imageHandler} />
                <div className="ImageView">
                    <img src={imageFile} alt="" width={400} />
                </div>
                <div style={{fontsize: 18, marginTop: 25, marginBottom: 50}} >
                    {loading ? (
                        "Loading..."
                    ) : error ? (
                        "Unable to get image"
                    ) : (
                        <div className="colorPalette" >
                            <div>
                                <div style={{width: 85, height: 120, backgroundColor: data.darkVibrant}}></div>
                                <div className="ColorText"><label>{data.darkVibrant}</label></div>
                            </div>
                            <div>
                                <div style={{width: 85, height: 120, backgroundColor: data.darkMuted}}></div>
                                <div className="ColorText"><label>{data.darkMuted}</label></div>
                            </div>
                            <div>
                                <div style={{width: 85, height: 120, backgroundColor: data.vibrant}}></div>
                                <div className="ColorText"><label>{data.vibrant}</label></div>
                            </div>
                            <div>
                                <div style={{width: 85, height: 120, backgroundColor: data.muted}}></div>
                                <div className="ColorText"><label>{data.muted}</label></div>
                            </div>
                            <div>
                                <div style={{width: 85, height: 120, backgroundColor: data.lightMuted}}></div>
                                <div className="ColorText"><label>{data.lightMuted}</label></div>
                            </div>
                            <div>
                                <div style={{width: 85, height: 120, backgroundColor: data.lightVibrant}}></div>
                                <div className="ColorText"><label>{data.lightVibrant}</label></div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default PaletteFromImage
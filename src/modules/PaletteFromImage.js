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
                            <div>
                                <div style={{width: 85, height: 120, backgroundColor: data.darkVibrant}}></div>
                                <div><label>{data.darkVibrant}</label></div>
                            </div>
                            <div>
                                <div style={{width: 85, height: 120, backgroundColor: data.darkMuted}}></div>
                                <div><label>{data.darkMuted}</label></div>
                            </div>
                            <div>
                                <div style={{width: 85, height: 120, backgroundColor: data.vibrant}}></div>
                                <div><label>{data.vibrant}</label></div>
                            </div>
                            <div>
                                <div style={{width: 85, height: 120, backgroundColor: data.muted}}></div>
                                <div><label>{data.muted}</label></div>
                            </div>
                            <div>
                                <div style={{width: 85, height: 120, backgroundColor: data.lightMuted}}></div>
                                <div><label>{data.lightMuted}</label></div>
                            </div>
                            <div>
                                <div style={{width: 85, height: 120, backgroundColor: data.lightVibrant}}></div>
                                <div><label>{data.lightVibrant}</label></div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default PaletteFromImage
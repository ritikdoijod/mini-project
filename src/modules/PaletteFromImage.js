import React, {useState} from "react";
import { usePalette } from "react-palette";
import "./../assets/styles/PaletteFromImage.css"
import UploadImageIcon from "./../assets/images/ImageUpload.png";

function PaletteFromImage () {
    const[imageFile, uploadImage] = useState("")

    const imageHandler = (e) => {
        if(e.target.files.length !== 0) {
            uploadImage(URL.createObjectURL(e.target.files[0]))
        }
    }

    const {data, loading, error} = usePalette(imageFile);


    return (
        <div className="PaletteFromImageContainer">
            <div className="SubContainer">
                <div className="ImageView">
                    <img src={imageFile} alt="" className="Image" />
                </div>
                <div style={{fontsize: 18, marginTop: 25, marginBottom: 50}} >
                    {loading ? (
                        <div className="LoadingMessage">
                            <label>Loading...</label>
                        </div>
                    ) : error ? (
                        <div className="ErrorMessage">
                            <div className="UploadImageView">
                                <div className="UploadImageIconView">
                                    <img src={UploadImageIcon} />
                                    <h2>Uplaod Image</h2>
                                    <label>Drag Image Here</label>
                                </div>
                                <div>
                                    <label>or</label>
                                    <br></br>
                                    {/* <input type="file" name="image-upload" id="inputImage" accept="image/*" onChange={imageHandler} /> */}
                                    <input type="file" className="InputFile" accept="image/*" onChange={imageHandler} />
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <div className="ColorPalette" >
                                <div>
                                    <div className="Color1" style={{width: 85, height: 120, backgroundColor: data.darkVibrant}}></div>
                                    <div className="ColorText"><label>{data.darkVibrant}</label></div>
                                </div>
                                <div>
                                    <div className="Color2" style={{width: 85, height: 120, backgroundColor: data.darkMuted}}></div>
                                    <div className="ColorText"><label>{data.darkMuted}</label></div>
                                </div>
                                <div>
                                    <div className="Color3" style={{width: 85, height: 120, backgroundColor: data.vibrant}}></div>
                                    <div className="ColorText"><label>{data.vibrant}</label></div>
                                </div>
                                <div>
                                    <div className="Color4" style={{width: 85, height: 120, backgroundColor: data.muted}}></div>
                                    <div className="ColorText"><label>{data.muted}</label></div>
                                </div>
                                <div>
                                    <div className="Color5" style={{width: 85, height: 120, backgroundColor: data.lightMuted}}></div>
                                    <div className="ColorText"><label>{data.lightMuted}</label></div>
                                </div>
                                <div>
                                    <div className="Color6" style={{width: 85, height: 120, backgroundColor: data.lightVibrant}}></div>
                                    <div className="ColorText"><label>{data.lightVibrant}</label></div>
                                </div>
                            </div>
                            <div className="UploadButton">
                                <input type="file" className="InputFile" accept="image/*" onChange={imageHandler} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="RightSidebar" >
                    
            </div>
        </div>
    )
}

export default PaletteFromImage;
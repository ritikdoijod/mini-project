import React, {useState} from "react";
import { usePalette } from "react-palette";
import "./../assets/styles/PaletteFromImage.css"
import UploadImageIcon from "./../assets/images/ImageUpload.png";
import ColorConverter from "./ColorConverter";

function PaletteFromImage () {

    const [info, setInfo] = useState({imageFile: '', color: '#fff'});

    const imageHandler = (e) => {
        if(e.target.files.length !== 0) {
            setInfo({imageFile: URL.createObjectURL(e.target.files[0]), color: '#fff'});
        }
    }

    const {data, loading, error} = usePalette(info.imageFile);


    return (
        <div className="PaletteFromImageContainer">
            <div className="SubContainer">
                <div className="ImageView">
                    <img src={info.imageFile} alt="" className="Image" />
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
                                    <input type="file" className="InputFile" accept="image/*" onChange={imageHandler} />
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <div className="ColorPalette" >
                                {
                                    Object.keys(data).map((key, i) => (
                                        <div className="ColorDiv" style={{backgroundColor: data[key]}} onClick={() => setInfo({...info, color: data[key]})}></div>
                                    ))
                                }
                            </div>
                            <div className="UploadButton">
                                <input type="file" className="InputFile" accept="image/*" onChange={imageHandler} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="RightSidebar" >
                    <div className="ColorBox" style={{backgroundColor: info.color}}></div>
                    <div className="ColorInfo" >
                        <div className="hexColorField" >
                            <label>{info.color}</label>
                        </div>
                        <br></br>
                        <br></br>
                        <ColorConverter color={info.color} />
                    </div>
            </div>
        </div>
    )
}

export default PaletteFromImage;
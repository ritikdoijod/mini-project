import React, {useState} from "react";
import { usePalette } from "react-palette";
import "./../assets/styles/PaletteFromImage.css"
import "./../assets/styles/RightSideBar.css";
import UploadImageIcon from "./../assets/images/ImageUpload.png";
import RightSideBar from "./RightSideBar";

function PaletteFromImage () {

    const [info, setInfo] = useState({imageFile: '', color: '#fff'});

    const imageHandler = (e) => {
        if(e.target.files.length !== 0) {
            setInfo({imageFile: URL.createObjectURL(e.target.files[0]), color: '#fff'});
        }
    }

    const {data, loading, error} = usePalette(info.imageFile);


    return (
        <div>
            <header>
                Color Palette Application
            </header>
            <div className="PageContainer">
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
                                        <img src={UploadImageIcon} alt="" />
                                        <div>
                                            <h1>Upload Image</h1>
                                            <label>Drag Image Here <b>OR</b> Click to Upload</label>
                                        </div>
                                    </div>
                                    <input type="file" className="InputFile" accept="image/*" onChange={imageHandler} />
                                </div>
                            </div>
                        ) : (
                            <div>
                                <div className="ColorPalette" >
                                    {
                                        Object.keys(data).map((key, i) => (
                                            <div className="ColorDiv" style={{backgroundColor: data[key]}} onClick={() => setInfo({...info, color: data[key]})}>
                                                <span>{data[key].toUpperCase()}</span>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className="UploadButton">
                                    <label>Upload New Image</label>
                                    <input type="file" className="InputFile" accept="image/*" onChange={imageHandler} />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="RightSidebar">
                    <RightSideBar clickedColor={info.color} />
                </div>
            </div>
        </div>
    )
}

export default PaletteFromImage;
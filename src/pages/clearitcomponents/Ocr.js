import { useState } from "react";
import axios from 'axios';
import "../../css/Clearit.css";
const Tesseract = require('tesseract.js');


export default function Ocr () {
    const [file, setFile] = useState();
    const [textFromImage, setTextFromImage] = useState("");

    const handleChange = (event) => {
        setFile(event.target.files[0]);
    }

    const handleSubmit = (event) => {
        // Store Image
        event.preventDefault();
        // const url = 'http://localhost:3000/uploadFile';
        // const formData = new FormData();
        // formData.append('file', file);
        // formData.append('fileName', file.name);
        // const config = {
        //     headers: {
        //         'content-type': "multipart/form-data"
        //     }
        // }

        // axios.post(url, formData, config).then((response) => {
        //     console.log(response.data);
        // });

        convertToText(file)
    }

    const convertToText = () => {
        console.log("Image to text: processing.");
        console.log("File name: ", file.name);

        Tesseract.recognize(
            file,
            'eng',
            { logger: m => console.log(m) }
        ).then(({ data: { text } }) => {
            console.log(text);
            setTextFromImage(text);
        }).catch((e)=>{
            console.error(e);
        })
    }

    return (
        <div className="formdiv">
            <form onSubmit={handleSubmit} className="fileinputform">
                <h1 className="displaytext">Upload an image with text</h1>
                <input type="file" onChange={handleChange} className="inputbox"/>
                <button type="submit" className="submitbutton">Upload</button>
            </form>
            <h4>Text from Image:</h4>
            <h6>{textFromImage}</h6>
        </div>
    );
}
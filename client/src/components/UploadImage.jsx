import { useState } from "react"
import axios from 'axios'

const UploadImage = () => {

    const [file,setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0])
    }

    const handleUpload = async() => {

        if(!file){
            alert("Please choose a file")
            return
        }

        const formData = new FormData();
        formData.append("image",file);

        try{
            const res = await axios.post("http://localhost:3000/upload",formData)
            console.log(res)
        }catch(error) {
            console.log("Upload Failed",error)
        }

    }
    console.log(file)
    
    return(
        <>
        <h1>Upload Image</h1>

        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
        </div>

        
        </>
    )
}

export default UploadImage
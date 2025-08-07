import { useState } from "react"
import axios from 'axios'

const UploadImage = () => {

    const [file,setFile] = useState(null);
    const [imageUrl,setImageUrl] = useState("");

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
            if(res.status === 201){
                alert("Uploaded fILE successfully")
                setImageUrl(res.data.imageUrl);
            }
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

        <div>
            {imageUrl && <img src={imageUrl} alt="image" width="500" height="500" />}
        </div>

        
        </>
    )
}

export default UploadImage
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FileUploading = () => {
    const [files, setFiles] = useState(null);
  const navigate = useNavigate();

    const onchange = (e) => {
        setFiles(e.target.files)
        // console.log(e.target.files);
    }

    const upload = () => {
        const form = new FormData()
        for (const keys of Object.keys(files)) {
            form.append("images", files[keys])
        }
        axios.post('http://localhost:8005/fileuploading', form)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    };
    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-between", margin: "20px" }}><label>Upload Multile Files</label>
                <input type="file" name="images" onChange={(e) => { onchange(e) }} multiple /></div>
            <div style={{ display: "flex", justifyContent: "space-between", margin: "20px" }}>
                <button onClick={upload}>Upload File</button>
                {/* <button onClick={show}>Display Images</button> */}
                <button onClick={()=>{navigate("/verify")}}>Display Images</button>

            </div>
        </>
    );
};

export default FileUploading;
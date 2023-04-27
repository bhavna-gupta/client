import { useEffect, useState } from "react";
import axios from "axios";
import { saveAs } from "file-saver";
import { useNavigate } from "react-router-dom";


// import { btoa } from "btoa-atob";
const DisplayImages = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8005/fileuploading')
            .then((res) => setData(res.data))
            .catch((err) => console.log(err))
    }, [])


    const show = () => {
        axios.get('http://localhost:8005/fileuploading')
            .then((res) => setData(res.data))
            .catch((err) => console.log(err))
    }

    const Download = (value) => {
        saveAs(`data:image/png;base64,${btoa(String.fromCharCode(new Uint8Array(value.data)))} `)
    }
    return (
        <>
            <div >
                {/* <button onClick={show}>Show</button> */}
                {data && data.map(item => {
                    {console.log(item.image.data.data)}
                    // const base64String = btoa(
                    //     String.fromCharCode(...new Uint8Array(item.image.data.data))
                    // );
                    return (
                        <>
                            {/* <img src={`data:image/png;base64,${base64String} `} /> */}
                            <img src={item.image} alt="img"/>

                            <li style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px" }}>
                                <label>{item.filename}</label>


                                <button onClick={() => Download(item.image)}>Download</button>
                            </li>
                        </>
                    )
                })}
                <button style={{ marginLeft: "40%" }} variant="primary" onClick={() => { navigate("/login") }}>
                    Logout
                </button>
            </div>
        </>
    );
};

export default DisplayImages;
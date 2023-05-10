import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


// import { btoa } from "btoa-atob";
const DisplayImages = ({url}) => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    useEffect(() => {
        
        axios.get(`${url}/fileuploading`)

            .then((res) => setData(res.data))
            .catch((err) => console.log(err))
    }, [url])


    return (
        <>
            <div >
              
                {data.length>0 && data.map((item,index) => {
                   
                    return (
                        <div key={index}>
                         
                            <img src={`${url}/fileuploading/${item.filename}`} alt="img" width={100}/>

                            <li style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px" }}>
                                <label>{item.filename}</label>


                                <button ><a href={`${url}/fileuploading/${item.filename}`} download style={{textDecoration:"none",color:"black"}}>Download</a></button>
                            </li>
                        </div>
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
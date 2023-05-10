import { Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Varification from "../components/Varification/Varification";
import DisplayImages from "../components/DisplyImages/DisplyImages";

const PageRoutes=()=>{
    return(
        <>
        <Routes>
            <Route path="/home" element={<Home url={process.env.REACT_APP_BACKEND_SERVER}/>}/>
            <Route path="/" element={<Login url={process.env.REACT_APP_BACKEND_SERVER}/>}/>
            <Route path="/login" element={<Login url={process.env.REACT_APP_BACKEND_SERVER}/>}/>
            <Route path="/register" element={<Register url={process.env.REACT_APP_BACKEND_SERVER}/>}/>
            <Route path="/verify" element={<Varification url={process.env.REACT_APP_BACKEND_SERVER}/>}/>
            <Route path="/displayimage" element={<DisplayImages url={process.env.REACT_APP_BACKEND_SERVER}/>}/>

        </Routes>
        </>
    )
};

export default PageRoutes;
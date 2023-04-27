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
            <Route path="/home" element={<Home />}/>
            <Route path="/" element={<Login/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/verify" element={<Varification/>}/>
            <Route path="/displayimage" element={<DisplayImages/>}/>

        </Routes>
        </>
    )
};

export default PageRoutes;
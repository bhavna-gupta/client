import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import FileUploading from '../FileUploading/FileUploading';
const Home=({url})=>{
    const navigate=useNavigate();
    return(
        <>
       <div style={{width: "500px",
        margin: "25px 30%"}}>
            <h1 style={{textAlign:"center"}}>Home Page</h1>
            <FileUploading url={url}/>
       <Button style={{marginLeft:"40%"}} variant="primary" onClick={()=>{navigate("/login")}}>
        Logout
      </Button>
      </div>
        </>
    );
};
export default Home;
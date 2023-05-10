import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import {useNavigate} from "react-router-dom"

const Login=({url})=> {

  const navigate = useNavigate();
    const[user,setUser]=useState({
        username:"",
        password:""
    })
const handelChange=(e)=>{
    const {name, value}=e.target;
    setUser({
        ...user,
        [name]:value
    })
}
const verify = () => {
  const { username, pin } = user
  if (username && pin.length===6) {
    
    axios.post(`${url}/verify`, user)

      .then(res => {
        alert("Verify Successfully");
        if(res.data==="Sign in Successfully"){
          navigate("/displayimage")
        }else{
          alert("Enter correct details")
        }
      })
  } else {
    alert("Invalid Entry")
  }

};

  return (
    <div style={{width: "500px",
        margin: "25px 30%"}}>
            <h1 style={{ textAlign: "center" }}>Verification</h1>
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>User Name</Form.Label>
          <Form.Control type="email" placeholder="User Name" name="username" value={user.username} onChange={handelChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail" >
          <Form.Label>Pin</Form.Label>
          <Form.Control type="number" placeholder="Enter pin" name="pin" value={user.pin} onChange={handelChange} />
        </Form.Group>
        <Button style={{ marginLeft: "41%", marginBottom:"10px" }} variant="primary" onClick={verify}>
          Verify
        </Button>
        <br/>
        <Button style={{ marginLeft: "40%" }} variant="primary" onClick={()=>{navigate("/register")}}>
          Register
        </Button>
      </Form>
    </div>
  );
}

export default Login;
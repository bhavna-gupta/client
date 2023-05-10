import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import {useNavigate} from "react-router-dom"

const Login=({url})=> {

  const navigate = useNavigate();
    const[user,setUser]=useState({
        username:"",
        password:"",
        pin:""
    })
const handelChange=(e)=>{
    const {name, value}=e.target;
    setUser({
        ...user,
        [name]:value
    })
}
const login = () => {
  const { username, password, pin } = user
  if (username && password.length===8 && pin.length===6) {
  
    axios.post(`${url}/signin`, user)
      .then(res => {
        alert(res.data);
        if(res.data==="Sign in Successfully"){
          navigate("/home")
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
           
            <h1 style={{ textAlign: "center" }}>Login</h1>
            <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>User Name</Form.Label>
          <Form.Control type="email" placeholder="User Name" name="username" value={user.username} onChange={handelChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter Password" name="password" value={user.password} onChange={handelChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail" >
          <Form.Label>Pin</Form.Label>
          <Form.Control type="number" placeholder="Enter pin" name="pin" value={user.pin} onChange={handelChange} />
        </Form.Group>
        <Button style={{ marginLeft: "41%", marginBottom:"10px" }} variant="primary" onClick={login}>
          Login
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
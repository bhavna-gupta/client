import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const Register = ({url}) => {
  const navigate=useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
    pin: ""
  })
  const handelChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    })
  }

  const register = () => {
    const { username, password, pin } = user
    if (username && password.length===8 && pin.length===6) {
      
      axios.post(`${url}/signup`, user)

        .then(res => {
          alert(res.data);
          navigate("/login");
        })
    } else {
      alert("Invalid Entry")
    }

  };


  return (
    <div style={{
      width: "500px",
      margin: "25px 30%"
    }}>
      
      <h1 style={{ textAlign: "center" }}>Register</h1>
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
        <Button style={{ marginLeft: "40%" ,marginBottom:"10px"}} variant="primary" onClick={register}>
          Register
        </Button>
        <br/>
        <Button style={{ marginLeft: "42%" }} variant="primary" onClick={()=>{navigate("/login")}}>
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Register;
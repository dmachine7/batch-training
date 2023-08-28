import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, redirect, useNavigate } from "react-router-dom";
import "../Styles/Login.css";
import { toast } from "react-toastify";
import axios from "axios";

const Login = () => {
  localStorage.setItem("type", "customer");
  const [userid, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const url = "http://localhost:8080/auth/login";
  let token = "";

  const navigate = useNavigate();

  const validateAuth = () => {
    console.log(userid, password);
    const data = {
        "username": userid,
        "password": password
    }
    axios.post(url, data).then((res) => {
      console.log(res)
        localStorage.setItem("token", res.data.jwtToken)
        localStorage.setItem("user", JSON.stringify(res.data));
        console.log(JSON.parse(localStorage.getItem("user")));
        navigate("/home");
    })
    .catch((err) => toast.error("Invalid credentials"));;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateAuth();
  };

  return (
    <div className="home">
      <h1>Welcome to Online Bank of India</h1>
      <div className="login">
        <div className="login-form">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicUserId">
              <Form.Label>User ID</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter User Id"
                onChange={(e) => setUserId(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
        <div>
          <Link to="/forgotpw">Forgot password?</Link>
        </div>
        <div>
          <Link to="/signup">New User? Register here</Link>
        </div>
        <hr />
            <div style={{ alignContent: 'center' }}>
            <Link to="/adminlogin">OR Sign in as Admin</Link>
            </div>
      </div>
    </div>
  );
};

export default Login;

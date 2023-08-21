import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, redirect, useNavigate } from "react-router-dom";
import "../Styles/Login.css";
import { toast } from "react-toastify";
import axios from "axios";

const Login = () => {
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
        localStorage.setItem("token", res.data.jwtToken)
        navigate("/home");
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateAuth();
  };

  return (
    <div className="home">
      <h1>Welcome to online banking</h1>
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
      </div>
    </div>
  );
};

export default Login;

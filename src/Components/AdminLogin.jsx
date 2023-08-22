import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, redirect, useNavigate } from "react-router-dom";
import "../Styles/Login.css";
import { toast } from "react-toastify";
import axios from "axios";

const AdminLogin = () => {
  const [userid, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const url = "http://localhost:8080/api/admin/login";
  let token = "";

  const navigate = useNavigate();

  const validateAuth = () => {
    console.log(userid, password);
    const data = {
        "username": userid,
        "password": password
    }
    axios.post(url, data).then((res) => {
      if (res && res.data) {
        localStorage.setItem("token", res.data.jwtToken)
        navigate("/admin");
      }
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
              <Form.Label>Admin ID</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Admin Id"
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
      </div>
    </div>
  );
};

export default AdminLogin;

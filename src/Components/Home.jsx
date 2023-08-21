import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dashboard from "./Dashboard";
import TransactionHistory from "./TransactionHistory";
import Transaction from "./Transaction";
import { Navigate, useNavigate } from "react-router-dom";

const Home = () => {
  const [component, setComponent] = useState("dashboard");
  const [auth, setAuth] = useState(false)
  const [redirect, setRedirect] = useState(false)
  const navigate = useNavigate();

  console.log(localStorage.getItem("token"));

  useEffect(() => {
    if (localStorage.getItem("token") == "123") {
     setRedirect(true)
    }
  }, [])

  const handleLogout = () => {
    localStorage.setItem("token", "123");
    setRedirect(true)
  }

  return (
    <div>
      {redirect ? <Navigate to="/" replace /> : null}
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Online Bank of India</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => setComponent("dashboard")}>Dashboard</Nav.Link>
            <Nav.Link onClick={() => setComponent("history")}>Transaction History</Nav.Link>
            <Nav.Link onClick={() => setComponent("transaction")}>Payment</Nav.Link>
            <Nav.Link onClick={() => handleLogout()}>Logout</Nav.Link>
          </Nav>
          <Navbar.Toggle />
          {/* <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>Signed in as: Devang</Navbar.Text>
          </Navbar.Collapse> */}
        </Container>
      </Navbar>
      <div>
        {
          component == "history" ?
          <TransactionHistory /> :
          component == "transaction" ? 
          <Transaction /> :
          <Dashboard />
        }
      </div>
    </div>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dashboard from "./Dashboard";
import TransactionHistory from "./TransactionHistory";
import Transaction from "./Transaction";
import RegisterAccount from "./RegisterAccount";
import Service from "./Service";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const [component, setComponent] = useState("dashboard")
  const navigate = useNavigate()
  const localData = JSON.parse(localStorage.getItem("user"))
  const [status, setStatus] = useState();

  useEffect(() => {
    setStatus(localData.accStatus)
  }, [])

  const handleLogout = () => {
    navigate("/")
  }

  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Online Bank of India</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => setComponent("dashboard")}>Dashboard</Nav.Link>
            {
              status ?
                <>
                  <Nav.Link onClick={() => setComponent("history")}>Transaction History</Nav.Link>
                  <Nav.Link onClick={() => setComponent("transaction")}>Payment</Nav.Link>
                  <Nav.Link onClick={() => setComponent("self")}>Withdraw / Deposit</Nav.Link>
                </> : null
            }
            {/* <Nav.Link onClick={() => setComponent("register")}>Net Banking</Nav.Link> */}
            <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
          </Nav>
          <Navbar.Toggle />
        </Container>
      </Navbar>
      <div>
        {
          component == "history" ?
            <TransactionHistory /> :
            component == "transaction" ?
              <Transaction /> :
              component == "register" ?
                <RegisterAccount /> :
                component == "self" ?
                  <Service /> :
                  <Dashboard />
        }
      </div>
    </div>
  );
};

export default Home;

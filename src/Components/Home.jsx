import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dashboard from "./Dashboard";
import TransactionHistory from "./TransactionHistory";
import Transaction from "./Transaction";

const Home = () => {
  const [component, setComponent] = useState("dashboard")

  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Online Bank of India</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => setComponent("dashboard")}>Dashboard</Nav.Link>
            <Nav.Link onClick={() => setComponent("history")}>Transaction History</Nav.Link>
            <Nav.Link onClick={() => setComponent("transaction")}>Payment</Nav.Link>
          </Nav>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>Signed in as: Devang</Navbar.Text>
          </Navbar.Collapse>
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

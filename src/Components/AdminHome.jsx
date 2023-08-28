import React,{useState} from 'react'
import AdminSearch from './AdminSearch'
import TransactionSearch from './TransactionSearch'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Admin from './Admin';
import { Link, useNavigate } from "react-router-dom";


const AdminHome = () => {
    const [component, setComponent] = useState("dashboard");
    const localData = JSON.parse(localStorage.getItem("user"));
    const navigate = useNavigate()

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
              <Nav.Link onClick={() => setComponent("userDetails")}>User Details</Nav.Link>
              <Nav.Link onClick={() => setComponent("transactionDetails")}>Transaction Details</Nav.Link>
              <Nav.Link onClick={handleLogout}>Logout</Nav.Link>        
            </Nav>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>Signed in as: {localData.username}</Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div>
          {
            component === "userDetails" ?
            <AdminSearch /> :
            component === "transactionDetails" ? 
            <TransactionSearch /> :
            <Admin />
          }
        </div>
      </div>
    );  
}

export default AdminHome
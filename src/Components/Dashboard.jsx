import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../Styles/Dashboard.css';
import Table from 'react-bootstrap/Table';
import axios from "axios";
import { toast } from "react-toastify";

const Dashboard = () => {
  const [data, setData] = useState();
  const [account, setAccount] = useState();
  const localData = JSON.parse(localStorage.getItem("user"))
  const customerUrl = "http://localhost:8080/api/customer/"
  const accountUrl = "http://localhost:8080/api/account/"

  useEffect(() => {
    axios.get(accountUrl + localData.accNo)
        .then((res) => setAccount(res.data))
        .catch((err) => toast.error("Error loading details"))
  }, [localData])

  useEffect(() => {
    if (localData) {
      axios.get(customerUrl + localData.username)
        .then((res) => setData(res.data))
        .catch((err) => toast.error("Error loading details"))
    }
  }, [account])

  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-left">
        <Card style={{ margin: "1rem" }}>
          <Card.Body>
            <Card.Text>
              Signed in as
            </Card.Text>
            <Card.Title>{account && account.email}</Card.Title>
          </Card.Body>
        </Card>
        <Card style={{ margin: "1rem" }}>
          <Card.Body>
            <Card.Text>
              Account no.
            </Card.Text>
            <Card.Title>{account && account.acc_no}</Card.Title>
          </Card.Body>
        </Card>
        <Card style={{ margin: "1rem" }}>
          <Card.Body>
            <Card.Text>
              Balance
            </Card.Text>
            <Card.Title>&#8377; {account && account.balance}</Card.Title>
          </Card.Body>
        </Card>
      </div>
      <div className="dashboard-right">
        {
          data && data ?
            <Table striped bordered hover style={{ margin: "1rem" }}>
              <tbody>
                <tr>
                  <th>Account Status</th>
                  <td>{data.accountStatus ? "Active" : "Not Active"}</td>
                </tr>
                <tr>
                  <th>Occupation</th>
                  <td>{data.occ_type}</td>
                </tr>
                <tr>
                  <th>Gross Annual Income</th>
                  <td>&#8377; {data.gross_annual_income}</td>
                </tr>
                <tr>
                  <th>Current Address</th>
                  <td>{data.res_address}</td>
                </tr>
                <tr>
                  <th>Phone number</th>
                  <td>{data.mobile}</td>
                </tr>
              </tbody>
            </Table>
            : null
        }

      </div>
    </div>
  );
};

export default Dashboard;

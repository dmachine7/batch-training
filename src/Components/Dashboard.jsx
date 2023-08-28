import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../Styles/Dashboard.css';
import Table from 'react-bootstrap/Table';
import axios from "axios";

const Dashboard = () => {
  const [data, setData] = useState();
  const localData = JSON.parse(localStorage.getItem("user"))
  const url = "http://localhost:8080/api/customer/"

  useEffect(() => {
    if (localData) {
      axios.get(url + localData.username)
        .then((res) => setData(res.data))
    }
  }, [localData])

  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-left">
        <Card style={{ margin: "1rem" }}>
          <Card.Body>
            <Card.Text>
              Signed in as
            </Card.Text>
            <Card.Title>{localData.username}</Card.Title>
          </Card.Body>
        </Card>
        <Card style={{ margin: "1rem" }}>
          <Card.Body>
            <Card.Text>
              Account no.
            </Card.Text>
            <Card.Title>{localData.accNo}</Card.Title>
          </Card.Body>
        </Card>
        <Card style={{ margin: "1rem" }}>
          <Card.Body>
            <Card.Text>
              Balance
            </Card.Text>
            <Card.Title>&#8377; {localData.balance}</Card.Title>
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

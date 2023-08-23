import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../Styles/Dashboard.css';
import Table from 'react-bootstrap/Table';

const Dashboard = () => {

  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-left">
        <Card style={{ margin: "1rem" }}>
          <Card.Body>
            <Card.Text>
              Signed in as
            </Card.Text>
            <Card.Title>Devang</Card.Title>
          </Card.Body>
        </Card>
        <Card style={{ margin: "1rem" }}>
          <Card.Body>
            <Card.Text>
              Account no.
            </Card.Text>
            <Card.Title>1234567890</Card.Title>
          </Card.Body>
        </Card>
        <Card style={{ margin: "1rem" }}>
          <Card.Body>
            <Card.Text>
              Balance
            </Card.Text>
            <Card.Title>&#8377; 7.00</Card.Title>
          </Card.Body>
        </Card>
      </div>
      <div className="dashboard-right">
      <Table striped bordered hover style={{ margin: "1rem" }}>
        <tbody>
        <tr>
          <th>Account Status</th>
          <td>Active</td>
        </tr>
        <tr>
          <th>Occupation</th>
          <td>Employee</td>
        </tr>
        <tr>
          <th>Gross Annual Income</th>
          <td>&#8377; 70.00</td>
        </tr>
        <tr>
          <th>Current Address</th>
          <td>Gachibowly</td>
        </tr>
        <tr>
          <th>User Id</th>
          <td>devang@test.com</td>
        </tr>
        <tr>
          <th>Phone number</th>
          <td>79068XXXXX</td>
        </tr>
        </tbody>
      </Table>
      </div>
    </div>
  );
};

export default Dashboard;

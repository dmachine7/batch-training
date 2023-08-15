import React, { useState } from "react";
import { Form, Button, Card, Row, Col } from "react-bootstrap";

const UserDetails = () => {
  const [formData, setFormData] = useState({
    name: "",
    aadharNumber: "",
    dob: "",
    depositAmount: "",
    phoneNumber: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="wrapper">
      <Card style={{ width: "600px" }}>
        <Card.Body>
          <Card.Title>Please enter your details</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="dob">
                  <Form.Label>Date of Birth</Form.Label>
                  <Form.Control
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3" controlId="aadharNumber">
              <Form.Label>Aadhar Number</Form.Label>
              <Form.Control
                type="text"
                name="aadharNumber"
                value={formData.aadharNumber}
                onChange={handleChange}
                minLength={12}
                maxLength={12}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="phoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="depositAmount">
              <Form.Label>Deposit Amount</Form.Label>
              <Form.Control
                type="number"
                name="depositAmount"
                value={formData.depositAmount}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserDetails;

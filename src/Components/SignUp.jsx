import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import "../Styles/SignUp.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const generateRandomAccNo = () => {
    const min = 1000000000;
    const max = 9999999999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    name: "",
    father_name: "",
    dob: "",
    aadhar: "",
    email: "",
    mobile: "",
    per_address: "",
    res_address: "",
    occ_type: "",
    gross_annual_income: "",
    acc_no: generateRandomAccNo(),
    account_status: 0
  });
 
  const [errors, setErrors] = useState({});
  const [passwordErrors, setPasswordErrors] = useState({});
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    setPasswordErrors(validatePassword(newPassword));
  };

  const handleConfirmPasswordChange = (event) => {
    const confirmPassword = event.target.value;
    setConfirmPassword(confirmPassword);
  };

  const validatePassword = (password) => {
    const errors = {};
    if (!/(?=.*[a-z])/.test(password)) {
      errors.lowerCase = "Password must contain at least one lowercase letter";
    }
    if (!/(?=.*[A-Z])/.test(password)) {
      errors.upperCase = "Password must contain at least one uppercase letter";
    }
    if (!/(?=.*\d)/.test(password)) {
      errors.number = "Password must contain at least one number";
    }
    if (!/(?=.*\W)/.test(password)) {
      errors.specialCharacter =
        "Password must contain at least one special character";
    }
    return errors;
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newErrors = {};
    if (!formData.title) newErrors.title = "Required field";
    if (!formData.name) newErrors.name = "Required field";
    if (!formData.father_name) newErrors.father_name = "Required field";
    if (!formData.dob) {
      newErrors.dob = "Required field";
    } else {
      const dobDate = new Date(formData.dob);
      const currentDate = new Date();
      if (dobDate > currentDate) {
        newErrors.dob = "Date of Birth cannot be a future date";
      }
    }
    if (!formData.aadhar) newErrors.aadhar = "Required field";
    if (!formData.email) newErrors.email = "Required field";
    if (!formData.mobile) newErrors.mobile = "Required field";
    if (!formData.per_address) newErrors.per_address = "Required field";
    if (!formData.res_address) newErrors.res_address = "Required field";
    if (!formData.occ_type) newErrors.occ_type = "Required field";
    if (!formData.gross_annual_income)
      newErrors.gross_annual_income = "Required field";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }
    const accountData = {
      acc_no : formData.acc_no,
      email : formData.email,
      log_pass : password,
      trans_pass : password,
      account_status: 0
    }
    try {
      console.log("Form values:", formData);
      console.log("Account values:", accountData);
      const customerResponse = await axios.post(
        "http://localhost:8080/api/customer/sendData",
        { ...formData, acc_no: formData.acc_no.toString() }
      );
      console.log("Server response:", customerResponse.data);
      const accountResponse = await axios.post(
        "http://localhost:8080/api/account/sendData", accountData
      )
      console.log("Server response:", accountResponse.data);
      toast.success("Form submitted successfully! Please login");
      navigate("/")
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred while submitting the form.");
    }
  };

  return (
    <div className="wrapper">
      <Row className="justify-content-center">
        <Form onSubmit={handleSubmit}>
          <h3 className="mb-4 text-center">Registration Form</h3>
          <Row>
            <Col>
              <Form.Group controlId="acc_no">
                <Form.Label>Account Number</Form.Label>
                <Form.Control
                  type="text"
                  name="acc_no"
                  value={formData.acc_no}
                  readOnly
                  disabled
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  as="select"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  isInvalid={!!errors.title}
                >
                  <option value="">Select Title</option>
                  <option value="Mr.">Mr.</option>
                  <option value="Mrs.">Mrs.</option>
                  <option value="Miss.">Miss.</option>
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.title}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  isInvalid={!!errors.name}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.name}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="father_name">
                <Form.Label>Father's Name</Form.Label>
                <Form.Control
                  type="text"
                  name="father_name"
                  value={formData.father_name}
                  onChange={handleInputChange}
                  isInvalid={!!errors.father_name}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.father_name}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="dob">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleInputChange}
                  isInvalid={!!errors.dob}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.dob}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="aadhar">
                <Form.Label>Aadhar Number</Form.Label>
                <Form.Control
                  type="text"
                  name="aadhar"
                  value={formData.aadhar}
                  onChange={handleInputChange}
                  isInvalid={!!errors.aadhar}
                  maxLength={12}
                  minLength={12}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.aadhar}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="mobile">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  isInvalid={!!errors.mobile}
                  maxLength={10}
                  minLength={10}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.mobile}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="per_address">
                <Form.Label>Permanent Address</Form.Label>
                <Form.Control
                  type="text"
                  name="per_address"
                  value={formData.per_address}
                  onChange={handleInputChange}
                  isInvalid={!!errors.per_address}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.per_address}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="res_address">
                <Form.Label>Residential Address</Form.Label>
                <Form.Control
                  type="text"
                  name="res_address"
                  value={formData.res_address}
                  onChange={handleInputChange}
                  isInvalid={!!errors.res_address}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.res_address}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="occ_type">
                <Form.Label>Occupation Type</Form.Label>
                <Form.Control
                  as="select"
                  name="occ_type"
                  value={formData.occ_type}
                  onChange={handleInputChange}
                  isInvalid={!!errors.occ_type}
                >
                  <option value="">Select Occupation Type</option>
                  <option value="Student">Student</option>
                  <option value="Private job">Private job</option>
                  <option value="Self Employed">Self Employed</option>
                  <option value="Unemployed">Unemployed</option>
                  <option value="Retired">Retired</option>
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.occ_type}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="gross_annual_income">
                <Form.Label>Gross Annual Income</Form.Label>
                <Form.Control
                  type="text"
                  name="gross_annual_income"
                  value={formData.gross_annual_income}
                  onChange={handleInputChange}
                  isInvalid={!!errors.gross_annual_income}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.gross_annual_income}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handlePasswordChange}
                  isInvalid={Object.keys(passwordErrors).length > 0 || !!errors.password}
                />
                {Object.keys(passwordErrors).map((key, index) => (
                  <Form.Control.Feedback key={index} type="invalid">
                    {passwordErrors[key]}
                  </Form.Control.Feedback>
                ))}
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="confirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  isInvalid={confirmPassword !== password}
                />
                <Form.Control.Feedback type="invalid">
                  Passwords do not match
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Button type="submit" variant="primary" className="mt-4">
            Submit
          </Button>
        </Form>
      </Row>
    </div>
  );
};

export default SignUp;

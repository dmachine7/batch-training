import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';

const SignUp = () => {
  const generateRandomAccNo = () => {
    const min = 1000000000;
    const max = 9999999999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const [formData, setFormData] = useState({
    title: '',
    name: '',
    father_name: '',
    dob: '',
    aadhar: '',
    email: '',
    mobile: '',
    per_address: '',
    res_address: '',
    occ_type: '',
    source_income: '',
    gross_annual_income: '',
    acc_no: generateRandomAccNo(), 
  });
  
  const [errors, setErrors] = useState({});
  const [titleError, setTitleError] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'title') {
      const validTitles = ['mr', 'mrs', 'miss'];
      if (!validTitles.includes(value.toLowerCase())) {
        setTitleError(true);
      } else {
        setTitleError(false);
      }
    }
   
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newErrors = {};
    if (!formData.title) newErrors.title = 'Required field';
    if (!formData.name) newErrors.name = 'Required field';
    if (!formData.father_name) newErrors.father_name = 'Required field';
    if (!formData.dob) newErrors.dob = 'Required field';
    if (!formData.aadhar) newErrors.aadhar = 'Required field';
    if (!formData.email) newErrors.email = 'Required field';
    if (!formData.mobile) newErrors.mobile = 'Required field';
    if (!formData.per_address) newErrors.per_address = 'Required field';
    if (!formData.res_address) newErrors.res_address = 'Required field';
    if (!formData.occ_type) newErrors.occ_type = 'Required field';
    if (!formData.source_income) newErrors.source_income = 'Required field';
    if (!formData.gross_annual_income) newErrors.gross_annual_income = 'Required field';

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    try {
      console.log('Form values:', formData);
      const response = await axios.post(
        'http://localhost:8080/api/customer/sendData',
        formData,
        { headers: { 'Content-Type': 'application/json' } }
      );

      console.log('Server response:', response.data);
      alert('Form submitted successfully!');
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while submitting the form.');
    }
  };

  return (
    <Container>
      <Row className='justify-content-center'>
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <h3 className='mb-4 text-center'>Registration Form</h3>

            <Form.Group controlId='acc_no'>
              <Form.Label>Account Number</Form.Label>
              <Form.Control
                type='text'
                name='acc_no'
                value={formData.acc_no}
                readOnly
              />
            </Form.Group>

            <Form.Group controlId='title'>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type='text'
                name='title'
                value={formData.title}
                onChange={handleInputChange}
                isInvalid={titleError}
              />
              {titleError && <Form.Control.Feedback type='invalid'>Invalid title format</Form.Control.Feedback>}
            </Form.Group>

            <Form.Group controlId='name'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='text'
                name='name'
                value={formData.name}
                onChange={handleInputChange}
                isInvalid={!!errors.name}
              />
              <Form.Control.Feedback type='invalid'>{errors.name}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId='father_name'>
              <Form.Label>Father's Name</Form.Label>
              <Form.Control
                type='text'
                name='father_name'
                value={formData.father_name}
                onChange={handleInputChange}
                isInvalid={!!errors.father_name}
              />
              <Form.Control.Feedback type='invalid'>{errors.father_name}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId='dob'>
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                type='date'
                name='dob'
                value={formData.dob}
                onChange={handleInputChange}
                isInvalid={!!errors.dob}
              />
              <Form.Control.Feedback type='invalid'>{errors.dob}</Form.Control.Feedback>
            </Form.Group>

          <Form.Group controlId='aadhar'>
            <Form.Label>Aadhar Number</Form.Label>
            <Form.Control
              type='text'
              name='aadhar'
              value={formData.aadhar}
              onChange={handleInputChange}
              isInvalid={!!errors.aadhar}
              maxLength={12}
              minLength={12}
            />
            <Form.Control.Feedback type='invalid'>{errors.aadhar}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId='email'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type='email'
              name='email'
              value={formData.email}
              onChange={handleInputChange}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type='invalid'>{errors.email}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId='mobile'>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type='tel'
              name='mobile'
              value={formData.mobile}
              onChange={handleInputChange}
              isInvalid={!!errors.mobile}
              maxLength={10}
              minLength={10}
            />
            <Form.Control.Feedback type='invalid'>{errors.mobile}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId='per_address'>
            <Form.Label>Permanent Address</Form.Label>
            <Form.Control
              type='text'
              name='per_address'
              value={formData.per_address}
              onChange={handleInputChange}
              isInvalid={!!errors.per_address}
            />
            <Form.Control.Feedback type='invalid'>{errors.per_address}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId='res_address'>
            <Form.Label>Residential Address</Form.Label>
            <Form.Control
              type='text'
              name='res_address'
              value={formData.res_address}
              onChange={handleInputChange}
              isInvalid={!!errors.res_address}
            />
            <Form.Control.Feedback type='invalid'>{errors.res_address}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId='occ_type'>
            <Form.Label>Occupation Type</Form.Label>
            <Form.Control
              type='text'
              name='occ_type'
              value={formData.occ_type}
              onChange={handleInputChange}
              isInvalid={!!errors.occ_type}
            />
            <Form.Control.Feedback type='invalid'>{errors.occ_type}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId='source_income'>
            <Form.Label>Source of Income</Form.Label>
            <Form.Control
              type='text'
              name='source_income'
              value={formData.source_income}
              onChange={handleInputChange}
              isInvalid={!!errors.source_income}
            />
            <Form.Control.Feedback type='invalid'>{errors.source_income}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId='gross_annual_income'>
            <Form.Label>Gross Annual Income</Form.Label>
            <Form.Control
              type='text'
              name='gross_annual_income'
              value={formData.gross_annual_income}
              onChange={handleInputChange}
              isInvalid={!!errors.gross_annual_income}
            />
            <Form.Control.Feedback type='invalid'>{errors.gross_annual_income}</Form.Control.Feedback>
          </Form.Group>         
            <Button type='submit' variant='primary' className='mt-4'>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;

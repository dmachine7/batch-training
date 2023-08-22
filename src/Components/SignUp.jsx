// import React from 'react';
// import * as Yup from 'yup';
// import { useFormik } from 'formik';
// import axios from 'axios';

// const SignUp = () => {
//   const formik = useFormik({
//     initialValues: {
//       title: '',
//       name: '',
//       father_name: '',
//       dob: '',
//       aadhar: '',
//       email: '',
//       mobile: '',
//       per_address: '',
//       res_address: '',
//       occ_type: '',
//       source_income: '',
//       gross_annual_income: '',
//     },
//     validationSchema: Yup.object({
//       title: Yup.string().matches(/^(Mr\.?|Mrs\.?|Miss\.?)$/, 'Invalid title format').required('Required field'),
//       dob: Yup.date().max(new Date(), 'Invalid date').required('Required field'),
//       aadhar: Yup.string().matches(/^[0-9]{12}$/, 'Invalid Aadhar format').required('Required field'),
//       mobile: Yup.string().matches(/^[0-9]{10}$/, 'Invalid mobile format').required('Required field'),
//       email: Yup.string().email('Invalid email format').required('Required field'),
//       per_address: Yup.string().required('Required field'),
//       res_address: Yup.string().required('Required field'),
//       occ_type: Yup.string().required('Required field'),
//       source_income: Yup.string().required('Required field'),
//       gross_annual_income: Yup.string().required('Required field'),
//       name: Yup.string().required('Required field'),
//       father_name: Yup.string().required('Required field'),
//     }),
//     onSubmit: async (values, { setSubmitting }) => {
//       try {
//         console.log('Form values:', values);
//         const response = await axios.post(
//           "http://localhost:8080/api/customer/sendData",
//         );
//         console.log('Server response:', response.data); 
//         alert('Form submitted successfully!'); 
//       } catch (error) {
//         console.error('Error:', error); 
//         alert('An error occurred while submitting the form.'); 
//       } finally {
//         setSubmitting(false); 
//       }
//     },
    
//   });

//   return (
//     <form onSubmit={formik.handleSubmit}>
//       <div className='container-fluid'>
//         <div className='row justify-content-center align-items-center m-5'>
//           <div className='col-md-5'>
//             <div className='card'>
//               <div className='card-body px-4'>
//                 <h3 className='fw-bold mb-4 pb-2 pb-md-0 mb-md-5 text-center'>Registration Form</h3>
  
//                 <div className='mb-3'>
//                   <label htmlFor='title' className='form-label'>
//                     Title
//                   </label>
//                   <input
//                     type='text'
//                     className='form-control'
//                     id='title'
//                     name='title'
//                     value={formik.values.title}
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                   />
//                   {formik.touched.title && formik.errors.title && <div className='error'>{formik.errors.title}</div>}
//                 </div>
  
//                 <div className='mb-3'>
//                   <label htmlFor='name' className='form-label'>
//                     Name
//                   </label>
//                   <input
//                     type='text'
//                     className='form-control'
//                     id='name'
//                     name='name'
//                     value={formik.values.name}
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                   />
//                   {formik.touched.name && formik.errors.name && <div className='error'>{formik.errors.name}</div>}
//                 </div>
  
//                 <div className='mb-3'>
//                   <label htmlFor='father_name' className='form-label'>
//                     Father's Name
//                   </label>
//                   <input
//                     type='text'
//                     className='form-control'
//                     id='father_name'
//                     name='father_name'
//                     value={formik.values.father_name}
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                   />
//                   {formik.touched.father_name && formik.errors.father_name && <div className='error'>{formik.errors.father_name}</div>}
//                 </div>
  
//                 <div className='mb-3'>
//                   <label htmlFor='dob' className='form-label'>
//                     Date of Birth
//                   </label>
//                   <input
//                     type='date'
//                     className='form-control'
//                     id='dob'
//                     name='dob'
//                     value={formik.values.dob}
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                   />
//                   {formik.touched.dob && formik.errors.dob && <div className='error'>{formik.errors.dob}</div>}
//                 </div>
  
//                 <div className='mb-3'>
//                   <label htmlFor='aadhar' className='form-label'>
//                     Aadhar Number
//                   </label>
//                   <input
//                     type='text'
//                     className='form-control'
//                     id='aadhar'
//                     name='aadhar'
//                     value={formik.values.aadhar}
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                   />
//                   {formik.touched.aadhar && formik.errors.aadhar && <div className='error'>{formik.errors.aadhar}</div>}
//                 </div>
  
//                 <div className='mb-3'>
//                   <label htmlFor='email' className='form-label'>
//                     Email
//                   </label>
//                   <input
//                     type='email'
//                     className='form-control'
//                     id='email'
//                     name='email'
//                     value={formik.values.email}
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                   />
//                   {formik.touched.email && formik.errors.email && <div className='error'>{formik.errors.email}</div>}
//                 </div>
  
//                 <div className='mb-3'>
//                   <label htmlFor='mobile' className='form-label'>
//                     Phone Number
//                   </label>
//                   <input
//                     type='tel'
//                     className='form-control'
//                     id='mobile'
//                     name='mobile'
//                     value={formik.values.mobile}
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                   />
//                   {formik.touched.mobile && formik.errors.mobile && <div className='error'>{formik.errors.mobile}</div>}
//                 </div>
  
//                 <div className='mb-3'>
//                   <label htmlFor='per_address' className='form-label'>
//                     Permanent Address
//                   </label>
//                   <input
//                     type='text'
//                     className='form-control'
//                     id='per_address'
//                     name='per_address'
//                     value={formik.values.per_address}
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                   />
//                   {formik.touched.per_address && formik.errors.per_address && <div className='error'>{formik.errors.per_address}</div>}
//                 </div>
  
//                 <div className='mb-3'>
//                   <label htmlFor='res_address' className='form-label'>
//                     Residential Address
//                   </label>
//                   <input
//                     type='text'
//                     className='form-control'
//                     id='res_address'
//                     name='res_address'
//                     value={formik.values.res_address}
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                   />
//                   {formik.touched.res_address && formik.errors.res_address && <div className='error'>{formik.errors.res_address}</div>}
//                 </div>
  
//                 <div className='mb-3'>
//                   <label htmlFor='occ_type' className='form-label'>
//                     Occupation Type
//                   </label>
//                   <input
//                     type='text'
//                     className='form-control'
//                     id='occ_type'
//                     name='occ_type'
//                     value={formik.values.occ_type}
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                   />
//                   {formik.touched.occ_type && formik.errors.occ_type && <div className='error'>{formik.errors.occ_type}</div>}
//                 </div>
  
//                 <div className='mb-3'>
//                   <label htmlFor='source_income' className='form-label'>
//                     Source of Income
//                   </label>
//                   <input
//                     type='text'
//                     className='form-control'
//                     id='source_income'
//                     name='source_income'
//                     value={formik.values.source_income}
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                   />
//                   {formik.touched.source_income && formik.errors.source_income && <div className='error'>{formik.errors.source_income}</div>}
//                 </div>
  
//                 <div className='mb-3'>
//                   <label htmlFor='gross_annual_income' className='form-label'>
//                     Gross Annual Income
//                   </label>
//                   <input
//                     type='text'
//                     className='form-control'
//                     id='gross_annual_income'
//                     name='gross_annual_income'
//                     value={formik.values.gross_annual_income}
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                   />
//                   {formik.touched.gross_annual_income && formik.errors.gross_annual_income && <div className='error'>{formik.errors.gross_annual_income}</div>}
//                 </div>
  
//                 <div className='text-center'>
//                   <button type='submit' className='btn btn-primary mt-4'>
//                     Submit
//                   </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </form>
// );
// };

// export default SignUp;

import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';

const SignUp = () => {
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
    //const { name,tvalue } = event.target;
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
      <Row className='justify-content-center mt-5'>
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <h3 className='mb-4 text-center'>Registration Form</h3>
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

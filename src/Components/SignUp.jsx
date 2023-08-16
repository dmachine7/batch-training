import React from 'react';
import '../Styles/SignUp.css';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBRadio
}
from 'mdb-react-ui-kit';

const SignUp = () => {
  const val = "Father's Name"
  
    
  return (
    <MDBContainer fluid>

      <MDBRow className='justify-content-center align-items-center m-5'>

        <MDBCard>
          <MDBCardBody className='px-4'>

            <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>

            <MDBRow>
            <MDBCol md='2'>
                <MDBInput wrapperClass='mb-3' label='Title' size='lg' id='form1' type='text'/>
              </MDBCol>
              <MDBCol md='5'>
                <MDBInput wrapperClass='mb-4' label='First Name' size='lg' id='form1' type='text'/>
              </MDBCol>

              <MDBCol md='5'>
                <MDBInput wrapperClass='mb-4' label='Last Name' size='lg' id='form2' type='text'/>
              </MDBCol>

            </MDBRow>

            <MDBRow>
            <MDBCol md='4'>
                <MDBInput wrapperClass='mb-4' label={val} size='lg' id='form3' type='text'/>
              </MDBCol>
              <MDBCol md='4'>
                <MDBInput wrapperClass='mb-4' label='Birthday' size='lg' id='form3' type='text'/>
              </MDBCol>

              <MDBCol md='4' className='mb-4'>
                <h6 className="fw-bold">Gender: </h6>
                <MDBRadio name='inlineRadio' id='inlineRadio1' value='option1' label='Female' inline />
                <MDBRadio name='inlineRadio' id='inlineRadio2' value='option2' label='Male' inline />
                <MDBRadio name='inlineRadio' id='inlineRadio3' value='option3' label='Other' inline />
              </MDBCol>

            </MDBRow>

            <MDBRow>
            <MDBCol md='4'>
                <MDBInput wrapperClass='mb-4' label='Adhaar Number' size='lg' id='form3' type='text'/>
              </MDBCol>
              <MDBCol md='4'>
                <MDBInput wrapperClass='mb-4' label='Email' size='lg' id='form4' type='email'/>
              </MDBCol>

              <MDBCol md='4'>
                <MDBInput wrapperClass='mb-4' label='Phone Number' size='lg' id='form5' type='rel'/>
              </MDBCol>

            </MDBRow>
            <MDBRow>
            <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Permanent Add' size='lg' id='form3' type='text'/>
              </MDBCol>
              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Residential Add' size='lg' id='form4' type='email'/>
              </MDBCol>

            </MDBRow>
            <MDBRow>
            <MDBCol md='4'>
                <MDBInput wrapperClass='mb-4' label='Account Type' size='lg' id='form3' type='text'/>
              </MDBCol>
              <MDBCol md='4'>
                <MDBInput wrapperClass='mb-4' label='Source of Income' size='lg' id='form4' type='email'/>
              </MDBCol>

              <MDBCol md='4'>
                <MDBInput wrapperClass='mb-4' label='Gross Annual Income' size='lg' id='form5' type='rel'/>
              </MDBCol>

            </MDBRow>
            <MDBBtn onClick = {()=> onsubmit} className='mb-4' size='lg'>Submit</MDBBtn>

          </MDBCardBody>
        </MDBCard>

      </MDBRow>
    </MDBContainer>
  );
}

export default SignUp;
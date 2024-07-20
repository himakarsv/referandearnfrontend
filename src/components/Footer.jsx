import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  FaFacebookF, FaTwitter, FaGoogle, FaInstagram,
  FaLinkedin, FaGithub, FaGem, FaHome, FaEnvelope, FaPhone, FaPrint
} from 'react-icons/fa';
// import './App.css';
import Button from 'react-bootstrap/Button';
export default function App() {
  return (
    <footer className='text-center text-lg-start text-muted bg-dark'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom text-white'>
        <div className='me-5 d-none d-lg-block  no-gap'>
          <h1>accredian</h1><br></br>
          <p>credentials that matter</p>
        </div>

       <div>
       <Button variant="primary">Schedule 1-on-1 Call Now</Button><br></br>
       <p>Speak with our Learning Advisor</p>
       </div>
      </section>

      <section className=''>
        <Container className='text-center text-md-start mt-5'>
          <Row className='mt-3'>
          <Col md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
  <h6 className='text-uppercase fw-bold mb-4 text-white'>Programs</h6>
  <div className="d-flex justify-content-between text-white">
    <p>Data Science & AI</p>
    <p className="ms-3">+</p>
  </div>
  <div className="d-flex justify-content-between text-white">
    <p>Product Management</p>
    <p className="ms-3">+</p>
  </div>
  <div className="d-flex justify-content-between text-white">
    <p>Bussiness Analytics</p>
    <p className="ms-3">+</p>
  </div>
  <div className="d-flex justify-content-between text-white">
    <p>Digital Transformation</p>
    <p className="ms-3">+</p>
  </div>
  <div className="d-flex justify-content-between text-white">
    <p>Bussiness Management</p>
    <p className="ms-3">+</p>
  </div>
  <div className="d-flex justify-content-between text-white">
    <p>Project Management</p>
    <p className="ms-3">+</p>
  </div>
  <div className="d-flex justify-content-between text-white">
    <p>Strategy & Leadership</p>
    <p className="ms-3">+</p>
  </div>
  <div className="d-flex justify-content-between text-white">
    <p>Senior Management</p>
    <p className="ms-3">+</p>
  </div>
  <div className="d-flex justify-content-between text-white">
    <p>Fintech</p>
    <p className="ms-3">+</p>
  </div>
</Col>

            <Col md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 text-white'>
                Contact Us
              </h6>
              <p className="text-white">
                Email us(For Data Science Queries): admissions@accredian.com<br>
                </br>
                Email us(For Product Management Queries): pm@accredian.com<br></br>
                Data Science Admission Helpline:+91 9079653222(9 AM- 7PM)<br></br>
                Product Management Admission Helpline:+91 9625811095<br></br>
                Enrolled Student Helpline:+91 7969322507<br></br>
                Office Address: 4th Floor,250,Phase IV,Udyog Vihar,Sector 18,Gurugram,<br></br>
                Haryana 122015<br></br>
                <h6> Why Accredian</h6>
                <h6>Follow Us</h6>
                <div>
          <a href='' className='me-4 text-reset'>
            <FaFacebookF />
          </a>
          <a href='' className='me-4 text-reset'>
            <FaTwitter />
          </a>
          <a href='' className='me-4 text-reset'>
            <FaGoogle />
          </a>
          <a href='' className='me-4 text-reset'>
            <FaInstagram />
          </a>
          <a href='' className='me-4 text-reset'>
            <FaLinkedin />
          </a>
          <a href='' className='me-4 text-reset'>
            <FaGithub />
          </a>
        </div>
                 </p>
               
            </Col>

            <Col md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 text-white'>Accredian</h6>
              <p className="text-white">
                About
              </p>
              <p className="text-white">
                Career
              </p>
              <p className="text-white">
                Blog
              </p>
              <p className="text-white">
               Admission Policy
              </p>
              <p className="text-white">
               Referral Policy
              </p>
              <p className="text-white">
               Privacy Policy
              </p>
              <p className="text-white">
               Terms Of Service
              </p>
              <p className="text-white">
               Master FAQs
              </p>
            </Col>

           
          </Row>
        </Container>
      </section>

      <div className='text-center p-4 text-white' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Accredian A Brand of FullStack Education Pvt Ltd.
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          All Rights Reserved
        </a>
      </div>
    </footer>
  );
}
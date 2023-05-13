import React, {useState, useEffect} from 'react';
import './Login.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import bg from '../../Assets/LoginBg.png';

export default function Login() {
  const logo = require('../../Assets/unnamed-removebg-preview.png');
  return (
    <div className='doubleFont white'>
      <img src={bg} className='bgImg'/>
      <Row>
        <Col className='col-2'></Col>
        <Col className='col-8 mt-5'>
          
          <Container className='shadowBox'>
            <Row>
              <Col>
                <div className='d-flex justify-content-center'>
{/* Put logo outside of shadowBox and make shadowBox smaller, make input bars smaller, change width of shadowBox */}
              <img src={logo} className='logo'></img>
                </div>
                <div className='d-flex justify-content-center'>
                <p className='title mt-1'>Login</p>
                </div>
              </Col>
            </Row>
            <Row className='mb-4'>
              <Col>
                <Row>
                  <p>Email:</p>
                </Row>
                <Row>
                  <Col></Col>
                  <Col className='mb-1'>
                  <input type='email' className='input'></input>
                  </Col>
                  <Col></Col>
                </Row>
              </Col>
            </Row>
            
            <Row className='mb-5'>
              <Col>
                <Row>
                  <p>Password:</p>
                </Row>
                <Row>
                  <Col></Col>
                <Col className='d-flex justify-content-center'>
                  <input type='password' className='input'></input>
                  </Col>
                  <Col></Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col className='d-flex justify-content-center text-align-center accountTxt'>
                <p>Don't have an account? <span>Register here</span></p>
              </Col>
            </Row>
            <Row>
              <Col className='d-flex justify-content-center text-align-center'>
                <Button>Sign In</Button>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </div>
  )
}
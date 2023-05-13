import React, {useState, useEffect} from 'react';
import './Login.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import bg from '../../Assets/LoginBg.png';

export default function Login() {
  const logo = require('../../Assets/unnamed-removebg-preview.png');
  const navigate = useNavigate()

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
                <p className='title mt-2'>Login</p>
                </div>
              <div className='d-flex justify-content-center'>
              <img src={logo} className='logo'></img>
                </div>
              </Col>
            </Row>
            <Row className='mb-5'>
              <Col>
                <Row>
                  <p className='inputTxt'>Username:</p>
                </Row>
                <Row>
                  <Col></Col>
                  <Col className='mb-1'>
                  <input type='username' className='input'></input>
                  </Col>
                  <Col></Col>
                </Row>
              </Col>
            </Row>
            
            <Row className='mb-5'>
              <Col>
                <Row>
                  <p className='inputTxt'>Password:</p>
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
              <Col className='d-flex justify-content-center text-align-center accountTxt mt-2'>
                <p onClick={() => navigate('/CreateAccount')}>Don't have an account? <span>Register here</span></p>
              </Col>
            </Row>
            <Row>
              <Col className='d-flex justify-content-center text-align-center'>
                <Button className='btn' onClick={() => navigate('/Profile')}>Sign In</Button>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </div>
  )
}
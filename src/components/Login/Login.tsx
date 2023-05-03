import React, {useState, useEffect} from 'react';
import './Login.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import bg from '../../Assets/LoginBg.png';

export default function Login() {

  return (
    <div className='doubleFont white'>
      <img src={bg} className='bgImg'/>
      <Row>
        <Col className='col-2'></Col>
        <Col className='col-8'>
          <br/>
          <br/>
          <Container className='shadowBox'>
            <br/>
            <Row>
              <Col>
                <p className='title'>Login</p>
              </Col>
            </Row>
            <br/>
            <Row>
              <Col>
                <Row>
                  <p>Email:</p>
                </Row>
                <Row>
                  <Col></Col>
                  <Col>
                  <input type='email' className='input'></input>
                  </Col>
                  <Col></Col>
                </Row>
              </Col>
            </Row>
            <br/>
            <br/>
            <Row>
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
            <br/>
            <br/>
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

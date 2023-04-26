import React from 'react'
import './Login.css';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Login() {
  return (
    <div className='bgImg doubleFont white'>
      <Row>
        <Col className='col-2'></Col>
        <Col className='col-8'>
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
                  <input></input>
                </Row>
              </Col>
            </Row>
            <br/>
            <Row>
              <Col>
                <Row>
                  <p>Password:</p>
                </Row>
                <Row>
                  <input></input>
                </Row>
              </Col>
            </Row>
            <br/>
            <Row>
              <Col className='d-flex justify-content-center text-align-center'>
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

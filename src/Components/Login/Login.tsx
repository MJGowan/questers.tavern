import React, { useState, useEffect } from 'react';
import './Login.css';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import bg from '../../Assets/LoginBg.png';
import { GetLoggedInUserData, LoginBe } from '../../Services/DataService';

export default function Login() {
  const logo = require('../../Assets/unnamed-removebg-preview.png');
  let navigate = useNavigate();

  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');

  const handleSubmit = async () => {
    let userData = {
      Username,
      Password
    }
    console.log(userData);
    let token = await LoginBe(userData);
    if(token.token !=null){
      localStorage.setItem("Token", token.token);
      let userData = await GetLoggedInUserData(Username);
      sessionStorage.setItem('userData', JSON.stringify(userData));
      navigate("/Profile");
    }
   
  }

  return (
    <div className='doubleFont white'>
      <img src={bg} className='bgImg' />
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
                    <input type='username' className='input' onChange={({ target: { value } }) => setUsername(value)}></input>
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
                    {/* <input type='password' className='input' ></input> */}
                    <>
                    <Form.Label htmlFor="inputPassword5"></Form.Label>
                    <Form.Control
                    className='input'
                      type="password"
                      id="inputPassword5"
                      aria-describedby="passwordHelpBlock"
                      onChange={({ target: { value } }) => setPassword(value)}
                    />
                    </>
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
                <Button className='btn' onClick={handleSubmit}>Sign In</Button>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </div>
  )
}
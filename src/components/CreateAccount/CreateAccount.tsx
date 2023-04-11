import React from 'react';
import './CreateAccount.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export default function CreateAccount() {
    const bg = require('../../Assets/image 9.png');
    const parchment = require('../../Assets/image 7.png');
    return (
        <div className='doubleFont'>
            <img src={bg} style={{ backgroundSize: '100vh, 100vw' }} />
            <Container className='box'>
                <br />
                <Row>
                    <Col>
                        <Row>
                            <p className='caTitle'>Sign Up</p>
                        </Row>
                        <Row>
                            <Col className='col-6'>
                                <p>First Name:</p>
                                <input></input>
                            </Col>
                            <Col className='col-6'>
                                <p>Last Name:</p>
                                <input></input>
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col>
                                <p>Username:</p>
                                <input></input>
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col>
                                <p>Password:</p>
                                <input></input>
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col>
                                <p>Already have an account? Sign in</p>
                                <Button>Create Account</Button>
                            </Col>
                        </Row>
                    </Col>
                    {/*  */}
                    <Col>
                        <br />
                        <br />
                        <br />
                        <Row>
                            <Col className='d-flex justify-content-center'>
                                <img src={parchment} />
                                <AddCircleOutlineIcon className='plus' />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

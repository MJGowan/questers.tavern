// import React, { useState } from 'react';
import './CreateAccount.css';
import { Container, Row, Col, Button } from 'react-bootstrap';


export default function CreateAccount() {
    const bg = require('../../Assets/image 9.png');
    const parchment = require('../../Assets/image 7.png');
    const plus = require('../../Assets/R (1) 1.png');

    //const {Username, setUsername} = useState<string>('');
    //const {Firstname, setFirstname} = useState<string>('');
    //const {Lastname, setLastname} = useState<string>('');
    //const {Datecreated, setDatecreated} = useState<string>('');
    //const {Dndexperience, setDndexperience} = useState<string>('');
    //const {Password, setPassword} = useState<string>('');

    //const handleSubmit = async () => {
        // if (!Username || !Firstname || !Lastname || !Datecreated || !Dndexperience || !Password) {
            // alert("Could not create account, missing information.");
            // } else {
            // let userData: object = {
            // Id: 0,
            // Username,
            //Firstname,
            //Lastname,
            //Datecreated,
            //Dnexperience,
            //Password
            // }
            // if (await CreateAccount(userData)) {
            // console.log('Success');
            //  navigate("/{ProfileComponent}");
            // } else {
            // alert("Could not create account, missing information.");
            // }
            // console.log(userData);
            // }
    //}
    return (
        <div className='doubleFont'>
            <img src={bg} style={{ backgroundSize: '100vh, 100vw' }} />
            <Container className='box'>
                <br />
                <Row>
                    <Col>
                        <Row>
                            <p className='caTitle' id='caTitle'>SIGN UP</p>
                        </Row>
                        <Row>
                            <Col className='col-6'>
                                <p>First Name:</p>
                                <input className='shortInput'></input>
                            </Col>
                            <Col className='col-6'>
                                <p>Last Name:</p>
                                <input className='shortInput'></input>
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <p>Username:</p>
                            <input className='longInput'></input>
                        </Row>
                        <br />
                        <Row>
                            <p>Todays Date:</p>
                            <input className='longInput'></input>
                        </Row>
                        <br />
                        <Row>
                            <p>Dnd Experience:</p>
                            <input className='longInput'></input>
                        </Row>
                        <br />
                        <Row>
                            <p>Password:</p>
                            <input className='longInput'></input>
                        </Row>
                        <br />
                        <br />
                        <Row>
                            <Col>
                                <Row>
                                    <p className='text-center'>Already have an account? <span>Login</span></p>
                                </Row>
                                <Row>
                                    <Col className='d-flex justify-content-center'>
                                        <Button className='caBtn'>Create Account</Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    {/*  */}
                    <Col>
                        <br />
                        <br />
                        <br />
                        <Row>
                            <p className='text-center ppTxt'>Profile Picture</p>
                            <Col className='d-flex justify-content-center'>
                                <img src={parchment} />
                                <img src={plus} className='plus'/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
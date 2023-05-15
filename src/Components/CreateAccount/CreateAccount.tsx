import './CreateAccount.css';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { CreateAccountBe } from '../../Services/DataService';


export default function CreateAccount() {
    const bg = require('../../Assets/image 9.png');
    const parchment = require('../../Assets/image 7.png');
    const plus = require('../../Assets/R (1) 1.png');
    const logo = require('../../Assets/unnamed-removebg-preview.png');
    const navigate = useNavigate()

    const [Username, setUsername] = useState<string>('');
    const [Firstname, setFirstname] = useState<string>('');
    const [Lastname, setLastname] = useState<string>('');
    const [Datecreated, setDatecreated] = useState<string>('');
    const [Dndexperience, setDndexperience] = useState<string>('');
    const [UserImage, setUserImage] = useState<string>('');
    const [Password, setPassword] = useState<string>('');

    const handleSubmit = async () => {
        if (!Username || !Firstname || !Lastname || !Datecreated || !Dndexperience || !UserImage || !Password) {
            alert("Could not create account, missing information.");
        } else {
            let userData: Object = {
                Id: 0,
                Username,
                Firstname,
                Lastname,
                Datecreated,
                Dndexperience,
                UserImage,
                Password
            };
            if (await CreateAccountBe(Object)) {
                sessionStorage.setItem('userData', JSON.stringify(CreateAccount()));
            } else {
                alert("Could not create account, missing information.");
            }
            console.log(userData);
            CreateAccountBe(userData);
        }
    }
    return (
        <div className='doubleFont'>
            <img src={bg} style={{ backgroundSize: '100vh' }} />
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
                                <input className='shortInput' onChange={({ target: { value } }) => setFirstname(value)}></input>
                            </Col>
                            <Col className='col-6'>
                                <p>Last Name:</p>
                                <input className='shortInput' onChange={({ target: { value } }) => setLastname(value)}></input>
                            </Col>
                        </Row>
                        <br />
                        <Row className='mb-4'>
                            <p>Username:</p>
                            <input className='longInput' onChange={({ target: { value } }) => setUsername(value)}></input>
                        </Row>

                        <Row className='mb-4'>
                            <p>Todays Date:</p>
                            <input className='longInput' onChange={({ target: { value } }) => setDatecreated(value)} placeholder='ex: 05/05/2023'></input>
                        </Row>

                        <Row className='mb-4'>
                            <p>Dnd Experience:</p>
                            <input className='longInput' onChange={({ target: { value } }) => setDndexperience(value)} placeholder='ex: 1 Year 4 Months'></input>
                        </Row>

                        <Row>
                            <p>Password:</p>
                            <>
                                <Form.Label htmlFor="inputPassword5"></Form.Label>
                                <Form.Control
                                    className='longInput2'
                                    type="password"
                                    id="inputPassword5"
                                    aria-describedby="passwordHelpBlock"
                                    onChange={({ target: { value } }) => setPassword(value)}
                                />
                            </>
                        </Row>
                        <br />
                        <Row>
                            <Col>
                                <Row>
                                    <p onClick={() => navigate('/Login')} className='text-center'>Already have an account? <span>Login</span></p>
                                </Row>
                                <Row>
                                    <Col className='d-flex justify-content-center'>
                                        <Button className='caBtn' onClick={handleSubmit}>Create Account</Button>
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

                            {/* <p className='text-center ppTxt'>Profile Picture</p>
                            <Col className='d-flex justify-content-center'>
                                <img src={parchment} />
                                <img src={plus} className='plus'/>
                            </Col>

                            <Button className='imageBtn'>Upload Profile Picture</Button> */}
                            <p className='ppTxt'>Profile Picture:</p>
                            <Col className='d-flex justify-content-center'>
                                <Form.Group controlId="formFile" className="mb-3">
                                    <Form.Control type="file" onChange={({ target: { value } }) => setUserImage(value)} />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

import './CreateAccount.css';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { CreateAccountBe } from '../../Services/DataService';



export default function CreateAccount() {

    const bg = require('../../Assets/image 9.png');
    const navigate = useNavigate()
    const profilepic = require("../../Assets/profilepic.png");

    const [Username, setUsername] = useState<string>('');
    const [Firstname, setFirstname] = useState<string>('');
    const [Lastname, setLastname] = useState<string>('');
    const [Datecreated, setDatecreated] = useState<string>('');
    const [Dndexperience, setDndexperience] = useState<string>('');
    const [UserImage, setUserImage] = useState(profilepic);
    const [Password, setPassword] = useState<string>('');

    const handleSubmit = async () => {
        if (!Username || !Firstname || !Lastname || !Datecreated || !Dndexperience || !UserImage || !Password) {
            alert("Could not create account, missing information.");
        } else {
            let userData: object = {
                Id: 0,
                Username,
                Firstname,
                Lastname,
                Datecreated,
                Dndexperience,
                UserImage,
                Password
            };
            let isAccountCreated = await CreateAccountBe(userData);
            if (isAccountCreated) {
                alert("Account was successfully created.");
            } else {
                alert("Could not create account, missing information.");
            }
            console.log(userData);
        }
    }

    const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        let reader = new FileReader();
        const file = e.target.files?.[0];
        if (file) {
            reader.onloadend = (event) => {
                console.log(reader.result);
                setUserImage(event.target?.result);
            }
            reader.readAsDataURL(file);
        }
    }

    const handlePicChange = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
      }

    return (
        <div className='doubleFont'>
            <img src={bg} style={{ backgroundSize: '100vh' }} />
            <Container className='caBox'>
                <br />
                <Form>
                    
                </Form>
                <Row>
                    <Col>
                        <Row>
                            <p className='caTitle' id='caTitle'>SIGN UP</p>
                        </Row>
                        <Row>
                            <Col className='col-6'>
                                <p>First Name:</p>
                                <input className='caShortInput' onChange={({ target: { value } }) => setFirstname(value)}></input>
                            </Col>
                            <Col className='col-6'>
                                <p>Last Name:</p>
                                <input className='caShortInput' onChange={({ target: { value } }) => setLastname(value)}></input>
                            </Col>
                        </Row>
                        <br />
                        <Row className='mb-4'>
                            <p>Username:</p>
                            <input className='caLongInput' onChange={({ target: { value } }) => setUsername(value)}></input>
                        </Row>

                        <Row className='mb-4'>
                            <p>Todays Date:</p>
                            <input className='caLongInput' onChange={({ target: { value } }) => setDatecreated(value)} placeholder='ex: 05/05/2023'></input>
                        </Row>

                        <Row className='mb-4'>
                            <p>Dnd Experience:</p>
                            <input className='caLongInput' onChange={({ target: { value } }) => setDndexperience(value)} placeholder='ex: 1 Year 4 Months'></input>
                        </Row>

                        <Row>
                            <Form>
                            <p>Password:</p>
                                <Form.Label htmlFor="inputPassword5"></Form.Label>
                                <Form.Control
                                    className='caLongInput2'
                                    type="password"
                                    id="inputPassword5"
                                    aria-describedby="passwordHelpBlock"
                                    onChange={({ target: { value } }) => setPassword(value)}
                                />
                            </Form>
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
                            <p className='caPpTxt'>Profile Picture:</p>
                            <Col className='d-flex justify-content-center'>
                                <Form onSubmit={handlePicChange}>
                                <Form.Group controlId="formFile" className="mb-3">
                                    <Form.Control type= "file" accept='image/png, image/jpeg, image/jpg, image/jpe' onChange={handleImage} />
                                </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
import React, { useState } from 'react';
import './Profile.css';
import { Container, Row, Col, Modal, Button, Form } from 'react-bootstrap';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';

export default function Profile() {
  const heroImg = require('../../Assets/Rectangle 33.png');
  const username = "Username";
  const profilePic = require('../../Assets/Pic.png');
  const creationDate = "X/XX/XXXX";
  const location = "Tired, CA";
  const exp = "New";
  const numFriends = 0;

  const parchment = require('../../Assets/image 7 (1).png');
  const addNew = require('../../Assets/R (1) 1.png');

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const [username, setUsername] = useState('');
  // const [profilePic, setProfilePic] = useState('');
  // const [creationDate, setCreationDate] = useState('');
  // const [location, setLocation] = useState('');
  // const [exp, setExp] = useState('');
  // const [numFriends, setNumFriends] = useState('');

  const [myCampaigns, setMyCampaigns] = useState('');
  const [playing, setPlaying] = useState('');
  // If there are campaigns, display them, else display "Not participating in a campaign yet? Maybe you can check the Campaigns page!"

  // const [mode, setMode] = useState('');
  // setMode('Adventurer');
 let mode = 'Adventurer';
  // const changeMode = () => {
  //   if (mode === "Adventurer"){
  //     setMode('Dungeon Master');
  //   } else if (mode === "Dungeon Master"){
  //     setMode('Adventurer');
  //   }
  // }



  return (
    <div className='profile'>
      <Row>
        <img src={heroImg} className='heroImg'></img>
        <Col className='col-4 greeting'>
          <p className='doubleFont'>Welcome to the tavern, {username}!</p>
        </Col>
        <Col>
          {
            mode === 'Adventurer' ? (
              <div></div>
            ) : (
              <div></div>
            )
            
          }
          
        </Col>
      </Row>
      <Row className='mt-3'>
        <Col className='col-3'>
          <div className='profileBox doubleFont'>
            <div>
              <img src={profilePic} className='profilePic'></img>
            </div>
            <Container>
              <Row>
                <p>Username: {username}</p>
              </Row>
              <Row>
                <p>Account Created: </p>
                <p>{creationDate}</p>
              </Row>
              <Row>
                <p>Located in: </p>
                <p>{location}</p>
              </Row>
              <Row>
                <p>D&D Experience: </p>
                <p>{exp}</p>
              </Row>
              <Row>
                <p>Friends List: {numFriends}</p>
              </Row>
              <hr />
              <Row>
                <p className='editBtn' onClick={() => handleShow}>Edit Profile</p>
              </Row>
            </Container>
          </div>
        </Col>
     
        <Col>
          <Row>
            <Container className='mb-5'>
              <Row>
                <Col className='doubleFont'>
                <p>My Campaigns</p>
                </Col>
              </Row>
              <Row>
                <Col>
                
                  <div>
                    <img src={parchment}/>
                    <img src={addNew} className='addNewImg'/>
                    <p className='darkTxt addNewTxt'>Add New</p>
                  </div>
                
                </Col>
              </Row>
            </Container>
          </Row>
          <Row className='mt-5'>
          <Container>
              <Row>
                <Col className='doubleFont'>
                <p>Participating In</p>
                </Col>
              </Row>
              <Row>
                <Col className='dwFont'>
                
                  <div>
                    <img src={parchment}/>
                    <p className='darkTxt partTxtOne'>Not participating in a campaign yet?</p>
                    <p className='darkTxt partTxtTwo'> Maybe you can check the Campaigns page!</p>
                  </div>
                
                </Col>
              </Row>
            </Container>
          </Row>
        </Col>
      </Row>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        <Form>
      <Form.Group className="mb-3" controlId="changeUsername">
        <Form.Label>Username:</Form.Label>
        <Form.Control type="text"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="changePassword">
        <Form.Label>Change Password:</Form.Label>
        <Form.Control type="password"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="changeLocation">
        <Form.Label>Located In:</Form.Label>
        <Form.Control type="text"/>
      </Form.Group>
    </Form>

    <Form.Group className="mb-3">
        <Form.Label>D&D Experience:</Form.Label>
        <Form.Select>
          <option>Has Not Played</option>
          <option>New</option>
          <option>Experienced</option>
          <option>Grand Master</option>
        </Form.Select>
      </Form.Group>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">Submit</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
              }
            
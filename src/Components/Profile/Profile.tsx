import React, { useState } from 'react';
import './Profile.css';
import { Container, Row, Col, Modal, Button, Form } from 'react-bootstrap';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';

export default function Profile() {
  const parchment = require('../../Assets/image 7 (1).png');
  const addNew = require('../../Assets/R (1) 1.png');

  const heroImg = require('../../Assets/Rectangle 33.png');
  const username = "Username";
  const profilePic = require('../../Assets/Pic.png');
  const creationDate = "X/XX/XXXX";
  const location = "Tired, CA";
  const exp = "New";
  const numFriends = 0;

  const [showProfile, setShowProfile] = useState(false);
  const closeProfile = () => setShowProfile(false);
  const editProfile = () => setShowProfile(true);

  const [showCampaignCreator, setShowCampaignCreator] = useState(false);
  const closeCampaignCreator = () => setShowCampaignCreator(false);
  const campaignCreator = () => setShowCampaignCreator(true);

  // const [username, setUsername] = useState('');
  // const [profilePic, setProfilePic] = useState('');
  // const [creationDate, setCreationDate] = useState('');
  // const [location, setLocation] = useState('');
  // const [exp, setExp] = useState('');
  // const [numFriends, setNumFriends] = useState('');

  // const [myCampaigns, setMyCampaigns] = useState('');
  // const [playing, setPlaying] = useState('');
  // If there are campaigns, display them, else display "Not participating in a campaign yet? Maybe you can check the Campaigns page!"

  const [mode, setMode] = useState('');
  const changeMode = () => {
    setMode(prevMode => prevMode === "Adventurer" ? "Dungeon Master" : "Adventurer");
  }



  return (
    <div className='profile'>
      <Row>
        <img src={heroImg} className='heroImg'></img>
        <Col className='col-4 greeting'>
          <p className='doubleFont'>Welcome to the tavern,</p>
          <p className='doubleFont userTxt'>{username}!</p>
        </Col>
        <Col>
          {
            mode === 'Adventurer' ? (
              <div>
                <p className='doubleFont mode'>Adventurer Mode <ChangeCircleIcon onClick={() => changeMode()} /></p>
              </div>
            ) : (
              <div>
                <p className='doubleFont mode'>Dungeon Master Mode <ChangeCircleIcon onClick={() => changeMode()} /></p>
              </div>
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
                <p className='editBtn' onClick={editProfile}>Edit Profile</p>
              </Row>
            </Container>
          </div>
        </Col>

        <Col>
          <Row>
            <Container className='mb-5'>
              {
                mode === 'Adventurer' ? (
                  <div>
                    <Row>
                      <Col className='doubleFont'>
                        <p>Characters</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <div>
                          <img src={parchment} />
                          <img src={addNew} className='addNewImg' />
                          <p className='darkTxt addNewTxt'>Add New</p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                ) : (
                  <div>
                    <Row>
                      <Col className='doubleFont'>
                        <p>Custom Campaigns</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <div onClick={() => campaignCreator()}>
                          <img src={parchment} />
                          <img src={addNew} className='addNewImg' />
                          <p className='darkTxt addNewTxt'>Add New</p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                )
              }

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
                    <img src={parchment} />
                    <p className='darkTxt partTxtOne'>Not participating in a campaign yet?</p>
                    <p className='darkTxt partTxtTwo'> Maybe you can check the Campaigns page!</p>
                  </div>

                </Col>
              </Row>
            </Container>
          </Row>
        </Col>
      </Row>

      {/* EDIT PROFILE */}
      <Modal
        show={showProfile}
        onHide={closeProfile}
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
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="changePassword">
              <Form.Label>Change Password:</Form.Label>
              <Form.Control type="password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="changeLocation">
              <Form.Label>Located In:</Form.Label>
              <Form.Control type="text" />
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


      {/* CAMPAIGNS */}
      <Modal
        show={showCampaignCreator}
        onHide={closeCampaignCreator}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Campaign Creator</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form>
            <Form.Group className="mb-3" controlId="Title">
              <Form.Label>Title:</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="Location">
              <Form.Label>Location:</Form.Label>
              <Form.Control type="password" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>D&D Experience:</Form.Label>
              <Form.Select>
                <option>Beginner-Friendly</option>
                <option>New Players</option>
                <option>Experienced Players</option>
                <option>Grand Masters Only</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="changeLocation">
              <Form.Label>Description:</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            {/* Add ability to see image later */}
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Default file input example</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
          </Form>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">Submit</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
import React, { useState, useEffect, ChangeEvent } from 'react';
import './Profile.css';
import { Container, Row, Col, Modal, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import { checkToken } from '../../Services/DataService';

export default function Profile() {
  const parchment = require('../../Assets/image 7 (1).png');
  const addNew = require('../../Assets/R (1) 1.png');

  let navigate = useNavigate();
  const [Username, setUsername] = useState<string>('');
  const [DateCreated, setDateCreated] = useState<string>('');
  const [Dndexperience, setDndexperience] = useState<string>('');
  const [UserImage, setUserImage] = useState('');
  let userData: { Id?: number, username?: string, userImage?: string, datecreated?: string, dndexperience?: string, location?: string, numfriends?: string } = {};
  useEffect(() => {
    if(!checkToken){
      navigate('/Login')
    }else{
      // Get users data
      const getUserData = async () => {
        userData = JSON.parse(sessionStorage.userData);
        setUsername(userData.username!)
        setDateCreated(userData.datecreated!)
        setDndexperience(userData.dndexperience!)
        setUserImage(userData.userImage!)
      }
     getUserData();
    }
  }, [])

  const heroImg = require('../../Assets/Rectangle 33.png');
  const location = "Stockton, CA";
  const numFriends = 0;

  const [isEditing, setIsEditing] = useState(false);
  const [currentState, setCurrentState] = useState('');

  
  //const [location, setLocation] = useState('');
  //const [numFriends, setNumFriends] = useState('');
  // const [myCampaigns, setMyCampaigns] = useState([]);
  // const [playing, setPlaying] = useState([]);
  // If there are campaigns, display them, else display "Not participating in a campaign yet? Maybe you can check the Campaigns page!"

  const [showProfile, setShowProfile] = useState(false);
  const closeProfile = () => setShowProfile(false);
  const editProfile = () => setShowProfile(true);

  const [showCampaignCreator, setShowCampaignCreator] = useState(false);
  const closeCampaignCreator = () => setShowCampaignCreator(false);
  const campaignCreator = () => setShowCampaignCreator(true);


  const [mode, setMode] = useState('');
  const changeMode = () => {
    setMode(prevMode => prevMode === "Adventurer" ? "Dungeon Master" : "Adventurer");
  }

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => 
  {
    setUsername(e.target.value);
  }

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => 
  {
    setUserImage(e.target.value);
  }

  const handleDndexperienceChange = (e: ChangeEvent<HTMLInputElement>) => 
  {
    setDndexperience(e.target.value);
  }



  return (
    <div className='profile'>
      <Row>
        <img src={heroImg} className='profileHeroImg'></img>
        <Col className='col-4 profileGreeting'>
          <p className='doubleFont'>Welcome to the tavern,</p>
          <p className='doubleFont profileUserTxt'>{Username}!</p>
        </Col>
        <Col>
          {
            mode === 'Adventurer' ? (
              <div>
                <p className='doubleFont profileMode'>Adventurer Mode <ChangeCircleIcon onClick={() => changeMode()} /></p>
              </div>
            ) : (
              <div>
                <p className='doubleFont profileMode'>Dungeon Master Mode <ChangeCircleIcon onClick={() => changeMode()} /></p>
              </div>
            )

          }

        </Col>
      </Row>
      <Row className='mt-3'>
        <Col className='col-3'>
          <div className='profileBox doubleFont'>
            <div>
              <img src={UserImage} className='profilePic'></img>
            </div>
            <Container>
              <Row>
                <p>Username: {Username}</p>
              </Row>
              <Row>
                <p>Account Created: </p>
                <p>{DateCreated}</p>
              </Row>
              <Row>
                <p>Located in: </p>
                <p>{location}</p>
              </Row>
              <Row>
                <p>D&D Experience: </p>
                <p>{Dndexperience}</p>
              </Row>
              <Row>
                <p onClick={() => navigate('/FavoritesList')}>Friends List: {numFriends}</p>
              </Row>
              <hr />
              <Row>
                <p className='profileEditBtn' onClick={editProfile}>Edit Profile</p>
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
                        <div onClick={() => navigate('/CreateCharacter')}>
                          <img src={parchment} />
                          <img src={addNew} className='profileAddNewImg' />
                          <p className='profileDarkTxt profileAddNewTxt'>Add New</p>
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
                          <img src={addNew} className='profileAddNewImg' />
                          <p className='profileDarkTxt profileAddNewTxt'>Add New</p>
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

                  <div onClick={() => navigate('/TavernBoard')}>
                    <img src={parchment} />
                    <p className='profileDarkTxt profilePartTxtOne'>Not participating in a campaign yet?</p>
                    <p className='profileDarkTxt profilePartTxtTwo'> Maybe you can check the Campaigns page!</p>
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
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form>
            <Form.Group className="mb-3" controlId="changeUsername">
              <Form.Label>Username:</Form.Label>
              <Form.Control type="text" onChange={handleNameChange}></Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlId="changeImage">
              <Form.Label>Change User Image:</Form.Label>
              <Form.Control type="file" onChange={handleImageChange}></Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlId="changeLocation">
              <Form.Label>Located In:</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Form>

          <Form.Group className="mb-3" controlId='changeDndexperience'>
            <Form.Label>D&D Experience:</Form.Label>
            <Form.Control type="text" onChange={handleDndexperienceChange}></Form.Control>
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
              <Form.Label>Campaign Title:</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Campaign Status:</Form.Label>
              <Form.Select>
                <option>In Development</option>
                <option>Accepting New Players</option>
                <option>Full</option>
                <option>Completed</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="Title">
              <Form.Label>Campaign Date:</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="Location">
              <Form.Label>Location:</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Campaign Difficulty:</Form.Label>
              <Form.Select>
                <option>Beginner Campaign</option>
                <option>Level 1-5</option>
                <option>Level 5-10</option>
                <option>Level 10-15</option>
                <option>Level 15-20</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="changeLocation">
              <Form.Label>Campaign Description:</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            {/* Add ability to see image later */}
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Campaign Image:</Form.Label>
              <Form.Control type="file" />
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Campaign Image 2:</Form.Label>
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
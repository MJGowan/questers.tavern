import React, { useState } from 'react';
import './Profile.css';
import { Container, Row, Col } from 'react-bootstrap';

export default function Profile() {
  const heroImg = require('../../Assets/Rectangle 33.png');
  const username = "Username";
  const profilePic = require('../../Assets/Pic.png');
  const creationDate = "0/0/0000";
  const location = "Tired, CA";
  const exp = "New";
  const numFriends = 0;

  const parchment = require('../../Assets/image 7 (1).png');
  const addNew = require('../../Assets/R (1) 1.png');

  // const [username, setUsername] = useState('');
  // const [profilePic, setProfilePic] = useState('');
  // const [creationDate, setCreationDate] = useState('');
  // const [location, setLocation] = useState('');
  // const [exp, setExp] = useState('');
  // const [numFriends, setNumFriends] = useState('');

  return (
    <div className='profile'>
      <Row>
        <img src={heroImg} className='heroImg'></img>
        <Col className='col-4 greeting'>
          <p className='doubleFont'>Welcome to the tavern, {username}!</p>
        </Col>
      </Row>
      <Row className='mt-3'>
        <Col className='col-3'>
          <div className='profileBox'>
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
                <p>Edit Profile</p>
              </Row>
            </Container>
          </div>
        </Col>
        {

        }
        <Col>
          <Row>
            <Container className='mb-5'>
              <Row>
                <Col>
                <p>My Campaigns</p>
                </Col>
              </Row>
              <Row>
                <Col>
                {
                  <div>
                    <img src={parchment}/>
                    <img src={addNew} className='addNewImg'/>
                    <p className='darkTxt addNewTxt'>Add New</p>
                  </div>
                }
                </Col>
              </Row>
            </Container>
          </Row>
          <Row className='mt-5'>
          <Container>
              <Row>
                <Col>
                <p>Participating In</p>
                </Col>
              </Row>
              <Row>
                <Col>
                {
                  <div>
                    <img src={parchment}/>
                    <p className='darkTxt partTxtOne'>Not participating in a campaign yet?</p>
                    <p className='darkTxt partTxtTwo'> Maybe you can check the Campaigns page!</p>
                  </div>
                }
                </Col>
              </Row>
            </Container>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

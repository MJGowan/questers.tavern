import React, {useState} from 'react';
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
  

    // const [username, setUsername] = useState('');
    // const [mode, setMode] = useState('');
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
          <p className='doubleFont'>Welcome to the tavern,</p>
          <p className='doubleFont'>{username}!</p>
          </Col>
          <Col className='col-4'>
            <p className='doubleFont text-center mode'>Mode</p>
          </Col>
        </Row>
        <Row className='mt-3'>
          <Col className='col-3'>
            <div className='profileBox'>
              <div>
                <img src={profilePic} className='profilePic'></img>
              </div>
              <p>Username: {username}</p>
              <p>Account Created: {creationDate}</p>
              <p>Located in: {location}</p>
              <p>D&D Experience: {exp}</p>
              <p>Friends List: {numFriends}</p>
              <hr/>
              <p>Edit Profile</p>
            </div>
          </Col>
          {
            
          }
          <Col>
          <Row>

          </Row>
          <Row>

          </Row>
          </Col>
        </Row>
    </div>
  )
}

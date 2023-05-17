import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { checkToken } from '../../Services/DataService';

export default function Navbar() {
  const logo = require('../../Assets/logo.jpg');
  const [Username, setUsername] = useState<string>('');
  const [UserImage, setUserImage] = useState<string>('');
  const [LoggedIn, setLoggedIn] = useState<boolean>(false);
  let userData: { username?: string, userImage?: string } = {};

  useEffect(() => {

    if(!checkToken){
      setLoggedIn(false);
    }else {
      setLoggedIn(true);
      const getUserData = async () => {
        // userData = JSON.parse(sessionStorage.userData);
        console.log(userData);
        setUsername(userData.username!);
        setUserImage(userData.userImage!)
      }
      getUserData();
    }

  }, [])




  const [isHamburger, setIsHamburger] = useState('');
  useEffect(() => {
    const handleChange = () => {
      if (window.innerWidth <= 1024) {
        setIsHamburger('hamburger')
      } else {
        setIsHamburger('')
      }
    };
    handleChange();
    window.addEventListener("resize", handleChange);
    return () => window.removeEventListener("resize", handleChange);
  }, [])

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // use props to display username and profile pic when people are logged in
  return (
    <Container fluid>
      <Row className='navbarBg'>

      {
        isHamburger === 'hamburger' ? (
          <div>
            
              <Col className='col-6'>
                <img src={logo} className='logoImg'/>
              </Col>
              <Col className='d-flex justify-content-end'>
              <MenuIcon fontSize="large" className='menuIcon' />

              </Col>
            
          </div>
        ) : (
          <div>
              <Col>
                <Link to="/">
                  <img src={logo} />
                </Link>
                  <div className='d-flex justify-content-end doubleFont'>
                <Link to='/TavernBoard' className='navItems'>
                  Campaigns
                </Link>
                <Link to='/FAQs' className='navItems'>
                  FAQs
                </Link>
                <Link to="" onClick={handleShow} className='navItems'>
                  D&D Website
                </Link>
                {
                  LoggedIn ? (
                    <div>
                      <img src={UserImage}/>
                      <Link to='/Profile' className='navItems'>{Username}</Link>
                    </div>
                  ) : (
                    <Link to='/Login' className='navItems'>Sign Up/Login</Link>
                  )
                }
                  </div>
              </Col>
          </div >
        )
      }
      </Row>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Whoa there</Modal.Title>
        </Modal.Header>
        <Modal.Body>You're about to leave the site! Are you sure you want to go?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Stay
          </Button>
          <Button variant="primary" href="https://dnd.wizards.com/">
            Leave Site
          </Button>
        </Modal.Footer>
      </Modal>
    </Container >
  )
}
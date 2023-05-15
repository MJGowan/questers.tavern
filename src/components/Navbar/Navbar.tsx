import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';


export default function Navbar() {
  const logo = require('../../Assets/logo.jpg');
  const [username, setUsername] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

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

  // use props to display username and profile pic when people are logged in
  return (
    <Container fluid>
      {
        isHamburger === 'hamburger' ? (
          <div>
            <Row className='navbarBg'>
              <Col className='col-6'>
                <img src={logo} className='logoImg'/>
              </Col>
              <Col className='d-flex justify-content-end'>
              <MenuIcon fontSize="large" className='menuIcon' />

              </Col>
            </Row>
          </div>
        ) : (
          <div>
            <Row className='navbarBg'>
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
                <Link to="https://dnd.wizards.com/" className='navItems'>
                  D&D Website
                </Link>
                {
                  loggedIn ? (
                    <Link to='/Profile' className='navItems'>{username}</Link>
                  ) : (
                    <Link to='/Login' className='navItems'>Sign Up/Login</Link>
                  )
                }
                  </div>
              </Col>
            </Row >
          </div >
        )
      }

    </Container >
  )
}
import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Row, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import Login from '../Login/Login';
import TavernBoard from '../TavernBoard/TavernBoard';
import TableTavern from '../TavernBoard/TableTavern';
import CreateAccount from '../CreateAccount/CreateAccount';

export default function Navbar() {
  const logo = require('../../Assets/logo.jpg');
  let loggedIn = false;
  const [username, setUsername] = useState('');
  const [login, setLoggedIn] = useState('');

  const [isHamburger, setIsHamburger] = useState('');
  useEffect(() => {
    const handleChange = () => {
      if (window.innerWidth <= 1024 && window.innerWidth >= 769) {
        setIsHamburger('hamburger1');
      } else if (window.innerWidth <= 768) {
        setIsHamburger('hamburger2')
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
    <div>
      {
        isHamburger === 'hamburger1' ? (
          <div>
            <Row className='navbarBg'>
              <Col className='col-6'>
                <img src={logo} />
              </Col>
              <Col className='d-flex justify-content-end'>
                {
                  window.innerWidth <= 700 ? (
                    <MenuIcon fontSize="large" style={{ marginTop: '17%', marginRight: '5%', color: 'rgb(57, 86, 57)' }} />
                  ) : (
                    <MenuIcon fontSize="large" style={{ marginTop: '7%', marginRight: '5%', color: 'rgb(57, 86, 57)' }} />
                  )
                }

              </Col>
              {
                loggedIn ? (
                  <Col>
                    {/* props.username to display the active user */}
                    <p className='doubleFont navText'></p>
                  </Col>
                ) : (
                  <Col>
                    <Nav.Link className='doubleFont navText'><span onClick={() => <Login />}>Sign Up/Login</span></Nav.Link>
                  </Col>
                )
              }
            </Row>
          </div>
        ) : isHamburger === 'hamburger2' ? (
          <div>
            <Row className='navbarBg'>
              <Col className='col-7'>
                <img src={logo} className='logo' />
              </Col>
              <Col className='d-flex justify-content-end'>
                {
                  window.innerWidth <= 700 ? (
                    <MenuIcon fontSize="large" style={{ marginTop: '17%', marginRight: '5%', color: 'rgb(57, 86, 57)' }} />
                  ) : (
                    <MenuIcon fontSize="large" style={{ marginTop: '7%', marginRight: '5%', color: 'rgb(57, 86, 57)' }} />
                  )
                }

              </Col>
              {
                loggedIn ? (
                  <Col>
                    {/* props.username to display the active user */}
                    <p className='doubleFont navText'></p>
                  </Col>
                ) : (
                  <Col>
                    <Nav.Link className='doubleFont navText'><span onClick={() => <Login />}>Sign Up/Login</span></Nav.Link>
                  </Col>
                )
              }
            </Row >
          </div >
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

    </div >
  )
}

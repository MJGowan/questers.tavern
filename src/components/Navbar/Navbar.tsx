import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {
  const logo = require('../../Assets/logo.jpg');
  let loggedIn = false;

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
                    <MenuIcon fontSize="large" style={{marginTop: '17%', marginRight: '5%', color: 'rgb(57, 86, 57)'}}/>
                  ) : (
                    <MenuIcon fontSize="large" style={{marginTop: '7%', marginRight: '5%', color: 'rgb(57, 86, 57)'}}/>
                  )
                }
              
              </Col>
              {
                // loggedIn ? (
                //   <Col>
                //     {/* props.username to display the active user */}
                //     <p className='doubleFont navText'></p>
                //   </Col>
                // ) : (
                //   <Col>
                //     <p className='doubleFont navText'>Sign Up/Login</p>
                //   </Col>
                // )
              }
            </Row >
          </div>
        ) : isHamburger === 'hamburger2' ? (
          <div>
            <Row className='navbarBg'>
              <Col className='col-7'>
                <img src={logo} className='logo'/>
              </Col>
              <Col className='d-flex justify-content-end'>
                {
                  window.innerWidth <= 700 ? (
                    <MenuIcon fontSize="large" style={{marginTop: '17%', marginRight: '5%', color: 'rgb(57, 86, 57)'}}/>
                  ) : (
                    <MenuIcon fontSize="large" style={{marginTop: '7%', marginRight: '5%', color: 'rgb(57, 86, 57)'}}/>
                  )
                }
              
              </Col>
              {
                // loggedIn ? (
                //   <Col>
                //     {/* props.username to display the active user */}
                //     <p className='doubleFont navText'></p>
                //   </Col>
                // ) : (
                //   <Col>
                //     <p className='doubleFont navText'>Sign Up/Login</p>
                //   </Col>
                // )
              }
            </Row >
          </div >
        ) : (
          <div>
            <Row className='navbarBg'>
              <Col className='col-7'>
                <img src={logo} />
              </Col>
              <Col className='navMargin'>
                <p className='doubleFont navText'>Map</p>
              </Col>
              <Col className='navMargin'>
                <p className='doubleFont navText'>FAQs</p>
              </Col>
              <Col className='navMargin'>
                <p className='doubleFont navText'>D&D Website</p>
              </Col>
              {
                // loggedIn ? (
                //   <Col>
                //     {/* props.username to display the active user */}
                //     <p className='doubleFont navText'></p>
                //   </Col>
                // ) : (
                //   <Col>
                //     <p className='doubleFont navText'>Sign Up/Login</p>
                //   </Col>
                // )
              }
            </Row >
          </div >
        )
      }

    </div >
  )
}

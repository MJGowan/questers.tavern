import React, { useState, useEffect } from 'react'
import './Landing.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import heroImg from '../../Assets/image 10.png';
import tavernImg from '../../Assets/Lets get started (2).png';
import cardOneImg from '../../Assets/Rectangle 6.png';
import cardTwoImg from '../../Assets/Rectangle 7.png';

export default function Landing() {

  const [screenSize, setScreenSize] = useState('');
  useEffect(() => {
    const handleChange = () => {
      if (window.innerWidth <= 768) {
        setScreenSize('mobile');
        console.log("mobile");
      } else if (window.innerWidth <= 1024 && window.innerWidth >= 769) {
        setScreenSize('tablet');
        console.log("tablet")
      } else if (window.innerWidth <= 1440 && window.innerWidth >= 1025) {
        setScreenSize('laptop')
        console.log("laptop")
      } else if (window.innerWidth >= 1440) {
        setScreenSize('desktop')
        console.log("desktop")
      }
    };

    handleChange();
    window.addEventListener("resize", handleChange);

    return () => window.removeEventListener("resize", handleChange);
  }, []);

  return (
    <div className='landingBg'>
      <Row>
        <img className='heroImg' src={heroImg} />
      </Row>
      <p className='heroTxt text-center' id="heroTxt">Enter The Dungeon United</p>

      {
        // MOBILE
        screenSize === 'mobile' ?
          (
            <div>
              <Row className='mt-5'>
                <Col>
                  <img className='tavernImg mt-5' src={tavernImg} />
                  <Container className='tavernTxt text-center dwFont' id='tavernTxt'>
                    <p className='tavernTitle doubleFont mb-4'>Resources for New Players</p>
                    <Container>
                      <Row>
                        <Col className='col-1'></Col>
                        <Col>
                          <p>To get started, below is a helpful guide on navigating Quester's Tavern.</p>
                          <hr />
                          <p> Frequently Asked Questions and a link to the official Dungeons & Dragons website can be found at the top of the page.</p>
                        </Col>
                        <Col className='col-1'></Col>
                      </Row>
                    </Container>
                    <Button className='tavernBtn'>How to use Quester's Tavern</Button>
                  </Container>
                </Col>
              </Row>

              <Row className='d-flex justify-content-center mt-5'>
                <Col>
                  <Card style={{ width: '12rem' }} className='cardOne'>
                    <Card.Img variant="top" src={cardOneImg} className='cardImg' />
                    <Card.Body>
                      <Card.Title className='cardTitle'>An easy way to connect locally with your fellow adventurers</Card.Title>
                      <Card.Text className='cardTxt'>
                        Find people in your area looking to delve into a fantastic journey, or leap head first into a dungeon!
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>

                <Col>
                  <Card style={{ width: '12rem' }} className='cardTwo'>
                    <Card.Img variant="top" src={cardTwoImg} className='cardImg' />
                    <Card.Body>
                      <Card.Title className='cardTitle'>Create the ultimate campaign and let the heroes find you!</Card.Title>
                      <Card.Text className='cardTxt'>
                        There are heroes near you looking for their next campaign run, or maybe even their first!
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          ) :
          //TABLET
          screenSize === 'tablet' ?
            (
              <div>
                <Row>
                  <Col>
                    <img className='tavernImg' src={tavernImg} />
                    <Container className='tavernTxt text-center dwFont' id='tavernTxt'>
                      <p className='tavernTitle doubleFont'>Resources for New Players</p>
                      <Container>
                        <Row>
                          <Col className='col-3'></Col>
                          <Col>
                            <p>To get started, below is a helpful guide on navigating Quester's Tavern.</p>
                            <hr />
                            <p> Frequently Asked Questions and a link to the official Dungeons & Dragons website can be found at the top of the page.</p>
                          </Col>
                          <Col className='col-3'></Col>
                        </Row>
                      </Container>
                      <Button className='tavernBtn'>How to use Quester's Tavern</Button>
                    </Container>
                  </Col>
                </Row>

                <Row className='cardRow'>
                  <Col className='d-flex justify-content-center'>
                    <Card style={{ width: '15rem' }} className='cardOne'>
                      <Card.Img variant="top" src={cardOneImg} className='cardImg' />
                      <Card.Body>
                        <Card.Title className='cardTitle'>An easy way to connect locally with your fellow adventurers</Card.Title>
                        <Card.Text className='cardTxt'>
                          Find people in your area looking to delve into a fantastic journey, or leap head first into a dungeon!
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col className='d-flex justify-content-center'>
                    <Card style={{ width: '15rem' }} className='cardTwo'>
                      <Card.Img variant="top" src={cardTwoImg} className='cardImg' />
                      <Card.Body>
                        <Card.Title className='cardTitle'>Create the ultimate campaign and let the heroes find you!</Card.Title>
                        <Card.Text className='cardTxt'>
                          There are heroes near you looking for their next campaign run, or maybe even their first!
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </div>
            ) :
            // LAPTOP
            screenSize === 'laptop' ?
              (
                <div>
                  <p>HI</p>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <Row>
                    <Col>
                      <img className='tavernImg' src={tavernImg} />
                      <Container className='tavernTxt text-center dwFont' id='tavernTxt'>
                        <p className='tavernTitle doubleFont'>Resources for New Players</p>
                        <br />
                        <Container>
                          <Row>
                            <Col className='col-1'></Col>
                            <Col>
                              <p>To get started, below is a helpful guide on navigating Quester's Tavern.</p>
                              <hr />
                              <p> Frequently Asked Questions and a link to the official Dungeons & Dragons website can be found at the top of the page.</p>
                            </Col>
                            <Col className='col-1'></Col>
                          </Row>
                        </Container>
                        <Button className='tavernBtn'>How to use Quester's Tavern</Button>
                      </Container>
                    </Col>
                    <Col>
                      <Card style={{ width: '15rem' }} className='cardOne'>
                        <Card.Img variant="top" src={cardOneImg} className='cardImg' />
                        <Card.Body>
                          <Card.Title className='cardTitle'>An easy way to connect locally with your fellow adventurers</Card.Title>
                          <Card.Text className='cardTxt'>
                            Find people in your area looking to delve into a fantastic journey, or leap head first into a dungeon!
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>

                    <Col>
                      <Card style={{ width: '15rem' }} className='cardTwo'>
                        <Card.Img variant="top" src={cardTwoImg} className='cardImg' />
                        <Card.Body>
                          <Card.Title className='cardTitle'>Create the ultimate campaign and let the heroes find you!</Card.Title>
                          <Card.Text className='cardTxt'>
                            There are heroes near you looking for their next campaign run, or maybe even their first!
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </div>
              ) :
              // DESKTOP 
              (
                <div>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <Row>
                    <Col className='col-6'>
                      <img className='tavernImg' src={tavernImg} />
                      <Container className='tavernTxt text-center dwFont' id='tavernTxt'>
                        <p className='tavernTitle doubleFont'>Resources for New Players</p>
                        <br />
                        <Container>
                          <Row>
                            <Col className='col-1'></Col>
                            <Col>
                              <p>To get started, below is a helpful guide on navigating Quester's Tavern.</p>
                              <hr />
                              <p> Frequently Asked Questions and a link to the official Dungeons & Dragons website can be found at the top of the page.</p>
                            </Col>
                            <Col className='col-2'></Col>
                          </Row>
                        </Container>
                        <Button className='tavernBtn'>How to use Quester's Tavern</Button>
                      </Container>
                    </Col>

                    <Col>
                      <Card style={{ width: '18rem' }} className='cardOne'>
                        <Card.Img variant="top" src={cardOneImg} className='cardImg' />
                        <Card.Body>
                          <Card.Title>An easy way to connect locally with your fellow adventurers</Card.Title>
                          <Card.Text>
                            Find people in your area looking to delve into a fantastic journey, or leap head first into a dungeon!
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>

                    <Col>
                      <Card style={{ width: '18rem' }} className='cardTwo'>
                        <Card.Img variant="top" src={cardTwoImg} className='cardImg' />
                        <Card.Body>
                          <Card.Title>Create the ultimate campaign and let the heroes find you!</Card.Title>
                          <Card.Text>
                            There are heroes near you looking for their next campaign run, or maybe even their first!
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </div>
              )
      }
    </div>
  )
}

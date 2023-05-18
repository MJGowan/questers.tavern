import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Landing.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import heroImg from '../../Assets/image 10.png';
import tavernImg from '../../Assets/Lets get started (2).png';
import cardOneImg from '../../Assets/Rectangle 6.png';
import cardTwoImg from '../../Assets/Rectangle 7.png';

export default function Landing() {
  const [screenSize, setScreenSize] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleChange = () => {
      if (window.innerWidth <= 768) {
        setScreenSize('mobile');
      } else if (window.innerWidth <= 1024 && window.innerWidth >= 769) {
        setScreenSize('tablet');
      } else if (window.innerWidth <= 1440 && window.innerWidth >= 1025) {
        setScreenSize('laptop')
      } else if (window.innerWidth >= 1440) {
        setScreenSize('desktop')
      }
    };

    handleChange();
    window.addEventListener("resize", handleChange);

    return () => window.removeEventListener("resize", handleChange);
  }, []);

  return (
    <div className='landingBg'>
      <Row>
        <img src={heroImg} />
      </Row>
      <p className='heroTxt' id="heroTxt">Enter The Dungeon United</p>

      {
        // MOBILE
        screenSize === 'mobile' ?
          (
            <div>
              <Row className='mt-5'>
                <Col>
                  <img className='tavernImg mt-5' src={tavernImg} />
                  <Container className='text-center dwFont' id='tavernTxt'>
                    <p className='tavernTitle doubleFont mb-4'>Resources for New Players</p>
                    <Container>
                      <Row>
                        <Col className='col-1'></Col>
                        <Col>
                          <p className='tavernTxt'>To get started, below is a helpful guide on navigating Quester's Tavern.</p>
                          <hr />
                          <p className='tavernTxt'> Frequently Asked Questions and a link to the official Dungeons & Dragons website can be found at the top of the page.</p>
                        </Col>
                        <Col className='col-1'></Col>
                      </Row>
                    </Container>
                    <Button className='tavernBtn' onClick={() => navigate('/FAQs')}>How to use Quester's Tavern</Button>
                  </Container>
                </Col>
              </Row>

              <Row className='d-flex justify-content-center mt-3'>
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
                  <Container fluid>
                    <img className='tavernImg' src={tavernImg} />
                  </Container>
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
                      <Button className='tavernBtn' onClick={() => navigate('/FAQs')}>How to use Quester's Tavern</Button>
                    </Container>
                  </Col>
                </Row>

                <Row className='cardRow'>
                  <Col className='d-flex justify-content-center'>
                    <Card style={{ width: '30vw' }} className='cardOne'>
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
                    <Card style={{ width: '30vw' }} className='cardTwo'>
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
                <Container>
                  <Row className='laptopRow'>
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
                        <Button className='tavernBtn' onClick={() => navigate('/FAQs')}>How to use Quester's Tavern</Button>
                      </Container>
                    </Col>
                    <Col>
                      <Card style={{ width: '14rem' }} className='cardOne'>
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
                      <Card style={{ width: '14rem' }} className='cardTwo'>
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
                </Container>
              ) :
              // DESKTOP 
              (
                <Container>
                  <Row className='desktopRow'>
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
                        <Button className='tavernBtn' onClick={() => navigate('/FAQs')}>How to use Quester's Tavern</Button>
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
                </Container>
              )
      }
    </div>
  )
}
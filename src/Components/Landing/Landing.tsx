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
      <p className='landingHeroTxt' id="landingHeroTxt">Enter The Dungeon United</p>

      {
        // MOBILE
        screenSize === 'mobile' ?
          (
            <div>
              <Row className='mt-5'>
                <Col>
                  <img className='landingTavernImg mt-5' src={tavernImg} />
                  <Container className='text-center dwFont' id='landingTavernTxt'>
                    <p className='landingTavernTitle doubleFont mb-4'>Resources for New Players</p>
                    <Container>
                      <Row>
                        <Col className='col-1'></Col>
                        <Col>
                          <p className='landingTavernTxt'>To get started, below is a helpful guide on navigating Quester's Tavern.</p>
                          <hr />
                          <p className='landingTavernTxt'> Frequently Asked Questions and a link to the official Dungeons & Dragons website can be found at the top of the page.</p>
                        </Col>
                        <Col className='col-1'></Col>
                      </Row>
                    </Container>
                    <Button className='landingTavernBtn' onClick={() => navigate('/FAQs')}>How to use Quester's Tavern</Button>
                  </Container>
                </Col>
              </Row>

              <Row className='d-flex justify-content-center mt-3'>
                <Col>
                  <Card style={{ width: '12rem' }} className='landingCardOne'>
                    <Card.Img variant="top" src={cardOneImg} className='landingCardImg' />
                    <Card.Body>
                      <Card.Title className='landingCardTitle'>An easy way to connect locally with your fellow adventurers</Card.Title>
                      <Card.Text className='landingCardTxt'>
                        Find people in your area looking to delve into a fantastic journey, or leap head first into a dungeon!
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>

                <Col>
                  <Card style={{ width: '12rem' }} className='landingCardTwo'>
                    <Card.Img variant="top" src={cardTwoImg} className='landingCardImg' />
                    <Card.Body>
                      <Card.Title className='landingCardTitle'>Create the ultimate campaign and let the heroes find you!</Card.Title>
                      <Card.Text className='landingCardTxt'>
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
                    <img className='landingTavernImg' src={tavernImg} />
                  </Container>
                    <Container className='landingTavernTxt text-center dwFont' id='landingTavernTxt'>
                      <p className='landingTavernTitle doubleFont'>Resources for New Players</p>
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
                      <Button className='landingTavernBtn' onClick={() => navigate('/FAQs')}>How to use Quester's Tavern</Button>
                    </Container>
                  </Col>
                </Row>

                <Row className='landingCardRow'>
                  <Col className='d-flex justify-content-center'>
                    <Card style={{ width: '30vw' }} className='landingCardOne'>
                      <Card.Img variant="top" src={cardOneImg} className='landingCardImg' />
                      <Card.Body>
                        <Card.Title className='landingCardTitle'>An easy way to connect locally with your fellow adventurers</Card.Title>
                        <Card.Text className='landingCardTxt'>
                          Find people in your area looking to delve into a fantastic journey, or leap head first into a dungeon!
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col className='d-flex justify-content-center'>
                    <Card style={{ width: '30vw' }} className='landingCardTwo'>
                      <Card.Img variant="top" src={cardTwoImg} className='landingCardImg' />
                      <Card.Body>
                        <Card.Title className='landinGCardTitle'>Create the ultimate campaign and let the heroes find you!</Card.Title>
                        <Card.Text className='landingCardTxt'>
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
                  <Row className='landingLaptopRow'>
                    <Col>
                      <img className='landingTavernImg' src={tavernImg} />
                      <Container className='landingTavernTxt text-center dwFont' id='landingTavernTxt'>
                        <p className='landingTavernTitle doubleFont'>Resources for New Players</p>
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
                        <Button className='landingTavernBtn' onClick={() => navigate('/FAQs')}>How to use Quester's Tavern</Button>
                      </Container>
                    </Col>
                    <Col>
                      <Card style={{ width: '14rem' }} className='landingCardOne'>
                        <Card.Img variant="top" src={cardOneImg} className='landingCardImg' />
                        <Card.Body>
                          <Card.Title className='landingCardTitle'>An easy way to connect locally with your fellow adventurers</Card.Title>
                          <Card.Text className='landingCardTxt'>
                            Find people in your area looking to delve into a fantastic journey, or leap head first into a dungeon!
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>

                    <Col>
                      <Card style={{ width: '14rem' }} className='landingCardTwo'>
                        <Card.Img variant="top" src={cardTwoImg} className='landingCardImg' />
                        <Card.Body>
                          <Card.Title className='landingCardTitle'>Create the ultimate campaign and let the heroes find you!</Card.Title>
                          <Card.Text className='landingCardTxt'>
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
                  <Row className='landingDesktopRow'>
                    <Col className='col-6'>
                      <img className='landingTavernImg' src={tavernImg} />
                      <Container className='landingTavernTxt text-center dwFont' id='landingTavernTxt'>
                        <p className='landingTavernTitle doubleFont'>Resources for New Players</p>
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
                        <Button className='landingTavernBtn' onClick={() => navigate('/FAQs')}>How to use Quester's Tavern</Button>
                      </Container>
                    </Col>

                    <Col>
                      <Card style={{ width: '18rem' }} className='landingCardOne dwFont'>
                        <Card.Img variant="top" src={cardOneImg} className='landingCardImg' />
                        <Card.Body>
                          <Card.Title>An easy way to connect locally with your fellow adventurers</Card.Title>
                          <Card.Text>
                            Find people in your area looking to delve into a fantastic journey, or leap head first into a dungeon!
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>

                    <Col>
                      <Card style={{ width: '18rem' }} className='landingCardTwo dwFont'>
                        <Card.Img variant="top" src={cardTwoImg} className='landingCardImg' />
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
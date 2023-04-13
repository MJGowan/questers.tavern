import React from 'react'
import './Landing.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import heroImg from '../../Assets/image 10.png';
import tavernImg from '../../Assets/Lets get started (2).png';
import cardOneImg from '../../Assets/Rectangle 6.png';
import cardTwoImg from '../../Assets/Rectangle 7.png';

export default function Landing() {
  return (
    // Note to self: Fix the imports in App.css on all pages! Right now the fonts are not importing correctly
    <div>
      <Row>
        <img className='heroImg' src={heroImg} />
      </Row>
      <p className='heroTxt text-center' id="heroTxt">Enter The Dungeon United</p>
      {
        window.matchMedia("(min-width: 1440px)").matches ?
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
          ) : (
            <div></div>
          )
      }

      {
        window.matchMedia("(max-width: 1024px) and (min-width: 770px)").matches ?
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
        ) : (
          <div></div>
        )
      }

      {/*  */}
      {/*  */}

      {
        window.matchMedia("(max-width: 769px) and (min-width: 431px)") ?
        (
          <div>
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
        ) : (
          <div></div>
        )
      }

      {/*  */}
      {/*  */}

      {
        window.matchMedia("(max-width: 430px)").matches ?
          (
            <div>
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
              </Row>
              <br />
              <br />
              <Row className='d-flex justify-content-center'>
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
          ) : (
            <div></div>
          )
      }


    </div>
  )
}

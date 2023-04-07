import React from 'react'
import './Landing.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import heroImg from '../../Assets/image 10.png';
import tavernImg from '../../Assets/Lets get started.png';
import cardOneImg from '../../Assets/Rectangle 6.png';
import cardTwoImg from '../../Assets/Rectangle 7.png';

export default function Landing() {
  return (
    <div>
      <Row>
      <img className='heroImg' src={heroImg} />
      </Row>
      <br/>
      <Row>
        <Col className='col-6'>
          <img className='tavernImg' src={tavernImg} />
        </Col>

        <Col>
          <Card style={{ width: '18rem' }} className='cardOne'>
            <Card.Img variant="top" src={cardOneImg} className='cardImg'/>
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
            <Card.Img variant="top" src={cardTwoImg} className='cardImg'/>
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

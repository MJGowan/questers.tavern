import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import './TavernBoardPost.css';

export default function TavernBoardPost() {
  const logo1 = require("./tavernmen.jpg");
  const logo2 = require("./hauntedHouse.png");
  const logo3 = require("./image 7.png");
  const logo4 = require("./image 17.png");

  return (
    <Container fluid mx-0>
      <Row>
        <Col>
          <div className='title-container1'>
            <div className='image-container1'>
              <img src={logo1} alt='logo' className='logo-image' />
              <div className='text-overlay'>
                <h1 className='text text-center'>The Tavern Board</h1>
              </div>
              <div className='button-container d-none d-md-block'>
                <div className='d-flex ml-auto'>
                  <button className='button'>BackButton</button>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="card-container">
          <Card className="card"
            style={{
              width: "18rem",
              height: "530px",
              marginTop: "40px",
              marginLeft: "30px",
              backgroundColor: "#4A423F",
              border: "2px solid #FFA825",
            }}
          >
            <img src={logo2} alt='logo' className='logo-image' />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text
                style={{
                  fontSize: "20px",
                  color: "#D6BA73",
                  textAlign: "center",
                }}
              >
                The Haunted School House
                <ul>
                  <li></li>
                  <li></li>
                  <li></li> <li></li>
                </ul>
              </Card.Text>
              <button className='button33'>Join Message</button>
            </Card.Body>
          </Card>
        </Col>
        <Col style={{ paddingTop: "40px", whiteSpace: "nowrap" }} className='card-container1'>
          <Card>
            <Card.Body className='card-description'>DESCRIPTION</Card.Body>
          </Card>
          <h3 className='card-font-description'>DESCRIPTION</h3>
          <Card>
            <Card.Body className='card-description'>DIFFICULTY</Card.Body>
          </Card>
          <h3 className='card-font-description'>Beginners Campaign</h3>
          <Card>
            <Card.Body className='card-description'>LOCATION</Card.Body>
          </Card>
          <h3 className='card-font-description'>
            2721 Transworld Dr, Stockton CA 95206
          </h3>
          <Card>
            <Card.Body className='card-description'>PLAYERS</Card.Body>
          </Card>
          <ul className='card-font-description'>
            <li>RIng Bear</li>
            <li>RIng Bear</li>
            <li>RIng Bear</li>
          </ul>
        </Col>
        <Col style={{ paddingTop: "40px" }}>
          <div>
            <img
              src={logo3}
              alt='logo'
              className='logo-image'
              style={{ width: "90%", height: "auto" }}
            />
            {/* <img
              src={logo4}
              alt='second image'
              style={{
                position: "absolute",
                top: "110%",
                left: "81%",
                transform: "translate(-50%, -50%)",
                width: "20%",
                height: "50%",
              }}
            /> */}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

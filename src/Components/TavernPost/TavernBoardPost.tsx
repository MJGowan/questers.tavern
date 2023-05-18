import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import './TavernBoardPost.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TavernBoardPost() {
  const logo1 = require("../../Assets/tavernmen.jpg");
  const logo2 = require("../../Assets/hauntedHouse.png");
  const logo3 = require("../../Assets/image 7.png");
  const logo4 = require("../../Assets/image 17.png");

  let navigate = useNavigate();

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
                  <button
                    className='cardbutton'
                    style={{
                      width: "95%",
                      marginLeft: "10px",
                      marginRight: "10px",
                      borderRadius: "10px",
                      height: "50px",
                      padding: "10px 20px",
                      backgroundColor: "#4A423F",
                      color: "white",
                    }}
                    onClick={() => navigate(-1)}
                  >
                    BACK
                  </button>{" "}
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className='card-container'>
          <Card
            className='card'
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
              <Card.Title></Card.Title>
              <Card.Text
                style={{
                  fontSize: "23px",
                  color: "#D6BA73",
                  textAlign: "center",
                }}
              >
                The Haunted School House
              </Card.Text>
              <button
                className='cardbutton'
                style={{
                  width: "75%",
                  marginLeft: "40px",
                  marginRight: "10px",
                  borderRadius: "10px",
                  height: "50px",
                  padding: "10px 20px",
                  backgroundColor: "#4A423F",
                  color: "white",
                }}
              >
                 Create Campaigns
              </button>{" "}
            </Card.Body>
          </Card>
        </Col>
        <Col
          style={{ paddingTop: "40px", whiteSpace: "nowrap" }}
          className='card-container1'
        >
          <Card>
            <Card.Body className='card-description'>DESCRIPTION</Card.Body>
          </Card>
          <h3 className='card-font-description'></h3>
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
            <li>Lord of the Swords</li>
            <li>Tremble at My Presence</li>
            <li>Tremble at My Presence</li>
            <li>Tremble at My Presence</li>
          </ul>
        </Col>
        <Col style={{ paddingTop: "40px" }}>
          <div style={{ position: "relative" }}>
            <img
              src={logo3}
              alt='logo'
              className='logo-image'
              style={{ width: "90%", height: "auto" }}
            />
            <img
              src={logo4}
              alt='logo'
              className='logo-image'
              style={{
                width: "50%",
                height: "auto",
                position: "absolute",
                top: "40%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

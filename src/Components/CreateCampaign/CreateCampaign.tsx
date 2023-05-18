import React from 'react'
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import '../CreateCampaign/CreateCampaign.css'


export default function CreateCampaign() {

const logo1 = require("../../Assets/tavernmen.jpg");
const logo2 = require("../../Assets/hauntedHouse.png");
const logo3 = require("../../Assets/image 7.png");
const logo4 = require("../../Assets/image 17.png");

const handleButtonClick = () => {
  // Handle the button click event here
  console.log("Button clicked!");
};

return (
  <Container fluid mx-0>
    <Row>
      <Col>
        <div className='title-container1'>
          <div className='image-container1'>
            <img src={logo1} alt='logo' className='logo-image' />
            <div className='text-overlay'>
              <h1 className='text text-center'>The Tavern Board</h1>
              <h1 className='text text-center'>Create Campaign</h1>
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
      <Col
        style={{ paddingTop: "40px", whiteSpace: "nowrap" }}
        className='card-container1'
      >
        <Card>
          <Card.Body className='card-description'>CAMPAIGN NAME</Card.Body>
        </Card>
        <h3 className='card-font-description'></h3>
        <Card>
          <Card.Body className='card-description'>CAMPAIGN IMAGE 1</Card.Body>
        </Card>
        <h3 className='card-font-description'></h3>
        <Card>
          <Card.Body className='card-description'>CAMPAIGN IMAGE 2</Card.Body>
        </Card>
        <h3 className='card-font-description'></h3>
        <Card>
          <Card.Body className='card-description'>CAMPAIGN LOCATION</Card.Body>
        </Card>
        <Card>
          <Card.Body className='card-description'>
            CAMPAIGN DIFFICULTY
          </Card.Body>
        </Card>
        <Card>
         
          <Card.Body className='card-description'>
            Description
          </Card.Body>
        </Card>
      </Col>
      <Col
        style={{ paddingTop: "40px", whiteSpace: "nowrap" }}
        className='card-container1'
      >
        <Card>
          <Card.Body>
            <input type='text' />
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <input type='text' />
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <input type='text' />
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <input type='text' />
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <input type='text' />
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <input type='text' />
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row>
      <Row>
        <button
          className='cardbutton'
          style={{
            width: "55%",
            marginLeft: "10px",
            marginRight: "10px",
            borderRadius: "10px",
            height: "60px",
            padding: "10px 20px",
            backgroundColor: "#4A423F",
            color: "white",
          }}
        >
          CREATE CAMPAIGN
        </button>{" "}
      </Row>
    </Row>
  </Container>
);
}



      // <Link to='/TavernBoardPost'>More Info </Link>;

import React, { useState } from 'react'
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import '../CreateCampaign/CreateCampaign.css'
import { CreateCampaign } from '../../Services/DataService';


export default function CreateUserCampaign() {

const logo1 = require("../../Assets/tavernmen.jpg");
const logo2 = require("../../Assets/hauntedHouse.png");
const logo3 = require("../../Assets/image 7.png");
const logo4 = require("../../Assets/image 17.png");

const [Campaignname, setCampaignname] = useState<string>('') ; 
const [Campaignimage, setCampaignimage] = useState(logo4);
const [Campaignimagetwo, setCampaignimagetwo] = useState(logo2);
const [Campaigndate, setCampaigndate] = useState<string>("");
const [Campaignlocation, setCampaignlocation] = useState<string>("");
const [Campaigndescription, setCampaigndescription] = useState<string>("");
const [Campaigndifficulty, setCampaigndifficulty] = useState<string>("");
const [Campaigntags, setCampaigntags] = useState<string>("");


const handleSubmit = async () => {
 if (!Campaignname || !Campaignimage || !Campaignimagetwo || !Campaigndate || Campaignlocation || Campaigndescription || Campaigndifficulty || Campaigntags){
  alert("Could not create campaign, missing information");
 } else{
  let campaignData: object = {
   Id: 0, 
   UserID: 0, 
   Campaignname, 
   Campaignimage,
   Campaignimagetwo,
   Campaigndate,
   Campaignlocation, 
   Campaigndescription,
   Campaigndifficulty,
   Campaigntags
  };

  let isCampaignCreated = await CreateCampaign(campaignData);

  if (isCampaignCreated){
   alert("Campaign was successfully created.");
  }else {
   alert("Could not create Campaign, missing information.");
  }
  console.log(campaignData);
 }
}

const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
  let reader = new FileReader();
  const file = e.target.files?.[0];
  if (file) {
    reader.onloadend = (event) => {
      console.log(reader.result);
      setCampaignimage(event.target?.result);
      setCampaignimagetwo(event.target?.result);

    };
    reader.readAsDataURL(file);
  }
};

const handlePicChange = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
};





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
          <Card.Body className='card-description'>Description</Card.Body>
        </Card>
      </Col>
      <Col
        style={{ paddingTop: "40px", whiteSpace: "nowrap" }}
        className='card-container1'
      >
        <Card>
          <Card.Body>
            <input
              onChange={({ target: { value } }) => setCampaignname(value)}
              type='text'
            />
          </Card.Body>
        </Card>
        <Card>
          <Form onSubmit={handlePicChange}>
            <Form.Group controlId='formFile' className='mb-3'>
              <Form.Control
                onChange={handleImage}
                type='file'
                accept='image/png, image/jpeg, image/jpg, image/jpe'

              />
            </Form.Group>
          </Form>
        </Card>
        <Card>
          <Form onSubmit={handlePicChange}>
            <Form.Group controlId='formFile' className='mb-3'>
              <Form.Control
                onChange={handleImage}
                type='file'
                accept='image/png, image/jpeg, image/jpg, image/jpe'
              />
            </Form.Group>
          </Form>
        </Card>
        <Card>
          <Card.Body>
            <input
              onChange={({ target: { value } }) => setCampaigndate(value)}
              type='text'
            />
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <input
              onChange={({ target: { value } }) => setCampaignlocation(value)}
              type='text'
            />
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <input
              onChange={({ target: { value } }) =>
                setCampaigndescription(value)
              }
              type='text'
            />
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <input
              onChange={({ target: { value } }) => setCampaigndifficulty(value)}
              type='text'
            />
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row>
      <Row>
        <button
         onClick={handleSubmit}
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

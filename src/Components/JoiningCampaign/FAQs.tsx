import React, { useState } from "react"
import TheNavBar from "./TheNavBar"
import { Container, Row, Col, Card, } from "react-bootstrap";



export default function FAQs(){
  //declaring a new state variable 


 const campaign = require("../JoiningCampaign/campaign.png");
  

 return (
   <Container fluid mx-0>
     <Row>
       <Col>
         <div className='title-container1'>
           <div className='image-container1'>
             <img src={campaign} alt='logo' className='campaign-logo-image' />
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
       <Col>
         <div style={{ textAlign: "center" }}>
           <h1
             style={{
               color: "#D6BA73",
               fontFamily: "IM Fell DW Pica",
               textShadow: "2px 2px #000000",
             }}
           >
             USING QUESTER'S TAVERN
           </h1>
         </div>
       </Col>
     </Row>
     <Row>
       <Col>
         <Card
           style={{
             width: "19rem",
             height: "470px",
             backgroundColor: "#302C2B",
             border: "2px solid #FFA825",
           }}
         >
           <Card.Body>
             <Card.Title
               style={{ color: "#D6BA73", textAlign: "center" }}
             ></Card.Title>
             <Card.Text style={{ color: "#D6BA73", textAlign: "center" }}>
               In the world of Dungeons & Dragons, you are an adventurer in an
               open world. You will be accompanied by a party of fellow
               adventurers and your Dungeon Master ( The campaigns referee and
               Story Teller ) will walk you through the quest you will be
               joining in on. The flow of the game is up to the decisions you
               and your party make. Whether you decide to fight, investigate,
               talk with NPCs and so on relies on what you and your party choose
               to do! We can start you off by creating your character. This way
               you can see where you will fit in to the greater world of D&D as
               well as have an idea for what your character’s motivations would
               be.
             </Card.Text>
           </Card.Body>
         </Card>
       </Col>
       <Col>
         <Card
           style={{
             width: "20rem",
             height: "470px",
             backgroundColor: "#302C2B",
             borderRadius: "10px",
             border: "2px solid #FFA825",
           }}
         >
           <Card.Body>
             <Card.Title
               style={{
                 color: "#D9D9D9",
                 fontSize: "24px",
                 border: "2px solid #FFA825",
                 textAlign: "center",
                 padding: "10px",
               }}
               onClick={() => {
                 console.log("Card.Title clicked");
               }}
             >
               HOW TO PLAY
             </Card.Title>
             <Card.Title
               style={{
                 color: "#D9D9D9",
                 fontSize: "24px",
                 border: "2px solid #FFA825",
                 textAlign: "center",
                 padding: "10px",
               }}
               onClick={() => {
                 console.log("Card.title Clicked");
               }}
             >
               CREATING A CHARACTER
             </Card.Title>
             <Card.Title
               style={{
                 color: "#D9D9D9",
                 fontSize: "24px",
                 border: "2px solid #FFA825",
                 textAlign: "center",
                 padding: "10px",
               }}
               onClick={() => {
                 console.log("Card.title Clicked");
               }}
             >
               JOINING A CAMPAIGN
             </Card.Title>
             <Card.Title
               style={{
                 color: "#D9D9D9",
                 fontSize: "24px",
                 border: "2px solid #FFA825",
                 textAlign: "center",
                 padding: "10px",
               }}
               onClick={() => {
                 console.log("card.title Clicked");
               }}
             >
               REQUIREMENTS TO PLAY
             </Card.Title>
             <Card.Title
               style={{
                 color: "#D9D9D9",
                 fontSize: "24px",
                 border: "2px solid #FFA825",
                 textAlign: "center",
                 padding: "10px",
               }}
               onClick={() => {
                 console.log("card.title Clicked");
               }}
             >
               FURTHER QUESTIONS
             </Card.Title>
           </Card.Body>
         </Card>
       </Col>
       <Col>
         <Card
           style={{
             width: "19rem",
             height: "470px",
             backgroundColor: "#302C2B",
             borderRadius: "10px",
             border: "2px solid #FFA825",
           }}
         >
           <Card.Body>
             <Card.Title
               style={{ color: "#D6BA73", textAlign: "center" }}
              //  onClick={() => {
              //    console.log("Card.Title clicked");
              //    setShowInformation(true);
              //  }}
             >
               When Joining the campaign, reflect on your experience and
               register accordingly.{" "}
             </Card.Title>
             
             <Card.Text style={{ color: "#D6BA73", textAlign: "center" }}>
               Beginner’s Campaign Level 1-5 Campaign Level 5-10 Campaign Level
               10-15 Campaign Level 15-20 Campaign As you gain experience and
               level up your character, you may be open to trying increasingly
               difficult campaigns.
             </Card.Text>
             <Card.Text style={{ color: "#D6BA73", textAlign: "center" }}>
               <ul>
                 <li>Beginner’s Campaign</li>
                 <li>Level 1-5 Campaign Level</li>
                 <li>5-10 Campaign Level</li>
                 <li>10-15 Campaign Level 15-20</li>
                 <li>Level 15-20</li>
               </ul>
               Campaign As you gain experience and level up your character, you
             </Card.Text>
           </Card.Body>
         </Card>
       </Col>
     </Row>
   </Container>
 );
}
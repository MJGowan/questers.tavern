import React, { useState } from "react"
import { useNavigate } from 'react-router-dom'
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import './FAQs.css';


export default function FAQs(){
  //declaring a new state variable 

  const [info, setInfo] = useState("Initial content");
  const [character, setCharacter] = useState("content")
  const [join, setJoin] = useState("content");
  const [plays, setPlays] = useState("content");
  const [fqs, setFqs] = useState("content");





let navigate = useNavigate();
 const campaign = require("../../Assets/campaign.png");
  

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
                 </button>
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
                 cursor: "pointer",
               }}
               onClick={() => {
                 setInfo(
                   "When joining a campaign, reflect on your experience and register accordingly. if you are new, perhaps you'd join the beginner's campaigns. If you've got some experience under your belt you might go for the level 1-5, or 5-10 campaigns. Ther are ordered as follow:"
                 );
                 // set other states to empty
                 setCharacter("");
                 setJoin("");
                 setPlays("");
                 setFqs("");
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
                 cursor: "pointer",
               }}
               onClick={() => {
                 setCharacter("CREATE CHARACTER");
                 setInfo("");
                 setJoin("");
                 setPlays("");
                 setFqs("");
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
                 cursor: "pointer",
               }}
               onClick={() => {
                 setJoin(`<ul>
          <li>Beginner’s Campaign</li>
          <li>Level 1-5 Campaign Level</li>
          <li>5-10 Campaign Level</li>
          <li>10-15 Campaign Level 15-20</li>
          <li>Level 15-20</li>
        </ul>`);
         
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
                 cursor: "pointer",
               }}
               onClick={() => {
                 setPlays(
                   "Interested in playing? We've pulled together resources to get you started, create a D&D Beyond account to begin! Dungeons & Dragons takes you and your friends on epic journeys. Become characters you create, battle deadly foes, uncover secrets, find treasure, and make memories that last a lifetime."
                 );
          
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
                 cursor: "pointer",
               }}
               onClick={() => {
                 setFqs(
                   "Looking to spark your imagination while having fun with friends? Dungeons & Dragons is a collaborative roleplaying game for players of all ages. Gather your friends to vanquish mighty monsters, embark on epic quests, and tell legendary stories filled with fantasy and fun.");
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
             cursor: "pointer",
           }}
         >
           <Card.Body>
             <Card.Title style={{ color: "#D6BA73", textAlign: "center" }}>
               {info}
             </Card.Title>

             <Card.Text style={{ color: "#D6BA73", textAlign: "center" }}>
               {character}
             </Card.Text>
             <Card.Text style={{ color: "#D6BA73", textAlign: "center" }}>
               {join}
             </Card.Text>
             <Card.Text style={{ color: "#D6BA73", textAlign: "center" }}>
               {plays}
             </Card.Text>
             <Card.Text style={{ color: "#D6BA73", textAlign: "center" }}>
               {fqs}
             </Card.Text>
           </Card.Body>
         </Card>
       </Col>
     </Row>
   </Container>
 );
}
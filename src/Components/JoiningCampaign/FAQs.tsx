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
             width: "23rem",
             height: "600px",
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
             width: "24rem",
             height: "600px",
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
                   "Playing Dungeons & Dragons comes down to Actions. Dice Rolls and your character Stats. " +
                     "1. Actions " +
                     "During the duration of the game, the dungeon master will set the scene for your adventure. They may provide you NPCs (Non-Playable Characters) to interact with, or environment interaction such as locked doors or hidden panels. You often roll dice to see how well you fare. " +
                     "2. Dice Rolls" +
                     "With actions above or even attacks you roll dice to see how well you do. It may seem like how well you fare is up to chance but that is where your stats play into the equation."
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
                 setCharacter(
                  "When creating a character we take into consideration this characters upbringing, outlook on life and experience adventuring. All of this comes into play during your time playing Dungeons & Dragons.The Create A Character screen will provide drop downs with options for each aspect of your character such as level, race and class. You will learn more about how these have an effect on your gameplay in the how to play section.");
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
                 setCharacter("");
                 setInfo("");
                 setJoin("tested");
                 setPlays("");
                 setFqs("");
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
                  setCharacter("");
                  setInfo("");
                  setJoin("");
                  setPlays("plays");
                  setFqs("");
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
                   setCharacter("");
                   setInfo("");
                   setJoin("");
                   setPlays("");
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
             width: "22rem",
             height: "600px",
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
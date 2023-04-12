import React from "react";
import { Container, Row, Col, Card, Button, } from "react-bootstrap";


export default function TBoardPost() {

 const logo1 = require("./tavernmen.jpg");
 const logo2 = require("./hauntedHouse.png")

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
       <Col>
         <Card
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
     </Row>
   </Container>
 );
}

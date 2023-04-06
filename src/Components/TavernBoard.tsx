import React from "react";
import { Container, Row, Col } from "react-bootstrap"


export default function TavernBoard () {

const logo = require('../Assets/tavernmen.jpg');
const logo1 = require('../Assets/tavernbackground.webp');
 return (
   <Container fluid className="bg-brown">
     <Row>
       <Col>
         <div className='title-container'>
           <div className='image-container'>
             <img src={logo} alt='logo' className='logo-image' />
             <div className='text-overlay'>
               <h1 className='text'>The Tavern Board</h1>
             </div>
             <div className='button-container'>
               <div className='d-flex ml-auto'>
                 <button className='button'>MY LOCATION</button>
                 <button className='button'>FILTER</button>
                 <button className='button'>BackButton</button>
               </div>
             </div>
           </div>
         </div>
       </Col>
     </Row>
     <Row>
       <div className="title-container2">
         <img src={logo1} alt='logo1' className='logo-image1' />
       </div>
     </Row>
   </Container>
 );
}
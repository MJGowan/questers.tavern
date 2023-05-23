import React from "react";
import { Container, Row, Col, } from "react-bootstrap"
import TableTavern from "./TableTavern";
import './Tavern.css';
import { useNavigate } from 'react-router-dom';

export default function TavernBoard () {
let navigate = useNavigate();
// const logo = require('../Assets/tavernmen.jpg');
// const logo1 = require('../Assets/doubledragon.png');
 return (
   <Container fluid className='bg-brown'>
     <Row>
       <Col>
         <div className='TB-title-container'>
           <div className='image-container'>
             {/*<img src={logo} alt='logo' className='logo-image' />*/}
             <div className='text-overlay'>
               <h1 className='text text-center'>
                 <span className='title-text'>The Tavern Board</span>
               </h1>
             </div>
             <div className='button-container d-none d-md-block'>
               <div className='d-flex flex-column flex-md-row ml-auto'>
                 <button className='TB-3-Buttons' onClick={() => navigate(-1)}>
                   LOCATION
                 </button>{" "}
                 <button className='TB-3-Buttons' onClick={() => navigate(-1)}>
                   FILTER
                 </button>{" "}
                 <button className='TB-3-Buttons' onClick={() => navigate(-1)}>
                   BACK
                 </button>
               </div>
             </div>
           </div>
         </div>
       </Col>
     </Row>
     <Row>
       <div className='title-containerDos'>
         {/*} <img src={logo1} alt='logo1' className='logo-image1' />*/}
       </div>
     </Row>
     <Row className='mt-md-5'>
       <Col xs={12} md={10} className='mx-auto'>
         <TableTavern />
       </Col>
     </Row>
   </Container>
 );
}

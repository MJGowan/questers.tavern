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
         <div className='title-container'>
           <div className='image-container'>
             {/*<img src={logo} alt='logo' className='logo-image' />*/}
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
                   LOCATION
                 </button>{" "}
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
                   FILTER
                 </button>{" "}
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

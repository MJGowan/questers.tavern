import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Landing from './Components/Landing/Landing';
import CreateCharacter from './Components/CreateCharacter/CreateCharacter';
import Profile from './Components/Profile/Profile';
import CreateAccount from './Components/CreateAccount/CreateAccount';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';

function App() {

  return (
    <div>
        <Navbar/>
        {/* <CreateCampaign/> */}
        <CreateCharacter/>
        
    </div>
  );

}

export default App;

import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Landing from './components/Landing/Landing';
import Character from './components/Character/Character';
import Profile from './components/Profile/Profile';
import CreateAccount from './components/CreateAccount/CreateAccount';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';

function App() {

  return (
    <div>
        <Navbar/>
        <Profile/>
        
    </div>
  );

}

export default App;

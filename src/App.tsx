import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import TavernBoard from './Components/TavernBoard';

function App() {
  const logo = require('./Assets/logo.jpg');
  let loggedIn = false;
  // use props to display username and profile pic when people are logged in
  return (
    <div>
      <h1>navBar</h1>
      <TavernBoard />
    </div>
  );






}

export default App;

import React, { useState } from 'react';
import './CreateCharacter.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export default function CreateCharacter() {
  const heroImg = require('../../Assets/image 13.png');
  const [name, setName] = useState('');
  const [level, setLevel] = useState('');
  const [desc, setDesc] = useState('');
  const [charImg, setCharImg] = useState('');
  const [race, setRace] = useState('');
  const [charClass, setCharClass] = useState('');
  const [background, setBackground] = useState('');
  const [alignment, setAlignment] = useState('');

  return (
    <div className='bg'>
      <div>
        <Row>
          <Col>
            <img src={heroImg} style={{ width: '100vw' }}></img>
            <p className='title doubleFont'>CHARACTER CREATOR</p>
          </Col>
        </Row>
      </div>
      <Container className='darkBox'>
        
          <Row>
            <Col className='col-3'>
              <p>Character Image:</p>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Control type="file" />
              </Form.Group>
            </Col>
            <Col className='col-3'>
              <p>Name:</p>
              <input className='nameInput input mb-3'></input>
              
            </Col>
            <Col>
            <p>Race:</p>
              <Form.Select aria-label="Default select example">
                <option>Race</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Col>
            <Col>
            <p>Class:</p>
              <Form.Select aria-label="Default select example">
                <option>Class</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Col>
          </Row>
          <Row className='mt-5'>
            
            <Col className='col-3'>
              <p>Character Description:</p>
              <input className='desc input'></input>
            </Col>
            <Col className='col-3'>
            <p>Level:</p>
              <input className='lvlInput input' placeholder='1-20'></input>
            </Col>
           
            <Col>
            <p>Background:</p>
              <Form.Select aria-label="Default select example">
                <option>Background</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Col>
            <Col>
            <p>Alignment:</p>
              <Form.Select aria-label="Default select example">
                <option>Alignment</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Col>
          </Row>
          <Row>
            <Col className='col-9'></Col>
            <Col>
              <Button className='contBtn btn'>Continue</Button>
            </Col>
            <Col>
              <Button className='backBtn btn'>Back</Button>
            </Col>
          </Row>
        
      </Container>
    </div>
  )
}

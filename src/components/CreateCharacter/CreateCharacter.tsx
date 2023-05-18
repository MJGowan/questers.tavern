import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateCharacter.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { CharacterInfo } from '../../Services/DataService';
import { CreateCharacterBe } from '../../Services/DataService';

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
  
  const [raceDesc, setRaceDesc] = useState('');
  const [classDesc, setClassDesc] = useState('');
  const [bgDesc, setBgDesc] = useState('');
  const [alignDesc, setAlignDesc] = useState('');

  let navigate = useNavigate();

  let characterData: any = {};
  useEffect(() => {
    const getCharacterData = async () => {
      // characterData = JSON.parse(sessionStorage.characterData);
      setRaceDesc(characterData.raceDesc!);
      setClassDesc(characterData.classDesc!);
      setBgDesc(characterData.bgDesc!);
      setAlignDesc(characterData.alignDesc!);
    }
    getCharacterData();
  }, [])


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
              <input className='nameInput inputs mb-3'></input>
              
            </Col>
            <Col>
            <p>Race:</p>
              <Form.Select aria-label="Default select example">
                <option>Race</option>
                <option value="1">Dragonborn</option>
                <option value="2">Dwarf</option>
                <option value="3">Elf</option>
                <option value="4">Gnome</option>
                <option value="5">Half-Elf</option>
                <option value="6">Half-Orc</option>
                <option value="7">Halfling</option>
                <option value="8">Human</option>
                <option value="9">Tiefling</option>
              </Form.Select>
              <Container className='infoBoxes'>
                <Row>
                  <Col>
                  <p>{raceDesc}</p>
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col>
            <p>Class:</p>
              <Form.Select aria-label="Default select example">
                <option>Class</option>
                <option value="1">Barbarian</option>
                <option value="2">Bard</option>
                <option value="3">Cleric</option>
                <option value="4">Druid</option>
                <option value="5">Fighter</option>
                <option value="6">Monk</option>
                <option value="7">Paladin</option>
                <option value="8">Ranger</option>
                <option value="9">Rogue</option>
                <option value="10">Sorcerer</option>
                <option value="11">Warlock</option>
                <option value="12">Wizard</option>
              </Form.Select>
              <Container className='infoBoxes'>
                <Row>
                  <Col>
                  <p>{classDesc}</p>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
          <Row className='mt-5'>
            
            <Col className='col-3'>
              <p>Character Description:</p>
              <input className='desc inputs'></input>
            </Col>
            <Col className='col-3'>
            <p>Level:</p>
              <input className='lvlInput inputs' placeholder='1-20'></input>
            </Col>
           
            <Col>
            <p>Background:</p>
              <Form.Select aria-label="Default select example">
                <option>Background</option>
                <option value="1">Acolyte</option>
                {/* <option value="2">Two</option>
                <option value="3">Three</option> */}
              </Form.Select>
              <Container className='infoBoxes'>
                <Row>
                  <Col>
                  <p>{bgDesc}</p>
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col>
            <p>Alignment:</p>
              <Form.Select aria-label="Default select example">
                <option>Alignment</option>
                <option value="1">Lawful-Good</option>
                <option value="2">Lawful-Neutral</option>
                <option value="3">Lawful-Evil</option>
                <option value="1">Neutral-Good</option>
                <option value="2">Neutral</option>
                <option value="3">Neutral-Evil</option>
                <option value="1">Chaotic-Good</option>
                <option value="2">Chaotic-Neutral</option>
                <option value="3">Chaotic-Evil</option>
              </Form.Select>
              <Container className='infoBoxes'>
                <Row>
                  <Col>
                  <p>{alignDesc}</p>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
          <Row>
            <Col className='col-9'></Col>
            <Col>
              <Button className='contBtn btn'>Save</Button>
            </Col>
            <Col>
              <Button className='backBtn btn' onClick={() => navigate(-1)}>Back</Button>
            </Col>
          </Row>
        
      </Container>
    </div>
  )
}
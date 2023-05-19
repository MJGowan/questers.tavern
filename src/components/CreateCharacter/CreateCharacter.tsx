import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateCharacter.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { CharacterInfo } from '../../Services/DataService';
import { CreateCharacterBe } from '../../Services/DataService';

export default function CreateCharacter() {

  const characterPic = require('../../Assets/profilepic.png');

  const heroImg = require('../../Assets/image 13.png');
  const [name, setName] = useState<string>('');
  const [level, setLevel] = useState<string>('');
  const [desc, setDesc] = useState<string>('');
  const [charImg, setCharImg] = useState(characterPic);
  const [race, setRace] = useState<string>('');
  const [charClass, setCharClass] = useState<string>('');
  const [background, setBackground] = useState<string>('');
  const [alignment, setAlignment] = useState<string>('');
  
  const [raceDesc, setRaceDesc] = useState<string>('');
  const [classDesc, setClassDesc] = useState<string>('');
  const [bgDesc, setBgDesc] = useState<string>('');
  const [alignDesc, setAlignDesc] = useState<string>('');

  let navigate = useNavigate();

  const handleSubmit = async () => {
    if(!name || !level || !desc || !charImg || !race || !charClass || !background || !alignment){
      alert("Could not create character, missing information.")
    }else{
      let charData: object = {
        name,
        level,
        desc,
        charImg,
        race,
        charClass,
        background,
        alignment
      }
      let isCharacterCreated = await CreateCharacterBe(charData);
      if(isCharacterCreated){
        alert('Character was successfully created.');
        navigate('/Profile');
      }else{
        alert("Could not create character.");
      }

    }
  }


  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    let reader = new FileReader();
    const file = e.target.files?.[0];
    if (file) {
        reader.onloadend = (event) => {
            console.log(reader.result);
            setCharImg(event.target?.result);
        }
        reader.readAsDataURL(file);
    }
}

const handlePicChange = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }



  // let characterData: any = {};
  
  // useEffect(() => {
    // const getCharacterData = async () => {
      // characterData = JSON.parse(sessionStorage.characterData);
      // setRaceDesc(characterData.raceDesc!);
      // setClassDesc(characterData.classDesc!);
      // setBgDesc(characterData.bgDesc!);
      // setAlignDesc(characterData.alignDesc!);
    // }
    // getCharacterData();
  // }, [])

  const raceChange = async () => {

  }
  const classChange = async () => {

  }
  const bgChange = async () => {

  }
  const alignChange = async () => {
    
  }


  return (
    <div className='bg'>
      <div>
        <Row>
          <Col>
            <img src={heroImg} style={{ width: '100vw' }}></img>
            <p className='landingTitle doubleFont'>CHARACTER CREATOR</p>
          </Col>
        </Row>
      </div>
      <Container className='landingDarkBox'>
        
          <Row>
            <Col className='col-3'>
              <p>Character Image:</p>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Control type="file" />
              </Form.Group>
            </Col>
            <Col className='col-3'>
              <p>Name:</p>
              <input className='landingNameInput landingInputs mb-3'></input>
              
            </Col>
            <Col>
            <p>Race:</p>
              <Form.Select aria-label="Default select example">
                <option value="dragonborn">Dragonborn</option>
                <option value="dwarf">Dwarf</option>
                <option value="elf">Elf</option>
                <option value="gnome">Gnome</option>
                <option value="half-elf">Half-Elf</option>
                <option value="half-orc">Half-Orc</option>
                <option value="halfling">Halfling</option>
                <option value="human">Human</option>
                <option value="tiefling">Tiefling</option>
              </Form.Select>
              <Container className='landingInfoBoxes'>
                <Row>
                  <Col>
                  <p>{raceDesc}</p>
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col>
            <p>Class:</p>
              <Form.Select aria-label="Default select example" onChange={raceChange}>
                <option value="barbarian">Barbarian</option>
                <option value="bard">Bard</option>
                <option value="cleric">Cleric</option>
                <option value="druid">Druid</option>
                <option value="fighter">Fighter</option>
                <option value="monk">Monk</option>
                <option value="paladin">Paladin</option>
                <option value="ranger">Ranger</option>
                <option value="rogue">Rogue</option>
                <option value="sorcerer">Sorcerer</option>
                <option value="warlock">Warlock</option>
                <option value="wizard">Wizard</option>
              </Form.Select>
              <Container className='landingInfoBoxes'>
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
              <input className='landingDesc landingInputs'></input>
            </Col>
            <Col className='col-3'>
            <p>Level:</p>
              <input className='landingLvlInput landingInputs' placeholder='1-20'></input>
            </Col>
           
            <Col>
            <p>Background:</p>
              <Form.Select aria-label="Default select example">
                <option value="acolyte">Acolyte</option>
                {/* <option value="2">Two</option>
                <option value="3">Three</option> */}
              </Form.Select>
              <Container className='landingInfoBoxes'>
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
                <option value="lawful-good">Lawful-Good</option>
                <option value="lawful-neutral">Lawful-Neutral</option>
                <option value="lawful-evil">Lawful-Evil</option>
                <option value="neutral-good">Neutral-Good</option>
                <option value="neutral">Neutral</option>
                <option value="neutral-evil">Neutral-Evil</option>
                <option value="chaotic-good">Chaotic-Good</option>
                <option value="chaotic-neutral">Chaotic-Neutral</option>
                <option value="chaotic-evil">Chaotic-Evil</option>
              </Form.Select>
              <Container className='landingInfoBoxes'>
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
              <Button className='landingContBtn landingBtn' onClick={() => handleSubmit()}>Save</Button>
            </Col>
            <Col>
              <Button className='landingBackBtn landingBtn' onClick={() => navigate(-1)}>Back</Button>
            </Col>
          </Row>
        
      </Container>
    </div>
  )
}
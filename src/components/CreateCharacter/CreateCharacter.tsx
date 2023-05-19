import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateCharacter.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { CharacterAlignment, CharacterBackground, CharacterClass, CharacterRace } from '../../Services/DataService';
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
  
  const [raceAlign, setRaceAlign] = useState<string>('');
  const [raceAge, setRaceAge] = useState<string>('');
  const [raceSize, setRaceSize] = useState<string>('');
  const [raceLang, setRaceLang] = useState<string>('');
  const [classHitDie, setClassHitDie] = useState<string>('');
  const [classProficiencies, setClassProficiencies] = useState<string>('');
  const [classSavingThrows, setClassSavingThrows] = useState<string>('');
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
  
  const raceChange = async () => {
    let data = await CharacterRace(race);
    setRaceAlign(data.align);
    setRaceAge(data.age);
    setRaceSize(data.sizeDesc);
    setRaceLang(data.languages);
  }
  const classChange = async () => {
    let data = await CharacterClass(charClass);
    setClassHitDie(data.hitDie);
    setClassProficiencies(data.proficiences);
    setClassSavingThrows(data.savingThrows);
  }
  const bgChange = async () => {
    let data = await CharacterBackground();
    setBackground(data);
  }
  const alignChange = async () => {
    let data = await CharacterAlignment(alignment);
    setAlignDesc(data);
  }
  
  //   const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     let reader = new FileReader();
  //     const file = e.target.files?.[0];
  //     if (file) {
  //         reader.onloadend = (event) => {
  //             console.log(reader.result);
  //             setCharImg(event.target?.result);
  //         }
  //         reader.readAsDataURL(file);
  //     }
  // }
  
  // const handlePicChange = (e: React.FormEvent<HTMLFormElement>) => {
  //     e.preventDefault();
  //   }

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
              <p className='doubleFont'>Character Image:</p>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Control type="file" />
              </Form.Group>
            </Col>
            <Col className='col-3'>
              <p className='doubleFont'>Name:</p>
              <input className='landingNameInput landingInputs mb-3'></input>
              
            </Col>
            <Col>
            <p className='doubleFont'>Race:</p>
              <Form.Select aria-label="Default select example" onChange={() => raceChange()} className='doubleFont'>
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
                  <Col className='dwFont mt-3'>
                  <p>Age: {raceAge}</p>
                  <p>Alignment: {raceAlign}</p>
                  <p>Size: {raceSize}</p>
                  <p>Languages: {raceLang}</p>
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col>
            <p className='doubleFont'>Class:</p>
              <Form.Select aria-label="Default select example" onChange={() => classChange()} className='doubleFont'>
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
                  <Col className='dwFont mt-3'>
                  <p>Hit Die: {classHitDie}</p>
                  <p>Proficiencies: {classProficiencies}</p>
                  <p>Saving Throws: {classSavingThrows}</p>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
          <Row className='mt-5'>
            
            <Col className='col-3'>
              <p className='doubleFont'>Character Description:</p>
              <input className='landingDesc landingInputs'></input>
            </Col>
            <Col className='col-3'>
            <p className='doubleFont'>Level:</p>
              <input className='landingLvlInput landingInputs' placeholder='1-20'></input>
            </Col>
           
            <Col>
            <p className='doubleFont'>Background:</p>
              <Form.Select aria-label="Default select example" onChange={() => bgChange()} className='doubleFont'>
                <option value="acolyte">Acolyte</option>
                {/* <option value="2">Two</option>
                <option value="3">Three</option> */}
              </Form.Select>
              <Container className='landingInfoBoxes'>
                <Row>
                  <Col className='dwFont mt-3'>
                  <p>{bgDesc}</p>
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col>
            <p className='doubleFont'>Alignment:</p>
              <Form.Select aria-label="Default select example" onChange={() => alignChange()} className='doubleFont'>
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
                  <Col className='dwFont mt-3'>
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
import React from 'react'
import './Landing.css';
import {Container, Row, Col} from 'react-bootstrap';
import heroImg from '../../Assets/image 10.png';
import tavernImg from '../../Assets/Lets get started.png';
import cardOneImg from '../../Assets/Rectangle 6.png';
import cardTwoImg from '../../Assets/Rectangle 7.png';

export default function Landing() {
  return (
    <div>
      <img className='heroImg' src={heroImg}/>
    </div>
  )
}

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import './Favorites.css'
import { padding } from '@mui/system';

export default function FavoritesList() {
  let navigate = useNavigate();

  const tavernmen = require("../../Assets/tavernmen.jpg");
  const profilepic = require("../../Assets/profilepic.png")
  const naruto = require("../../Assets/naruto.png")
  const scroll = require("../../Assets/image 7.png")

  const username = "Username";
  const profilePic = require('../../Assets/Pic.png');
  const creationDate = "X/XX/XXXX";
  const location = "Tired, CA";
  const exp = "New";
  const numFriends = 0;

  const [showProfile, setShowProfile] = useState(false);
  const closeProfile = () => setShowProfile(false);
  const editProfile = () => setShowProfile(true);

  return (
    <Container fluid mx-0>
      <Row>
        <Col>
          <div className='favorties-title-container1'>
            <div className='favorties-image-container1'>
              <img src={tavernmen} alt='logo' className='logo-image' />
              <div className='favorites-text-overlay1'>
                <h3 className='text text-right'>
                  Welcome To The Tavern, {username}!
                </h3>
                <h4 className='text1'>Favorite List</h4>
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
                    BACK
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className='col-3'>
          <div className='profileBox doubleFont'>
            <div>
              <img src={profilePic} className='profilePic'></img>
            </div>
            <Container>
              <Row>
                <p>Username: {username}</p>
              </Row>
              <Row>
                <p>Account Created: </p>
                <p>{creationDate}</p>
              </Row>
              <Row>
                <p>Located in: </p>
                <p>{location}</p>
              </Row>
              <Row>
                <p>D&D Experience: </p>
                <p>{exp}</p>
              </Row>
              <Row>
                <p onClick={() => navigate("/FavoritesList")}>
                  Friends List: {numFriends}
                </p>
              </Row>
              <hr />
              <Row>
                <p className='editBtn' onClick={editProfile}>
                  Edit Profile
                </p>
              </Row>
            </Container>
          </div>
        </Col>
        <Col className='card-container' style={{ marginLeft: "-30px" }}>
          {" "}
          {/* <Card>
            <Card.Header as='h5'>
              <input></input>
              <button className='button33'>SEARCH</button>
            </Card.Header>
            <Card.Body></Card.Body>
          </Card> */}
          <Card
            className='card'
            style={{
              width: "39rem",
              height: "570px",
              marginTop: "30px",
              marginRight: "50px",
              marginLeft: "30px",
              backgroundColor: "#4A423F",
              border: "2px solid #FFA825",
            }}
          >
            <Card.Header>
              <input
                type='text'
                style={{ width: "50%", borderRadius: "10px", height: "50px" }}
                placeholder='Search By UserName'
              ></input>
              <button
                style={{
                  width: "40%",
                  marginLeft: "10px",
                  borderRadius: "10px",
                  height: "50px",
                  padding: "10px 20px",
                  backgroundColor: "#4A423F",
                  color: "white",
                }}
              >
                Search
              </button>
            </Card.Header>

            <Card.Body>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row-reverse",
                  padding: "10px",
                  margin: "10px 0",
                }}
              >
                <img
                  src={scroll}
                  alt=''
                  style={{ width: "50%", height: "320px" }}
                />

                <Card
                  style={{
                    width: "300px",
                    height: "420px",
                    border: "2px solid #FFA825",
                  }}
                >
                  <Card.Body style={{ backgroundColor: "#4A423F" }}>
                    <div className='parent'>
                      <img
                        src={naruto}
                        alt=''
                        className='logo-image1'
                        style={{ width: "50%", height: "auto" }}
                      />
                    </div>
                    <Card.Title
                      style={{ backgroundColor: "#4A423F", width: "100%" }}
                      className='centered-text'
                    >
                      Name: Naruto45
                      <Card.Text>Full Name:</Card.Text>
                      <Card.Text>Location:</Card.Text>
                      <Card.Text>Campaigns:</Card.Text>
                    </Card.Title>

                    <button
                      className='cardButton'
                      style={{
                        width: "100%",
                        margin: "1px",
                        borderRadius: "10px",
                        height: "50px",
                        padding: "10px 20px",
                        backgroundColor: "#4A423F",
                        color: "white",
                      }}
                    >
                      Add to Favorites
                    </button>
                    <button
                      className='cardButton'
                      style={{
                        width: "90%",
                        marginLeft: "10px",
                        marginRight: "10px",
                        borderRadius: "10px",
                        height: "50px",
                        padding: "10px 20px",
                        backgroundColor: "#4A423F",
                        color: "white",
                      }}
                    >
                      Remove
                    </button>
                  </Card.Body>
                </Card>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

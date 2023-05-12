import { Container, Row, Col, Card, Button } from "react-bootstrap";
import './Favorites.css'

export default function FavoritesList() {
  const tavernmen = require("./tavernmen.jpg");
  const profilepic = require("./profilepic.png")
  const naruto = require("./naruto.png")


  return (
    <Container fluid mx-0>
      <Row>
        <Col>
          <div className='title-container1'>
            <div className='image-container1'>
              <img src={tavernmen} alt='logo' className='logo-image' />
              <div className='text-overlay1'>
                <h3 className='text text-right'>
                  Welcome To The Tavern, Freedy!
                </h3>
                <h4 className='text1'>Favorite List</h4>
              </div>
              <div className='button-container d-none d-md-block'>
                <div className='d-flex ml-auto'>
                  <button className='button'>BackButton</button>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className='card-container'>
          <Card
            className='card'
            style={{
              width: "18rem",
              height: "530px",
              marginTop: "40px",
              marginLeft: "90px",
              backgroundColor: "#4A423F",
              border: "2px solid #FFA825",
            }}
          >
            <img src={profilepic} alt='logo' className='logo-image' />
            <Card.Body>
              <Card.Title>Username:</Card.Title>
              <Card.Text
                style={{
                  fontSize: "20px",
                  color: "#D6BA73",
                  textAlign: "center",
                }}
              >
                The Haunted School House
                <ul className='userfonts'>
                  <li>EDIT PROFILE</li>
                  <li>MY MESSAGES</li>
                  <li>MY TAVERN BOARD</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
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
              width: "49rem",
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
                style={{ width: "50%", borderRadius: "10px", height: "50px" }}
                value='Search By UserName'
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
              <Card
                style={{
                  width: "300px",
                  height: "470px",
                  border: "2px solid #FFA825",
                }}
              >
                <Card.Body style={{ backgroundColor: "#4A423F" }}>
                  <div className='parent'>
                    <img src={naruto} alt='' className='logo-image1' />
                  </div>
                  <Card.Title className='profile'>
                    Name: Naruto 45
                    <Card.Text>Full Name:</Card.Text>
                    <Card.Text>Location:</Card.Text>
                    <Card.Text>Campaigns:</Card.Text>
                  </Card.Title>
                  
  
                  <button
                    className='cardButton'
                    style={{
                      width: "100%",
                      margin: "10px",
                      borderRadius: "10px",
                      height: "50px",
                      padding: "10px 20px",
                      backgroundColor: "#4A423F",
                      color: "white",
                    }}
                  >
                    Message
                  </button>
                  <button
                    className='cardButton'
                    style={{
                      width: "100%",
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
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
    </Container>
  );
}


import { Container, Row, Col, Card, Button } from "react-bootstrap";

export default function FavoritesList() {
  const tavernmen = require("./tavernmen.jpg");
  const profilepic = require("./profilepic.png")


  return (
    <Container fluid mx-0>
      <Row>
        <Col>
          <div className='title-container1'>
            <div className='image-container1'>
              <img src={tavernmen} alt='logo' className='logo-image' />
              <div className='text-overlay1'>
                <h1 className='text text-right'>
                  Welcome To The Tavern, Freedy!
                </h1>
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
              marginLeft: "30px",
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
                <ul>
                  <li></li>
                  <li></li>
                  <li></li> <li></li>
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
              width: "39rem",
              height: "570px",
              marginTop: "40px",
              marginLeft: "30px",
              backgroundColor: "#4A423F",
              border: "2px solid #FFA825",
            }}
          >
            <Card.Header as='h5'>New Card</Card.Header>
            <Card.Body>
              <Card.Title>New Card Title</Card.Title>
              <Card.Text>New Card Text</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}


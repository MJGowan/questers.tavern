import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Landing from "./Components/Landing/Landing";
import Character from "./Components/Character/Character";
import Profile from "./Components/Profile/Profile";
import CreateAccount from "./Components/CreateAccount/CreateAccount";

function App() {
  const logo = require("./Assets/logo.jpg");
  let loggedIn = false;
  // use props to display username and profile pic when people are logged in

  // <BrowserRouter>
  //   <Routes>
  //     <Route/>
  //   </Routes>
  // </BrowserRouter>

  return (
    
    <div className="bg">
      <Row className="navbarBg">
        <Col className="col-7">
          <img src={logo} />
        </Col>
        <Col className="navMargin">
          <p className="doubleFont navText">Campaigns</p>
        </Col>
        <Col className="navMargin">
          <p className="doubleFont navText">FAQs</p>
        </Col>
        <Col className="navMargin">
          <p className="doubleFont navText">D&D Website</p>
        </Col>
        {loggedIn ? (
          <Col>
            {/* props.username to display the active user */}
            <p className="doubleFont navText"></p>
          </Col>
        ) : (
          <Col>
            <p className="doubleFont navText">Sign Up/Login</p>
          </Col>
        )}

      </Row>
      {<CreateAccount />}
      {/*<Landing/>*/}
      {/*<CreateAccount/>*/}
      {/* <FavoritesList /> */}
      {/*<JoiningCampaign/>*/}
      {/*<Login/>*/}
      {/*<Profile/>*/}
      {/* < TavernBoard /> */}

    </div>
  );

}

export default App;

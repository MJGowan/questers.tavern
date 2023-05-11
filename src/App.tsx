import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import Character from "./Components/Character/Character";
import Profile from "./Components/Profile/Profile";
import CreateAccount from "./Components/CreateAccount/CreateAccount";
import Login from "./Components/Login/Login";
import JoinCampaign from "./Components/JoiningCampaign/JoinCampaign";
import TavernBoard from "./Components/TavernBoard/TavernBoard";
import FavoritesList from "./Components/Favorites/FavoritesList";



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

 <BrowserRouter>
     <Routes>
      <Route path ='/' element={<Landing/>}/>
      <Route path ='/CreateAccount' element={<CreateAccount/>}/>
      <Route path = '/Login' element={<Login/>}/>
      <Route path='/Profile' element={<Profile/>}/>
      <Route path='/Favorites' element={<FavoritesList/>}/>
      <Route path='/JoinCampaign' element={<JoinCampaign/>}/>     
      <Route path='/TavernBoard' element={<TavernBoard/>}/>
      <Route path='/Character' element={<Character/>}/>
          </Routes>
   </BrowserRouter>

    </div>
  );
}

export default App;

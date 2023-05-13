import "./App.css";
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateAccount from "./Components/CreateAccount/CreateAccount";
import CreateCharacter from "./Components/CreateCharacter/CreateCharacter";
import FavoritesList from "./Components/Favorites/FavoritesList";
import FAQs from "./Components/JoiningCampaign/FAQs";
import Landing from "./Components/Landing/Landing";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import TavernBoard from "./Components/TavernBoard/TavernBoard";
import TavernBoardPost from "./Components/TavernPost/TavernBoardPost";


function App() {

  let loggedIn = false;

  // use props to display username and profile pic when people are logged in


  return (
    <div className="bg">
      <BrowserRouter>
      <Navbar/>
      
        <Routes>
          <Route path='/' element={<Landing />} />

          <Route path='/CreateAccount' element={<CreateAccount />}/>
          <Route path='/CreateCharacter' element={<CreateCharacter/>}/>
          <Route path='/FAQs' element={<FAQs/>}/>
          <Route path='/Login' element={<Login />} />
          <Route path='/Profile' element={<Profile />} />
          <Route path='/TavernBoard' element={<TavernBoard />} />
          <Route path='/TavernBoardPost' element={<TavernBoardPost/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );

}

export default App;

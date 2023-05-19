// Backend API Fetches

let userData = {};
let updateUserData = {};
let campaignData = {};
let characterData = {};
let favoritesData = {};

// User API Fetches

async function CreateAccountBe(createdUser: object) {
  const result = await fetch(`https://questerstavernbackend.azurewebsites.net/User/AddUser`, {
      method: "POST",
      headers: {
          'Content-Type': "application/json"
      },
      body: JSON.stringify(createdUser)
  });
  if (!result.ok) {
    alert('Could Not Create Account')
      const message = `An Error has Occured ${result.status}`;
      throw new Error(message);
  } else {
  }
  let data = await result.json();
  console.log(data);
  return data;
}

async function LoginBe(loginUser: object) {
  const result = await fetch(`https://questerstavernbackend.azurewebsites.net/User/Login`, {
      method: "POST",
      headers: {
          'Content-Type': "application/json"
      },
      body: JSON.stringify(loginUser)
  });
  if (!result.ok) {
      alert('Could Not Log In')
      const message = `An Error has Occured ${result.status}`;
      throw new Error(message);
  }
  let data = await result.json();
  console.log(data);
  return data;
}

async function UpdateUser(){
    let result = await fetch('https://questerstavernbackend.azurewebsites.net/User/UpdateUser');
    let data = await result.json();
    updateUserData = data;
    console.log(updateUserData);
    return updateUserData;
}

async function GetLoggedInUserData(Username: string){
    let result = await fetch(`https://questerstavernbackend.azurewebsites.net/User/userbyusername/${Username}`);
    let data = await result.json();
    userData = data;
    console.log(userData);
    return userData;
}

function checkToken(){
    let result = false;
    let lsData = localStorage.GetItem('Token');
    if(lsData != null){
        result = true;
    } 
    return result;
}

function loggedInData(){
    return userData;
}

// Character API Fetches

async function CreateCharacter(newCharacter: object) {
  const result = await fetch('https://questerstavernbackend.azurewebsites.net/Character/CreateCharacter', {
      method: "POST",
      headers: {
          'Content-Type': "application/json"
      },
      body: JSON.stringify(newCharacter)
  });
  if (!result.ok) {
      alert('Could not create character. Make sure all fields are completed')
      const message = `An Error has Occured ${result.status}`;
      throw new Error(message);
  }
  let data = await result.json();
  console.log(data);
  return data;
}

// Campaign API Fetches

async function CreateCampaign(newCampaign: object) {
  const result = await fetch('https://questerstavernbackend.azurewebsites.net/Campaign/CreateCampaign', {
      method: "POST",
      headers: {
          'Content-Type': "application/json"
      },
      body: JSON.stringify(newCampaign)
  });
  if (!result.ok) {
      alert('Could not create campaign. Make sure all fields are completed')
      const message = `An Error has Occured ${result.status}`;
      throw new Error(message);
  }
  let data = await result.json();
  console.log(data);
  return data;
}

async function GetCampaigns(){
    const result = await fetch('https://questerstavernbackend.azurewebsites.net/Campaign/GetAllCampaigns');
    let data = await result.json();
    campaignData = data;
    console.log(campaignData);
    return campaignData;
}

// Favorites API Fetches

async function AddFavorites(){
    const result = await fetch('https://questerstavernbackend.azurewebsites.net/Favorites/AddFavorite');
    let data = await result.json();
    favoritesData = data;
    console.log(favoritesData);
    return favoritesData;
}


export { CreateAccountBe, LoginBe, UpdateUser, GetLoggedInUserData, checkToken, loggedInData, CreateCharacter, CreateCampaign, GetCampaigns, AddFavorites}

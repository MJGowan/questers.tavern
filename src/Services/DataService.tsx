// Backend API Fetches

let userData = {};
let campaignData = {};
let characterData = {};

async function CreateAccountBe(createdUser: object) {
  const result = await fetch(`https://questerstavernbackend.azurewebsites.net/User/AddUser/`, {
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
  const result = await fetch(`https://questerstavernbackend.azurewebsites.net/User/Login/`, {
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

async function CreateCharacter(newCharacter: object) {
  const result = await fetch('https://questerstavernbackend.azurewebsites.net/Character/CreateCharacter/', {
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

async function CreateCampaign(newCampaign: object) {
  const result = await fetch('https://questerstavernbackend.azurewebsites.net/Campaign/CreateCampaign/', {
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
    const result = await fetch('https://questerstavernbackend.azurewebsites.net/Campaign/GetCampaignByUserId/');
    let data = await result.json();
    campaignData = data;
    console.log(campaignData);
    return campaignData;
}


export { CreateAccountBe, LoginBe, GetLoggedInUserData, checkToken, loggedInData, CreateCharacter, CreateCampaign, GetCampaigns}

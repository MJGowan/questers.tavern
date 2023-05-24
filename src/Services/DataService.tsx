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
    let lsData = localStorage.getItem('Token');
    if(lsData && lsData != null){
        result = true;
    } 
    return result;
}

function loggedInData(){
    return userData;
}

// Character API Fetches

async function CreateCharacterBe(newCharacter: object) {
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

async function CharacterRace(Race: string){
    const raceResult = await fetch(`https://www.dnd5eapi.co/docs/#get-/api/races/${Race}`)
    let raceData = await raceResult.json();
    console.log(raceData);
    let align = raceData.alignment;
    let age = raceData.age;
    let sizeDesc = raceData.size_description;
    let languages = raceData.language_desc;
    return {align, age, sizeDesc, languages};
}
async function CharacterClass(Class: string){
    const classResult = await fetch(`https://www.dnd5eapi.co/docs/#get-/api/classes/${Class}`)
    let classData = await classResult.json();
    console.log(classData);
    let hitDie = classData.hit_die;
    let proficiences = classData.proficiency_choices.desc;
    let savingThrows;
    for(let i = 0; i < classData.saving_throws.length; i++){
        savingThrows = classData.saving_throws[i].name;
    }
    return {hitDie, proficiences, savingThrows};
}
async function CharacterBackground(){
    const bgResult = await fetch('https://www.dnd5eapi.co/docs/#get-/api/backgrounds/acolyte')
    let bgData = await bgResult.json();
    console.log(bgData);
    let bgDesc = bgData.feature.desc;
    return bgDesc;
}
async function CharacterAlignment(Alignment: string){
    const alignResult = await fetch(`https://www.dnd5eapi.co/docs/#get-/api/alignments/${Alignment}`)
    let alignData = await alignResult.json();
    console.log(alignData);
    let alignDesc = alignData.desc;
    return alignDesc;
}


// Campaign API Fetches

async function CreateCampaignBe(newCampaign: object) {
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

async function GetCampaignByUserId(UserId: number){
    const result = await fetch(`https://questerstavernbackend.azurewebsites.net/Campaign/${UserId}`);
    let data = await result.json();
    campaignData = data;
    console.log(campaignData);
    return campaignData;
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


export { CreateAccountBe, LoginBe, UpdateUser, GetLoggedInUserData, checkToken, loggedInData, CharacterRace, CharacterClass, CharacterBackground, CharacterAlignment, CreateCharacterBe, CreateCampaignBe, GetCampaigns, GetCampaignByUserId, AddFavorites}


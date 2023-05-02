import React from 'react'

export default function Filler() {
  return (
    <div>Filler</div>
  )
}

// Backend API Fetches

async function CreateAccount(createdUser: object) {
  const result = await fetch('https://localhost:7276/User/AddUser', {
      method: "POST",
      headers: {
          'Content-Type': "application/json"
      },
      body: JSON.stringify(createdUser)
  });
  if (!result.ok) {
      const message = `An Error has Occured ${result.status}`;
      throw new Error(message);
  } else {
  }
  let data = await result.json();
  console.log(data);
  return data;
}

export { CreateAccount}

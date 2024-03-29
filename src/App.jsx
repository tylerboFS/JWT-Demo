import GetToken from "./GetToken";
import Authenticate from "./Authenticate";
import { useEffect, useState } from "react";
import WelcomePage from "./WelcomePage";

function App() {
  //Set up the state in App because it is shared between child components
  const [token, setToken] = useState("Click Button to get Token");
  const [loggedIn, setLoggedIn] = useState(false);

  //On page load check local storage for token and update state if found
  useEffect(() => {
      const localToken = localStorage.getItem("Token");
      if(localToken){
        setToken(localToken);
      }
  }, [])

  return (
    <>
      <h1>Tyler JWT Demo</h1>
      {/* If we are logged in show welcome page otherwise show other components */}
      {loggedIn ? (
        <WelcomePage />
      ) : (
        <>
          <GetToken token={token} setToken={setToken} />
          <Authenticate token={token} setLoggedIn={setLoggedIn} />
        </>
      )}
    </>
  )
}

export default App

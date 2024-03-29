import GetToken from "./GetToken"
import Authenticate from "./Authenticate"
import { useState } from "react";

function App() {

  const [token, setToken] = useState("Click Button to get Token");

  return (
    <>
      <h1>Tyler JWT Demo</h1>
      <GetToken token={token} setToken={setToken} food="Chimichanga" />
      <Authenticate token={token} />
    </>
  )
}

export default App

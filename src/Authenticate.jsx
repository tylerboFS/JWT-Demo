import { useState } from "react";

const Authenticate = ({ token }) => {
  const API_URL = "https://fsa-jwt-practice.herokuapp.com/authenticate";

  const [message, setMessage] = useState("");

  const handleClick = async (e) => {
    //fetch me that data!
    try {
      const response = await fetch(API_URL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const json = await response.json();
      console.log("Message", json.message);
      setMessage(json.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h2>Authenticate Component</h2>
      <button onClick={handleClick}>Authenticate with Token</button>

      <p>
        {message
          ? message
          : "Click Authenticate to get a message from the server"}
      </p>
    </>
  );
};

export default Authenticate;

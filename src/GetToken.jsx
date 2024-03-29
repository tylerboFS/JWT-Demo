
const GetToken = ({token, setToken}) => {
  const API_URL = `https://fsa-jwt-practice.herokuapp.com/signup`;


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: "some-username",
          password: "super-secret-999",
        }),
      });
      const json = await response.json();
      console.log(json);
      setToken(json.token);
    } catch (error) {
      console.log("Error occured", error);
    }
  };

  return (
    <>
      <h2>Get Token Component</h2>
      <form onSubmit={handleSubmit}>
        <input id="token" type="submit" value={"Get Token"} /> <br />
        <label>Token:</label>
        <textarea
          value={token}
          rows={5}
          cols="50"
          onChange={(e) => {
            setToken(e.target.value);
          }}
        ></textarea>
      </form>
    </>
  );
};

export default GetToken;

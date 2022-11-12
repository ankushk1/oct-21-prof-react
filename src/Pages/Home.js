import React from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {

    // creds checked
    // 
    navigate("/signup/amit/kumar", {
      state: {
        name: "Home Route",
        age: 10,
        arr: [1,2,3]
      }
    }); // to="/signup"
  };

  const handleRedirectContact = () => {
    navigate("/contact/100")
  }

  return (
    <div>
      Home
      <button onClick={() => handleRedirect()}>Redirect</button>
      <button onClick={() => handleRedirectContact()}>Redirect Contact</button>
    </div>
  );
};

export default Home;

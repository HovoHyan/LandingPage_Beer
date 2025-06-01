import React, { useState } from 'react'
import logo from "../../Icons/logo.png"
import "./ageVerification.scss";



const AgeVerification = () => {
 const [isVerified, setIsVerified] = useState(false);

  const enterSite = () => {
    setIsVerified(true);
  };

  const denyAccess = () => {
    alert("Դուք չեք կարող մուտք գործել կայք։");
    window.location.href = "https://www.google.com";
  };

  if (isVerified) return null;

  return (
    <div className="age-verification">
      <img src={logo} alt="Logo" />
      <h1>Are you of an age to<span> FEEL THE DRAGONS POWER</span> </h1>
      <div className="buttons">
        <button className="yes" onClick={enterSite}>
          Yes
        </button>
        <button className="no" onClick={denyAccess}>
          No
        </button>
      </div>
    </div>
  );
}

export default AgeVerification

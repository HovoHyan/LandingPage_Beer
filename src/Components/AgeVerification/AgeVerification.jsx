import React, { useState } from 'react'
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
      <h1>Դուք 18 տարեկան և ավել ե՞ք</h1>
      <div className="buttons">
        <button className="yes" onClick={enterSite}>
          Այո
        </button>
        <button className="no" onClick={denyAccess}>
          Ոչ
        </button>
      </div>
    </div>
  );
}

export default AgeVerification

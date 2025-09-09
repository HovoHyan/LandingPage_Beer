import React, { useState, useRef, useEffect } from "react";
import logo from "../../Icons/beige.png";
import fireVid from "../../Videos/Verification/firelogo.mp4";
import "./ageVerification.scss";

const AgeVerification = () => {
  const [showVerification, setShowVerification] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 3.0;
    }
  }, []);

  const enterSite = () => setIsVerified(true);

  const denyAccess = () => {
    alert("Դուք չեք կարող մուտք գործել կայք։");
    window.location.href = "https://www.google.com";
  };

  if (isVerified) return null;

  return (
    <div className="age-verification">
      {!showVerification && (
        <video
        className="verifVideo"
          ref={videoRef}
          src={fireVid}
          autoPlay
          muted
          onEnded={() => setShowVerification(true)}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      )}

      {showVerification && (
        <div className="verification-content fade-in">
          <img src={logo} alt="Logo" />
          <h1>
            <span>
              Are you of an age <sup>(18)</sup> <br /> TO FEEL THE DRAGONS POWER
            </span>
          </h1>
          <div className="buttons">
            <button className="yes" onClick={enterSite}>
              Yes
            </button>
            <button className="no" onClick={denyAccess}>
              No
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AgeVerification;

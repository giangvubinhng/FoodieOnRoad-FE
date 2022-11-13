import React from "react";
import "./Popup.css";
import GoogleButton from 'react-google-button'

export const Popup = ({ text, closePopup }) => {
  return (
    <div className="popup-container">
     <div className="popup-body">
      <div>
        <h2>LogIn</h2>
        <div className="center">
      <GoogleButton onClick={() => { console.log('Google button clicked') }}/>
      </div>
      </div>
      {/* {text}  */}
      <button onClick={closePopup}>Close X</button>
     </div>
    </div>
  );
};

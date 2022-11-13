import styledhomepage from "../style/styledhomepage.css"
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import React, { useState } from "react";
import { Popup } from "../Popup/Popup.jsx";

function Home() {
  const [open, setOpen] = useState(false);
  return (
    <div className="Home">
      
      <div className="parent">
        <div className="child">
            <header>
              <h1>Foodie On Road</h1>
            </header>

            <div className="desciption">  
              <h5>Look For a Foodtruck</h5>
            </div>

            <div className="login">
              <h6>Are you a foodtruck owner? <button onClick={() => setOpen(true)}>Login</button></h6>    
              {open ? <Popup closePopup={() => setOpen(false)} /> : null}
            </div>
        </div>
        <div className="child c1">
          <img src="https://media.istockphoto.com/id/847893726/vector/food-truck.jpg?s=612x612&w=0&k=20&c=fK9JGZe0LWPN9ShlPWE2LLzdsTIlsN2LJSJW6J6KT9k=" alt="food truck" width="350" height="300"/>
        </div>

       
      </div>

    
      
     
    </div>

    
    
  )
}

export default Home

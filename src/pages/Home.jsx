import React, { useState } from "react";

function Home() {
  const login = async () => {
    window.open(
			'http://localhost:3030/auth/google', "_self");
  }
  return (
    <div className="Home">
      <div className="parent">
    <button onClick={fetch}>test</button>
        <div className="child">
            <header>
              <h1>Foodie On Road</h1>
            </header>

            <div className="desciption">  
              <h5>Find exquisite food everywhere you go</h5>
            </div>

            <div className="login">
              <h6>Foodtruck Owner? <button onClick={login}>Login With Google</button></h6>    
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

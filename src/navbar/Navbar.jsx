import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import React, { useState } from "react";
import { Popup } from "../Popup/Popup.jsx";

function NavigationBar() {
  const [open, setOpen] = useState(false);
    return (
        <>
        <br />
        <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand href="#home">FoodieOnRoad</Navbar.Brand>
            <Nav className="nav navbar-right">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link as={Link} onClick={() => setOpen(true)}>Login</Nav.Link>
              {/* to="/login"  */}
              {/* <button onClick={() => setOpen(true)}>Login</button> */}
              {open ? <Popup closePopup={() => setOpen(false)} /> : null}
              <Nav.Link href="#pricing">FoodTruck</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
}

export default NavigationBar;
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import React, { useState } from "react";
import { Popup } from "../Popup/Popup.jsx";
import {InputForm} from "../InputForm/InputForm.jsx"

function NavigationBar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand as={Link} to="/">FoodieOnRoad</Navbar.Brand>
          <Nav className="nav navbar-right">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/search">Search</Nav.Link>
            <Nav.Link as={Link} to="/FoodtruckInput">Input</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;

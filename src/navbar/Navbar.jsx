import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import React from "react";
import { useUserStore } from '../app/store'

function NavigationBar() {
  const currentUser = useUserStore((state) => state.user)
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand as={Link} to="/">FoodieOnRoad</Navbar.Brand>
          <Nav className="nav navbar-right">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/search">Search</Nav.Link>
            {currentUser?.isLoggedIn ? <Nav.Link as={Link} to="/create-event">Add Event</Nav.Link> : null}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;

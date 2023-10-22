import React from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (

    <Container fluid className="h-screen flex flex-wrap place-items-center">
    <Navbar bg="dark" variant="dark" expand="lg" className="w-screen">
        <Container >
            <Navbar.Brand href="#"><h3>Talent Hub</h3></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className="mr-6" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mx-auto font-semibold space-x-12">
                <NavLink className="nav-link" to="/list">Applicant List</NavLink>
                </Nav>

            </Navbar.Collapse>
        </Container>
    </Navbar>
</Container>
  );
};

export default NavBar;

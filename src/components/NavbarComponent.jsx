import { Nav, Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import React from "react";

export const NavbarComponent = () => {
  return (
    <>
      <Navbar bg="light" expand="sm">
        <Container>
          <Nav className="justify-content-center">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav container-md">
              <Nav className="me-auto container-md">
                <Nav.Link as={NavLink} to="/freddy-resume-page">
                  Home
                </Nav.Link>
                <Nav.Link as={NavLink} to="/Resume">
                  CV
                </Nav.Link>
                <Nav.Link as={NavLink} to="/About">
                  About
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

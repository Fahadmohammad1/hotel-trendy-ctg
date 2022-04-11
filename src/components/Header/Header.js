import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav className="text-center">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home" className="text-warning">
            Hotel Trendy
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink
                to="/"
                style={({ isActive }) =>
                  isActive ? { color: "red" } : { color: "white" }
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/Checkout"
                style={({ isActive }) =>
                  isActive ? { color: "red" } : { color: "white" }
                }
              >
                Checkout
              </NavLink>
            </Nav>
            <Nav>
              <NavLink
                to="/login"
                style={({ isActive }) =>
                  isActive ? { color: "red" } : { color: "white" }
                }
              >
                Login
              </NavLink>
              <NavLink
                to="/Register"
                style={({ isActive }) =>
                  isActive ? { color: "red" } : { color: "white" }
                }
              >
                Sign Up
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
};

export default Header;

import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import "./Header.css";
import { signOut } from "firebase/auth";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <nav className="text-center">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home" className="text-warning fs-3 fw-bold">
            Trendy Castle
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink
                className="navlink"
                to="/"
                style={({ isActive }) =>
                  isActive ? { color: "red" } : { color: "white" }
                }
              >
                Home
              </NavLink>
              <NavLink
                className="navlink text-white"
                to="#"
                // style={({ isActive }) =>
                //   isActive ? { color: "red" } : { color: "white" }
                // }
              >
                Services
              </NavLink>
              <NavLink
                className="navlink"
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
                className="navlink"
                to="/login"
                style={({ isActive }) =>
                  isActive ? { color: "red" } : { color: "white" }
                }
              >
                Login
              </NavLink>
              <NavLink
                className="navlink"
                to="/register"
                style={({ isActive }) =>
                  isActive ? { color: "red" } : { color: "white" }
                }
              >
                Register
              </NavLink>
              <NavLink
                className="navlink"
                to="/about"
                style={({ isActive }) =>
                  isActive ? { color: "red" } : { color: "white" }
                }
              >
                About
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <button onClick={handleSignOut}>Logout</button>
      {user ? <p>{user.email}</p> : "no user found"}
    </nav>
  );
};

export default Header;

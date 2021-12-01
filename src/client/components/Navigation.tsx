import React, { useEffect, useRef } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Badge from "@mui/material/Badge";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { gsap } from "gsap";

const Navigation: React.FC<NavigationProps> = ({
  bgView,
  handleLogin,
  handleSignup,
}) => {
  // Ref
  const navRef = useRef();

  // Animations
  useEffect(() => {
    gsap.to(navRef.current, { opacity: 1, delay: 1 });
  }, []);

  return (
    <Navbar
      ref={navRef}
      collapseOnSelect
      expand="lg"
      className="fetch-navbar pt-5 pb-2 sticky-top"
      style={{ backgroundColor: bgView }}
    >
      <Container>
        <Navbar.Brand href="#main" className="d-flex align-items-center">
          <img
            src="https://i.imgur.com/iXM4PWE.png"
            alt=""
            className="fetch-logo"
          />
          <h6 className="fetch-logo-txt mx-2">Fetch</h6>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto fetch-navigation">
            <Nav.Link href="">
              {" "}
              <Badge
                className="favorite-tracker"
                badgeContent={0}
                color="error"
              >
                <FavoriteIcon color="action" />
              </Badge>{" "}
              <span className="favorite-pets mx-2">Favorite Pets</span>
            </Nav.Link>
          </Nav>
          <Nav className="nav-btns">
            <Button onClick={() => handleLogin()} className="login-btn mx-2">
              Login
            </Button>
            <Button onClick={() => handleSignup()} className="signup-btn">
              Signup
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

interface NavigationProps {
  bgView: string;
  handleLogin: any;
  handleSignup: any;
}

export default Navigation;

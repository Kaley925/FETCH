import React, { useEffect, useRef } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { NavLink, useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Badge from "@mui/material/Badge";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { gsap } from "gsap";

const Navigation: React.FC<NavigationProps> = ({
  bgView,
  handleLogin,
  handleSignup,
  handleLogout,

  isLoggedIn,
  favoriteNumber,
}) => {
  // Current Route
  const currentRoute = useLocation();

  if (isLoggedIn) {
    return (
      <Navbar
        collapseOnSelect
        expand="lg"
        className={
          currentRoute.pathname === "/loading"
            ? "d-none"
            : "fetch-navbar pt-4 pb-4 sticky-top"
        }
        style={{ backgroundColor: bgView }}
      >
        <Container>
          <Navbar.Brand href="/#main" className="d-flex align-items-center">
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
              <Nav.Link as={NavLink} to="/favorites">
                {" "}
                <Badge
                  className="favorite-tracker"
                  badgeContent={favoriteNumber}
                  color="error"
                >
                  <FavoriteIcon color="action" />
                </Badge>{" "}
                <span className="favorite-pets mx-2">Favorite Pets</span>
              </Nav.Link>
            </Nav>
            <Nav className="nav-btns">
              <button className="profile-img-area mx-3 btn profile-btn">
                <NavLink className="profile-btn-link" to={"/profile"}>
                  <img
                    src="https://i.imgur.com/8G2IboX.png"
                    alt=""
                    className="profile-img"
                  />
                  <span className="profile-img-txt mx-2">My Profile</span>
                </NavLink>
              </button>
              <Button onClick={() => handleLogout()} className="logout-btn">
                <NavLink className="logout-link" to={"/"}>
                  Logout
                </NavLink>
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  } else {
    return (
      <Navbar
        collapseOnSelect
        expand="lg"
        className={
          currentRoute.pathname === "/loading"
            ? "d-none"
            : "fetch-navbar pt-4 pb-4 sticky-top"
        }
        style={{ backgroundColor: bgView }}
      >
        <Container>
          <Navbar.Brand href="/#main" className="d-flex align-items-center">
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
              <Nav.Link as={NavLink} to="/favorites">
                {" "}
                <Badge
                  className="favorite-tracker"
                  badgeContent={1}
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
  }
};

interface NavigationProps {
  bgView: string;
  handleLogin: any;
  handleSignup: any;
  handleLogout: any;
  isLoggedIn: boolean;
  favoriteNumber: number;
}

export default Navigation;

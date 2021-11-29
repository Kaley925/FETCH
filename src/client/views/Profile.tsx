import React, { useEffect, useRef } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Badge from "@mui/material/Badge";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Navigation: React.FC<NavigationProps> = ({ bgView }) => {
  return (
    <>
      <img
        src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Ffemale-avatar-profile-picture-vector-female-avatar-profile-picture-vector-102690279.jpg&imgrefurl=https%3A%2F%2Fwww.dreamstime.com%2Ffemale-avatar-profile-picture-vector-female-avatar-profile-picture-vector-image102690279&tbnid=x4sHylrPsYoqBM&vet=12ahUKEwjkwODD-Lz0AhW_QkIHHQ74DIMQMygGegUIARDjAQ..i&docid=8NhnO-dTfawMHM&w=800&h=800&q=avatar%20profile%20picture&ved=2ahUKEwjkwODD-Lz0AhW_QkIHHQ74DIMQMygGegUIARDjAQ"
        alt="Avatar"
        className=" w-50 h-50 rounded"
      />

      <Navbar
        collapseOnSelect
        expand="lg"
        className="fetch-navbar pt-5"
        style={{ backgroundColor: bgView }}
      >
        <Container>
          <Navbar.Brand href="/" className="d-flex align-items-center">
            <img
              src="https://i.imgur.com/iXM4PWE.png"
              alt=""
              className="fetch-logo"
            />{" "}
            <h6 className="fetch-logo-txt mx-2">Fetch</h6>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link href="">
                {" "}
                <Badge
                  className="favorite-tracker"
                  badgeContent={8}
                  color="error"
                >
                  <FavoriteIcon color="action" />
                </Badge>{" "}
                <span className="favorite-pets mx-3">Favorite Pets</span>
              </Nav.Link>
            </Nav>

            <Nav>
              <Button href="" className="login-btn mx-2">
                Login
              </Button>
              <Button href="" className="signup-btn">
                Signup
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <hr />
      <div className="container mt-5">
        <div className="d-flex row justify-content-center">
          <div className="card col-4">
            <img src="https://via.placeholder.com/350x150" />
            <div className="card-body">
              <h5 className="card-title">Your name here</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
                dignissimos ea similique eius quisquam, quibusdam voluptatibus
                maxime mollitia iste temporibus enim quo iure, ratione, repellat
                beatae harum. Excepturi, ut fugit?
              </p>
              <a href="" className="btn btn-primary">
                Change your profile picture
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

interface NavigationProps {
  bgView: string;
}

export default Navigation;

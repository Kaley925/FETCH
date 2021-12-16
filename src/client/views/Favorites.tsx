import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Carousel } from "react-bootstrap";

import { BsFillArrowDownCircleFill } from "react-icons/bs";

const Favorites: React.FC<FavoritesProps> = ({ favorites, removeFavorite }) => {

  if (favorites === null) {
    return (
      <div className="none text-center mt-5">
        <h1 className="no-saved-pets">Currently no favorite pets</h1>
      </div>
    );
  } else {
    return (
      <>
        <div className="header-container container mt-5 mb-5 pt-4 pb-4 text-center">
          <h1 className="favorites-title mb-2">Favorites</h1>
          <p className="favorites-title-descriptiopn text-muted mb-3">
            Here you will find a list of your favorited pets. To unfavorite a
            pet, simply click the "unfavorite" button!
          </p>

          <div className="favorites-btn-area d-flex flex-column justify-content-center align-items-center">
            <button className="jump-to-favorites-btn d-flex align-items-center justify-content-center p-3 btn mb-5">
              <a href="#favorites" className="jump-link">
                {" "}
                Jump to favorites{" "}
                <BsFillArrowDownCircleFill className="jump-link-icon mx-2" />
              </a>
            </button>
          </div>
          <Carousel interval={2000} fade>
            <Carousel.Item>
              <img
                className="carousel-img d-block w-100"
                src="https://images.pexels.com/photos/731022/pexels-photo-731022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousel-img d-block w-100"
                src="https://images.pexels.com/photos/2558605/pexels-photo-2558605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className=" carousel-img d-block w-100"
                src="https://images.pexels.com/photos/46024/pexels-photo-46024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div id="favorites" className="favorites">

          <div className="container favorites-container">
            <h2 className="saved-pets-title text-center mt-3 mb-5">
              Saved Pets ❤️
            </h2>
            <div className="d-flex justify-content-center align-items-center">
              <div className="favorites-row gx-3 gy-3 row d-flex  justify-content-center align-items-center">

                {favorites.map((favorite: any) => {
                  return (
                    <div
                      className={
                        favorites.length === 1
                          ? "col-lg-12 col-12 favorite-col"
                          : "col-lg-6 col-12 favorite-col"
                      }
                    >
                      <div className="favorite-card text-center shadow">
                        <div className=" d-flex flex-column justify-content-center align-items-center favorite-card favorite-body p-4">
                          <h3 className="favorite-name">

                            My Name is{" "}
                            <span className="underline-title">
                              {favorite.name}
                            </span>

                          </h3>
                          <p className=" favorite-description mt-4 mb-3 w-75">
                            <h6 className="breed-emphasis">Breed:</h6>{" "}
                            {favorite.breed}
                          </p>
                          <small className="favorite-age mb-4">
                            I am a{" "}
                            <span className="favorite-age-emphasis">
                              {favorite.age}
                            </span>
                          </small>
                          <p className="text-muted favorite-distance">
                            Currently {favorite.distance} miles away
                          </p>
                          <hr className="w-100" />
                          <div className="shelter-details mt-4">
                            <div className="shelter-title mb-4">
                              <h6 className="shelter-emphasis">Shelter:</h6>{" "}
                              {favorite.shelter}
                            </div>
                          </div>
                          <button
                            onClick={() => removeFavorite(favorite)}
                            className="unfavorite-btn btn"
                          >

                            Unfavorite
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

interface FavoritesProps {
  favorites: any;

  removeFavorite: any;

}

export default Favorites;

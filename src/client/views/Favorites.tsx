import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Carousel } from "react-bootstrap";

const Favorites: React.FC<FavoritesProps> = ({ favorites }) => {
  const dis = () => {
    return Math.floor(Math.random() * 50) + 1;
  };

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
          <Carousel fade>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.pexels.com/photos/731022/pexels-photo-731022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.pexels.com/photos/2558605/pexels-photo-2558605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.pexels.com/photos/46024/pexels-photo-46024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="favorites">
          <div className="container favorites-container">
            <h2 className="saved-pets-title text-center mt-3 mb-5">
              Saved Pets ❤️
            </h2>
            <div className="d-flex justify-content-center align-items-center">
              <div className="favorites-row gx-3 gy-3 row d-flex  justify-content-center align-items-center">
                {favorites.map((favorite) => {
                  return (
                    <div className="col-lg-6 col-12 favorite-col">
                      <div className="favorite-card text-center shadow">
                        <div className=" d-flex flex-column justify-content-center align-items-center favorite-card favorite-body">
                          <h5 className="favorite-name">
                            My Name is{" "}
                            <span className="underline-title">
                              {favorite.name}
                            </span>
                          </h5>
                          <p className=" favorite-description w-75">
                            {favorite.description}
                          </p>
                          <small className="favorite-age">
                            I am an{" "}
                            <span className="age">{favorite.age} cat</span>
                          </small>
                          <p className="text-muted favorite-distance">
                            Currently {dis()} miles away
                          </p>
                          <button className="unfavorite-btn btn">
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
}

export default Favorites;

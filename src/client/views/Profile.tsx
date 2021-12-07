import React, { useState, useEffect, useRef } from "react";
import Navigation from "../components/Navigation";
import Sidebar from "../components/Sidebar";
import "../scss/profile";
import { TOKEN_KEY } from "../services/api-services";
import { gsap } from "gsap";

const Profile = () => {

  const info = localStorage.getItem(TOKEN_KEY);
  console.log(info);
  
  const headerRef = useRef();
  // Animation
  useEffect(() => {
    gsap.to(headerRef.current, { opacity: 1, delay: 1 });
  }, []);

  return (
    <>
      <main ref={headerRef}>
        <Navigation
          bgView="#FBF4EA"
          handleLogin={undefined}
          handleSignup={undefined}
          handleLogout={undefined}
          isLoggedIn={false}
          favoriteNumber={0}
        />

        <div className="container d-flex justify-content-center mt-5">
          <Sidebar />
          <div className="card prof p-3 py-4">
            <div className="text-center">
              {" "}
              <img
                src="https://i.imgur.com/stD0Q19.jpg"
                width="100"
                className="rounded-circle"
              />
              <hr />
              <h3 className="mt-2">Maria Smantha</h3>{" "}
              <span className="mt-1 clearfix">Starbucks barista</span>
              <div className="row mt-3 mb-3">
                <div className="col-md-6">
                  <h5>Pets Owned</h5> <span className="num">3</span>
                </div>
                <div className="col-md-6">
                  <h5>Age</h5> <span className="num">25</span>
                </div>
              </div>
              <p className="mt-4">
                I am a barista at Starbucks and studying psychology at The
                University of Alabama
              </p>
              <div className="profile mt-5">
                {" "}
                <img
                  src="https://i.imgur.com/stD0Q19.jpg"
                  width="100"
                  className="rounded-circle"
                />
                <hr />
                <h3 className=" name mt-2">Maria Samantha</h3>{" "}
                <span className="mt-1 clearfix">Starbucks barista</span>
                <div className="row mt-3 mb-3">
                  <div className="col-md-6">
                    <h5>Pets Owned</h5> <span className="num">3</span>
                  </div>
                  <div className="col-md-6">
                    <h5>Age</h5> <span className="num">25</span>
                  </div>
                </div>
                <p className="mt-4">
                  I'm a barista at Starbucks and studying psychology at The
                  University of Alabama🎓
                </p>
                <div className="profile mt-5"> </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Profile;

import React, { useState, useEffect, useRef } from "react";
import Navigation from "../components/Navigation";
import Sidebar from "../components/Sidebar/Sidebar";
import "../scss/profile";
import { Link } from "react-router-dom";
import Signup from "../components/Signup";
import { gsap } from "gsap";


const Profile = () => {
  const headerRef = useRef();
  // Animation
  useEffect(() => {
    gsap.to(headerRef.current, { opacity: 1, delay: 1 });
  }, []);

  // Modal signup
  const [showSignup, setShowSignup] = useState(false);
  const handleSignupClose = () => setShowSignup(false);
  const handleSignupShow = () => setShowSignup(true);

  return (
    <>
      <main ref={headerRef} id="main">
      <Navigation bgView="#FBF4EA" handleLogin={undefined} handleSignup={undefined}/>
      <Sidebar />
      
      <div className="container d-flex justify-content-center mt-5">
        <div className="card prof p-3 py-4">
          <div className="text-center">
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
              I am a barista at Starbucks and studying psychology at The University of Alabama
            </p>
            <div className="profile mt-5">
              {" "}
            </div>
          </div>
        </div>
      </div>
      </main>
      {/* <div className="container change">
        <div>
          <ul>
            <p>Account Settings</p>
            <p>Account Settings</p>
            <p>Account Settings</p>
            <p>Account Settings</p>
            <p>Account Settings</p>
            <p>Account Settings</p>
          </ul>
        </div>
      </div> */}
    </>
  );
};

export default Profile;

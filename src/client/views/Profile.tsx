import React, { useEffect, useRef } from "react";
import Navigation from "../components/Navigation";
import Sidebar from "../components/Sidebar";
import "../scss/profile";


const Profile = () => {
  return (
    <>
      <Navigation bgView="#FBF4EA"/>
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
              I am a barista at Starbucks and studying psychology at The University of Alabama
            </p>
            <div className="profile mt-5">
              {" "}
              <button className="profile_button px-5">Edit Profile</button>{" "}
            </div>
          </div>
        </div>
      </div>

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


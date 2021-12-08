import React, { useState, useEffect, useRef } from "react";
import * as IoIcons from "react-icons/Io";
import * as AiIcons from "react-icons/ai";
import "../scss/sidebar";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons"; 

const Sidebar = () => {

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fead12" }}>
        <div className="sidebar">
          <Link to="#" className="menu-paw">
            <IoIcons.IoMdPaw onClick={showSidebar} />
          </Link>
        </div>
        <div className={sidebar ? "menu active" : "menu" }>
          <ul className="menu-items">
            <li className="menu-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose onClick={showSidebar} />
              </Link>
            </li>
            <li className="sidebar-text">
              <Link to="#">
                <AiIcons.AiFillAccountBook />
                <span className="text-span">Change Name</span>
              </Link>
            </li>
            <li className="sidebar-text">
              <Link to="#">
                <AiIcons.AiFillAccountBook />
                <span className="text-span">Change Email</span>
              </Link>
            </li>
            <li className="sidebar-text">
              <Link to="#">
                <AiIcons.AiFillAccountBook />
                <span className="text-span">Change Password</span>
              </Link>
            </li>
            
          </ul>
        </div>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;


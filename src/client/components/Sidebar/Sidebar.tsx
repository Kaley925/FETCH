import React, { useState } from "react";
import * as IoIcons from "react-icons/Io";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import SidebarData from "./Sidebardata";
import "./../../scss/sidebar";
import { IconContext } from "react-icons";

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  const [closeSidebar, closeSetSidebar] = useState(true);

  const showSidebar = () => setSidebar(!sidebar)
  // const hideSidebar = () => closeSetSidebar(!closeSidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fead12' }}>
        <div className="sidebar">
          <Link to="#" className="menu-paw" >
            <IoIcons.IoMdPaw onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "menu active" : "menu"}>
          <ul className="menu-items">
            <li className="menu-toggle">
              <Link to="#" className="menu-bars" >
                <AiIcons.AiOutlineClose onClick={showSidebar} />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Sidebar;

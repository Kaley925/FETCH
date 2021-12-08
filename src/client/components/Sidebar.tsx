import React, { useState, useEffect, useRef } from "react";
import * as IoIcons from "react-icons/Io";
import * as AiIcons from "react-icons/ai";
import Nav from "react-bootstrap/Nav";
import EditModal from "./EditModal";
import "../scss/sidebar"
import { Link } from "react-router-dom";
import { IconContext } from "react-icons"; 
import Button from "react-bootstrap/Button";


const Sidebar: React.FC<SidebarProps> =({
   modalView,
   handleModalClose,
   handleModalChange,
}) => {

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  
  const [openModal, setOpenModal] = useState(false);
  const handleCloseModal = () => setOpenModal(false);
  const handleOpenModal = () => setOpenModal(true);

  return (
    <>
      <EditModal modalView={openModal} handleModalClose={handleCloseModal} handleModalChange={undefined} />
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
                <span className="text-span">Change Avatar</span>
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
            <Button onClick={() => handleModalChange()} className="sidebar-text">
                Signup
              </Button>
          </ul>
        </div>
      </IconContext.Provider>
    </>
  );
};

interface SidebarProps {
  modalView: any,
  handleModalClose: any,
  handleModalChange: any,
}

export default Sidebar;


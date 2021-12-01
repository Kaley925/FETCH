import { ClassNames } from "@emotion/react";
import React from "react";
import * as Icons from "react-icons/Io";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <Link to="#" className="menu">
            <Icons.IoMdPaw />
        </Link>
      </div>
    </>
  );
};

export default Sidebar;
import React, { useState, useEffect } from "react";
import * as IoIcons from "react-icons/Io";
import * as AiIcons from "react-icons/ai";

const SidebarData = [
  {
    title: 'Home',
    path: "/",
    icon: <AiIcons.AiFillAccountBook />,
    cName: 'sidebar-text'
  },
  {
    title: 'Dogs',
    path: "/Final Project/FETCH/src/client/views/Dogs.tsx",
    icon: <IoIcons.IoMdPaw />,
    cName: 'sidebar-text'
  },
  {
    title: 'Cats',
    path: "/Final Project/FETCH/src/client/views/Cats.tsx",
    icon: <AiIcons.AiTwotoneContacts />,
    cName: 'sidebar-text'
  } 
];

export default SidebarData;

import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";


export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "About",
    path: "/about",
    icon: <FaIcons.FaCalculator />,
    cName: "nav-text",
  },
  {
    title: "Experience",
    path: "/experience",
    icon: <BsIcons.BsCurrencyExchange />,
    cName: "nav-text",
  }
];

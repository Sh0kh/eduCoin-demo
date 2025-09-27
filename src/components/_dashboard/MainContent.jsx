import React from "react";
import Navbar from "./Navbar";
import { Button, Input, Tab, Tabs, TabsHeader } from "@material-tailwind/react";
import { PiCalendarBlankLight } from "react-icons/pi";
import { IoFilterSharp } from "react-icons/io5";
import { RiSearch2Line } from "react-icons/ri";
import HeaderSearch from "./HeaderSearch";
import MainInfo from "./MainInfo";


export default function MainContent() {
  return (
    <div className="p-6 min-vh-100">
      <Navbar />

       <HeaderSearch/>
       
       <MainInfo/>
    </div>
  );
}

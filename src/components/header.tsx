import Image from "next/image";
import React from "react";
import Profile from "@/assets/picture.jpg";
import { FiBell, FiMessageCircle } from 'react-icons/fi';
const Header = () => {
  return (
    <div className="header">
      <div className="title">
        <h2>
          <span>Alien</span>Task.
        </h2>
        <p>Task Management</p>
      </div>
      <div className="search"></div>
      <div className="menuRight">
        <FiMessageCircle className="clickable" size={25}/>
        <FiBell className="clickable" color="black" size={25}/>
        <div className="verticalLine"></div>
        <Image
          width={50}
          src={Profile}
          className="profileImage clickable"
          alt="Profile"
        />
        <div className="user">
          <p className="clickable">Nasri Adzlani</p>
          <span>nasri@jkt1.ebdesk.com</span>
        </div>
      </div>
    </div>
  );
};

export default Header;

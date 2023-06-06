import Image from "next/image";
import React from "react";
import Pictures from "@/assets/picture.jpg";
import { FiEdit } from "react-icons/fi";

const Profile = () => {
  return (
    <div className="Profile">
      <span>My Profile</span>
      <div className="mainProfile">
        <div className="left">
          <Image src={Pictures} className="profilePicture" alt="profile" />
          <div className="contents">
            <p className="name">Nasri Adzlani</p>
            <p className="token">0x00123cs123123ase127</p>
            <p className="titles">Software Engineer, Indonesia</p>
          </div>
        </div>
        <div className="edit">
          Edit <FiEdit />
        </div>
      </div>
      <div className="personalInfo">
        <span>Personal Information</span>
        <div className="contentCenter">
          <div className="left">
            <p className="title">First Name</p>
            <p className="response">Nasri</p>
            <p className="title">Email Address</p>
            <p className="response">nasri@jkt1.ebdesk.com</p>
          </div>
          <div className="right">
            <p className="title">Last Name</p>
            <p className="response">Adzlani</p>
            <p className="title">Title</p>
            <p className="response">Software Engineer</p>
          </div>
          <div className="edit">
          Edit <FiEdit />
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default Profile;

/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaSnapchat } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>

      <div>&copy; All Rights Reserved By Om Gupta.</div>

      <div>
        <Link to={""} target="_blank"><FaGithub /></Link>
        <Link to={""} target="_blank"><FaSnapchat /></Link>
        <Link to={""} target="_blank"><FaGithub /></Link>
        <Link to={""} target="_blank"><RiInstagramFill /></Link>
      </div>
    </footer>
  );
};

export default Footer;

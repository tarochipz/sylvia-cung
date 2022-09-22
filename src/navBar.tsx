import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Link } from "react-router-dom";
//@ts-ignore
import { HashLink } from "react-router-hash-link";

const IconStyle = {
  transition: "transform 1s",
  color: "red",
  paddingRight: "15px",
  display: "inline",
  "&:hover": {
    color: "#ff9e9e",
    transform: "rotate(180deg)",
    cursor: "pointer",
  },
};

const MenuStyle = {
  fontFamily: "Inconsolata", // monospace;
  textTransform: "uppercase",
  fontWeight: "bold",
  display: "flex",
  flexDirection: "row",
  listStyleType: "none",
  margin: "0",
  padding: "0",
  marginLeft: "auto",
  "&:> a": {
    padding: "15px",
    color: "red",
    textDecoration: "none",
  },
  "&:> a:hover": {
    textDecoration: "underline",
  },
};

const LogoStyle = {
  fontFamily: "Raleway", //sans-serif;
  fontWeight: "200",
  fontSize: "22px",
  color: "red",
};

export const NavBar = () => {
  {
    return (
      <div style={{ width: "100%", display: "flex", alignItems: "center" }}>
        <h1 style={LogoStyle}>SC</h1>
        <div style={{ paddingLeft: "10px" }}>
          <a href="https://www.linkedin.com/in/sylviacung/" target="_blank">
            <LinkedInIcon style={IconStyle} />
          </a>
          <a href="https://github.com/tarochipz" target="_blank">
            <GitHubIcon style={IconStyle} />
          </a>
          <a href="https://www.instagram.com/tarochipz/" target="_blank">
            <InstagramIcon style={IconStyle} />
          </a>
          <a href="mailto:sylvcung@gmail.com" target="_blank">
            <MailOutlineIcon style={IconStyle} />
          </a>
        </div>
        {/* @ts-ignore */}
        <ul style={MenuStyle}>
          <Link to="/">
            <li>Home</li>
          </Link>
          {/* TODO: add scroll animation */}
          <HashLink to="/#about">
            <li>About</li>
          </HashLink>
          {/* <HashLink to="/#resume">
                <li>Resume</li>
              </HashLink> */}
          <Link to="/photography">
            <li>Photography</li>
          </Link>
          {/* <a href="#">
                <li>Food</li>
              </a> */}
        </ul>
      </div>
    );
  }
};

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
    transform: "rotate(360deg)",
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
};

const LinkStyle = {
  padding: "15px",
  color: "red",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
    color: "#ff9e9e",
  },
};

const LogoStyle = {
  fontFamily: "Raleway",
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
            <LinkedInIcon sx={IconStyle} fontSize={"small"} />
          </a>
          <a href="https://github.com/tarochipz" target="_blank">
            <GitHubIcon sx={IconStyle} fontSize={"small"} />
          </a>
          <a href="https://www.instagram.com/tarochipz/" target="_blank">
            <InstagramIcon sx={IconStyle} fontSize={"small"} />
          </a>
          <a href="mailto:sylvcung@gmail.com" target="_blank">
            <MailOutlineIcon sx={IconStyle} fontSize={"small"} />
          </a>
        </div>
        {/* @ts-ignore */}
        <ul style={MenuStyle}>
          <Link style={LinkStyle} to="/">
            <li>Home</li>
          </Link>
          {/* TODO: add scroll animation */}
          <HashLink style={LinkStyle} to="/#about">
            <li>About</li>
          </HashLink>
          {/* <HashLink to="/#resume">
                <li>Resume</li>
              </HashLink> */}
          <Link style={LinkStyle} to="/photography">
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

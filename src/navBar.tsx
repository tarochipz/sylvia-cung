import React from "react";
import styled from "@emotion/styled";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
//@ts-ignore
import { HashLink } from "react-router-hash-link";

const NavItemStyle = `
  padding: 15px;
  color: red;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: #ff9e9e;
  },
`;
const StyledHashLink = styled(HashLink)`
  ${NavItemStyle}
`;

const StyledLink = styled(Link)`
  ${NavItemStyle}
`;

const StyledMenuLink = styled(Link)`
  padding: 15px;
  color: red;
  text-decoration: none;
  cursor: pointer;
`;

const StyledLi = styled.li`
  ${NavItemStyle}
`;

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
  fontFamily: "Inconsolata",
  textTransform: "uppercase",
  fontWeight: "bold",
  display: "flex",
  flexDirection: "row",
  listStyleType: "none",
  margin: "0",
  padding: "0",
  marginLeft: "auto",
};

const LogoStyle = {
  fontFamily: "Raleway",
  fontWeight: "200",
  fontSize: "22px",
  color: "red",
};

export const NavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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
          <StyledLink to="/">
            <li>Home</li>
          </StyledLink>
          {/* TODO: add scroll animation */}
          <StyledHashLink to="/#about">
            <li>About/Resume</li>
          </StyledHashLink>
          <StyledLi
            onClick={(event: React.MouseEvent<HTMLLIElement>) =>
              handleClick(event)
            }
          >
            Photography
          </StyledLi>
          {/* <Link style={LinkStyle} to="/recipes">
            <li>Recipes</li>
          </Link> */}
        </ul>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <StyledMenuLink to="/photography/weddings">
            <MenuItem onClick={handleClose}>Weddings & Engagements</MenuItem>
          </StyledMenuLink>
          <StyledMenuLink to="/photography/portraits">
            <MenuItem onClick={handleClose}>People & Portraits</MenuItem>
          </StyledMenuLink>
          <StyledMenuLink to="/photography/landscape">
            <MenuItem onClick={handleClose}>Landscape & Things</MenuItem>
          </StyledMenuLink>
        </Menu>
      </div>
    );
  }
};

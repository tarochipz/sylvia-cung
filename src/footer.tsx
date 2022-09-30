import React from "react";

const footerWrapperStyle = {
  left: "0",
  bottom: "0",
  width: "100%",
  backgroundColor: "white",
  fontFamily: "Raleway, sans-serif",
  color: "red",
  textAlign: "center",
  padding: "20px",
  position: "sticky",
};

const footerLinkStyle = {
  color: "red",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
};

export const Footer = () => {
  return (
    // @ts-ignore
    <div style={footerWrapperStyle} className="footerWrapper">
      <a
        style={footerLinkStyle}
        href="https://github.com/tarochipz/sylvia-cung"
        target="_blank"
      >
        Designed & built w/ &#x1F495; by Sylvia Cung &#169;{" "}
        {new Date().getFullYear()}
      </a>
    </div>
  );
};

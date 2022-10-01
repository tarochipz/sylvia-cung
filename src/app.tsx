import React from "react";
import { NavBar } from "./navBar";
import Home from "./pages/home/index";
import { Photography } from "./pages/photography";
import { Routes, Route } from "react-router-dom";
import { Footer } from "./footer";

const HomepageWrapperStyle = {
  paddingLeft: "8%",
  paddingRight: "8%",
  position: "relative",
  minHeight: "100%",
};

const NavStyle = {
  backgroundColor: "white",
  position: "sticky",
  top: "0",
  zIndex: "100",
};

export const App = () => {
  return (
    // @ts-ignore
    <div style={HomepageWrapperStyle}>
      {/* @ts-ignore */}
      <div style={NavStyle}>
        <NavBar />
      </div>
      <Routes>
        <Route path="/photography">
          <Route
            path="weddings"
            element={<Photography imageType="weddings" />}
          />
          <Route
            path="portraits"
            element={<Photography imageType="portraits" />}
          />
          <Route
            path="landscape"
            element={<Photography imageType="landscape" />}
          />
        </Route>
        <Route path="/*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};

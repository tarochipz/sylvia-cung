import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import WebFont from "webfontloader";
import { NavBar } from "./navBar";
import Home from "./pages/home/index";
import { Photography } from "./pages/photography";
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
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Inconsolata"],
      },
    });
  }, []);

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
        <Route path="/travel">
          <Route path="coffee" element={<Photography imageType="coffee" />} />
          <Route
            path="asia"
            // element={<Photography imageType="portraits" />}
          />
        </Route>
        <Route path="/*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};

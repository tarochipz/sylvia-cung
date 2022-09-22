import React from "react";
import { SvgBackground } from "./svgBackground";
import { AboutSection } from "./about/aboutSection";
import { ResumeSection } from "./resume/resumeSection";
import "./index.css";

export default function Home() {
  return (
    <div>
      <div className="textOverlay">
        <h2>
          Hi, I'm Sylvia! A full stack engineer based in San Francisco, from
          Toronto.
        </h2>
      </div>
      <SvgBackground />
      <AboutSection />
      <ResumeSection />
    </div>
  );
}

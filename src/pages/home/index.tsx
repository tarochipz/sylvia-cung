import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { SvgBackground } from "./svgBackground";
import { AboutSection } from "./about/aboutSection";
import { ResumeSection } from "./resume/resumeSection";

const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

const cursor = keyframes`
  from, to { border-color: transparent }
  50% { border-color: gray }
`;

const TextOverlay = styled.div`
  font-family: "Inconsolata";
  color: white;
  background-color: rgba(48, 95, 178, 0.3);
  position: absolute; /* to overlay text */
  left: 50%;
  margin-left: -40%;
  top: 10%;
  animation: ${typing} 6s steps(30, end), ${cursor} 0.8s step-end infinite;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: 0.15em solid gray; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  letter-spacing: 0.25em;
`;

export default function Home() {
  return (
    <div>
      <TextOverlay>
        <h2>
          Hi, I'm Sylvia! A full stack engineer based in San Francisco, from
          Toronto.
        </h2>
      </TextOverlay>
      <SvgBackground />
      <AboutSection />
      <ResumeSection />
    </div>
  );
}

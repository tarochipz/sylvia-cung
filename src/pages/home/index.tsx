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

const StyledH2 = styled.h2`
  @font-face {
    font-family: "Inconsolata";
    font-style: normal;
    font-weight: 400;
    font-stretch: 100%;
    src: url(https://fonts.gstatic.com/s/inconsolata/v31/QldgNThLqRwH-OJ1UHjlKENVzkWGVkL3GZQmAwLYxYWI2qfdm7Lpp4U8WR32l3WdycuJDA.woff2)
      format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }
`;

export default function Home() {
  return (
    <div>
      <TextOverlay>
        <StyledH2>
          Hi, I'm Sylvia! A full stack engineer based in San Francisco, from
          Toronto.
        </StyledH2>
      </TextOverlay>
      <SvgBackground />
      <AboutSection />
      <ResumeSection />
    </div>
  );
}

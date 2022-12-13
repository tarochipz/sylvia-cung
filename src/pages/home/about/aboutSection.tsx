import React from "react";
import styled from "@emotion/styled";

const StyledDiv = styled.div`
  width: 60%;
  float: left;
  padding: 10px;
  color: red;
  font-family: "Inconsolata", monospace;
`;

const StyledImg = styled.img`
  width: 20%;
  border-radius: 50%;
  float: left;
  padding: 2%;
`;

const Wrapper = styled.div`
  margin: auto;
  padding: 10px;
  border: 1px solid red;
  overflow: hidden;
`;

export const AboutSection = () => {
  return (
    <Wrapper id="about">
      <StyledImg src="https://i.imgur.com/zbHawOo.jpg?2" />
      <StyledDiv>
        <h2>About Me</h2>
        <p>I'm a self-taught Full Stack Engineer based in San Francisco.</p>
        <p>
          Prior to being a Software Engineer I got a degree in Chemical
          Engineering from the University of Waterloo in Canada, and worked in
          various roles within Professional Services and Sales Engineering for 4
          years.
        </p>
        <p>
          I enjoy solving problems and creating anything visual - from web apps
          and UIs, to Instagram content, to a delicious aesthetically plated
          meal.
        </p>
        <p>
          I spend my time away from my computer biking or hiking around the Bay
          Area, playing Beat Saber and DDR, working out, taking photos, making
          coffee, creating food and cocktail recipes, travelling to new places,
          and attending music festivals.
        </p>
      </StyledDiv>
    </Wrapper>
  );
};

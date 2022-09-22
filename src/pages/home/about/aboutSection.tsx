import React from "react";
import "./aboutSection.css";

export const AboutSection = () => {
  return (
    <div id="about" className="aboutSectionWrapper">
      <img src="https://i.imgur.com/zbHawOo.jpg?2" />
      <div className="text">
        <h2>About Me</h2>
        <p>I'm a self-taught Full Stack Engineer based in San Francisco.</p>
        <p>
          Prior to being a Software Engineer I got a degree in Chemical
          Engineering from the University of Waterloo in Canada, and worked in
          various roles within Professional Services and Sales Engineering for 4
          years.
        </p>
        <p>
          I enjoy solving problems and creating visual things - from web apps
          and UIs, to Instagram content, to a delicious aesthetically plated
          meal.
        </p>
        <p>
          I spend my time away from my computer biking or hiking around the Bay
          Area, playing Beat Saber and DDR, doing HIIT and hot yoga, doing
          photography, creating food and cocktail recipes, travelling to new
          places, and attending music festivals.
        </p>
      </div>
    </div>
  );
};

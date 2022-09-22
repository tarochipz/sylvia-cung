import React from "react";
import "./resumeSection.css";
import { data } from "./data";

interface ResumeData {
  jobTitle: string;
  date: string;
  jobDescription: string[];
}

export const ResumeSection = () => {
  const [resumeData, setResumeData] = React.useState<ResumeData>(data[0]);
  const [active, setActive] = React.useState<Number>(0);

  const handleClick = (index: number) => {
    setResumeData({
      jobTitle: data[index].jobTitle,
      date: data[index].date,
      jobDescription: data[index].jobDescription,
    });
    setActive(index);
  };

  return (
    <div id="resume" className="resumeSectionWrapper">
      <h2>Work Experience</h2>
      <ul className="timeline">
        {data.map((entry, index) => {
          return (
            <li
              className={active === index ? "active" : ""}
              key={index}
              onClick={() => handleClick(index)}
            >
              {entry.company}
            </li>
          );
        })}
      </ul>
      <div className="timelineDetails">
        <h3>{resumeData?.jobTitle}</h3>
        <h4>{resumeData?.date}</h4>
        <ul>
          {resumeData?.jobDescription.map((entry) => {
            return <li>{entry}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

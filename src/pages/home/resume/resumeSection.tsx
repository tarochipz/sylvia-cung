import React from "react";
import styled from "@emotion/styled";
import "./resumeSection.css";
import { data } from "./data";

interface ResumeData {
  jobTitle: string;
  date: string;
  jobDescription: string[];
}

const Wrapper = styled.div`
  overflow: hidden;
  padding-bottom: 30px;
  font-family: "Raleway", sans-serif;
  color: #0157b8;
`;

const Timeline = styled.ul`
  font-family: "Inconsolata", monospace;
  color: #6593e1;
  list-style-type: none;
  text-align: right;
  width: 30%;
  float: left;
  padding-inline-start: 0px;
`;
//@ts-ignore
const TimelineItem = styled.li`
  font-weight: ${(props) => (props.isActive ? "bold" : "")};
  padding: 10px;
  border-right: 3px solid #6593e1;
  &:hover {
    cursor: pointer;
    background-color: rgba(59, 137, 255, 0.1);
  }
`;

const TimelineDetails = styled.div`
  font-family: "Inconsolata", monospace;
  color: #0157b8;
  margin: 10px;
  float: left;
  width: 60%;
  h3 {
    margin-block-end: 0.3em;
  }
  h4 {
    margin-block-start: 0;
  }
`;

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
    <Wrapper id="resume">
      <h2>Work Experience</h2>
      <Timeline>
        {data.map((entry, index) => {
          return (
            <TimelineItem
              //@ts-ignore
              isActive={active === index}
              key={index}
              onClick={() => handleClick(index)}
            >
              {entry.company}
            </TimelineItem>
          );
        })}
      </Timeline>
      <TimelineDetails>
        <h3>{resumeData?.jobTitle}</h3>
        <h4>{resumeData?.date}</h4>
        <ul>
          {resumeData?.jobDescription.map((entry) => {
            return <li>{entry}</li>;
          })}
        </ul>
      </TimelineDetails>
    </Wrapper>
  );
};

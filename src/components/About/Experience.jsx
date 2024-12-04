import React from "react";
import { ImPointRight } from "react-icons/im";
import Card from "react-bootstrap/Card";
import { GiPostOffice } from "react-icons/gi";
import { FaCode } from "react-icons/fa";
import { MdOutlineSettingsRemote } from "react-icons/md";
const Experience = () => {
  return (
    <div>
      <h1 style={{ fontSize: "2.1em" }}>
        My <strong className="purple">Eperience</strong>
      </h1>
      <hr />
      <Card className="quote-card-view">
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <div className="p-3">
              <p style={{ textAlign: "justify" }}>
                <span className="purple">Jr. </span>Software Engineer
                <br />
               <span className="purple">  <FaCode /> </span>Frontend Developer
                <br />
                
                <span className="purple"><GiPostOffice />{" "}
                  </span>APEXINFY TECHNOLOGIES (OPC) PVT.LTD, Kolkatta
                <br />
                <span className="purple"><MdOutlineSettingsRemote />{" "}
                  </span>Remote
                <br />
                <br />
                Skills
              </p>
              <ul>
                <li className="about-activity">
                  <ImPointRight /> Javascript
                </li>
                <li className="about-activity">
                  <ImPointRight /> Typescript
                </li>
                <li className="about-activity">
                  <ImPointRight /> Html/Css
                </li>
                <li className="about-activity">
                  <ImPointRight /> ReactJs
                </li>
                <li className="about-activity">
                  <ImPointRight /> NodeJs
                </li>
              </ul>
              <footer className="blockquote-footer">
                Junuary-2024 to current
              </footer>
            </div>
            <hr />

            <div className="p-3">
              <p style={{ textAlign: "justify" }}>
                <span className="purple">Jr. </span>Software Engineer
                <br />
               <span className="purple">  <FaCode /> </span>Frontend Developer
                <br />
                
                <span className="purple"><GiPostOffice />{" "}
                  </span>HOSTGRAD WEB SOLUTIONS, Kolkatta
                <br />
                <span className="purple"><MdOutlineSettingsRemote />{" "}
                  </span>Remote
                <br />
                <br />
                Skills
              </p>
              <ul>
                <li className="about-activity">
                  <ImPointRight /> Javascript
                </li>
                <li className="about-activity">
                  <ImPointRight /> Typescript
                </li>
                <li className="about-activity">
                  <ImPointRight /> Html/Css
                </li>
                <li className="about-activity">
                  <ImPointRight /> ReactJs
                </li>
                <li className="about-activity">
                  <ImPointRight /> NodeJs
                </li>
                <li className="about-activity">
                  <ImPointRight /> AWS EC2(Migration)
                </li>
              </ul>
              <footer className="blockquote-footer">
                June-2023 to January-2024
              </footer>
            </div>
            <hr />
            <div className="p-3">
              <p style={{ textAlign: "justify" }}>
                Full Stack
                <span className="purple"> Web Developer Trainee </span>
                <br />
                <GiPostOffice />{" "}
                <span>
                  Alma<span className="purple">Better</span>,
                  <br />{" "}
                  <span style={{ paddingLeft: "25px" }}>
                    Banglore, Remote.
                  </span>{" "}
                </span>
                <br />
                <br />
                Skills
              </p>
              <ul>
                <li className="about-activity">
                  <ImPointRight /> Javascript
                </li>
                <li className="about-activity">
                  <ImPointRight /> Typescript
                </li>
                <li className="about-activity">
                  <ImPointRight /> Html/Css
                </li>
                <li className="about-activity">
                  <ImPointRight /> MongoDB
                </li>
                <li className="about-activity">
                  <ImPointRight /> ExpressJs
                </li>
                <li className="about-activity">
                  <ImPointRight /> ReactJs
                </li>
                <li className="about-activity">
                  <ImPointRight /> NodeJs
                </li>
              </ul>
              <footer className="blockquote-footer">
                Augest-2022 to May-2023 : 10 Months
              </footer>
            </div>
            <hr />

            <div className="p-3">
              <p style={{ textAlign: "justify" }}>
                Php<span className="purple"> Intern </span>
                <br />
                <GiPostOffice />{" "}
                <span>
                  RB<span className="purple">Softwares</span>,
                  <br />
                  <span style={{ paddingLeft: "25px" }}>
                    Nashik, Maharashtra.
                  </span>{" "}
                </span>
                <br />
                <br />
                Skills
              </p>
              <ul>
                <li className="about-activity">
                  <ImPointRight /> Html/Css
                </li>
                <li className="about-activity">
                  <ImPointRight /> Php
                </li>
              </ul>
              <footer className="blockquote-footer">
                Feb-2021 to July-2021 : 6 Months
              </footer>
            </div>
            <hr />
          </blockquote>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Experience;

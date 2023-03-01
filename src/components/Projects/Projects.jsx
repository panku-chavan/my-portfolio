import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import calc from "../../Assets/Projects/calc.png";
import resumeBuilder from "../../Assets/Projects/resumeBuilder.png";
import flashcard from "../../Assets/Projects/flashcard.png";
import crypto from "../../Assets/Projects/crypto.png";
import myportfolio from "../../Assets/Projects/myportfolio.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crypto}
              isBlog={false}
              title="Cryptocurrency Dashboard"
              description="A crypto dashboard is a digital platform that lives on a website or an app (either desktop or mobile). Its primary function is to track your cryptocurrency accounts and coins and monitor their historical prices and current values so that you can manage both your crypto assets and related financial plans accordingly."
              ghLink="https://github.com/panku-chavan/crypto_dashboard"
              demoLink="https://panku-chavan.github.io/crypto_dashboard/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flashcard}
              isBlog={false}
              title="Flashcard Generator "
              description="This is a Single Page application created using ReactJs. All responsive design are developed using TailwindCss framework. React icons also used. In this app user can make a flashcard as per there information. This project has three pages CreateFlashcard, MyFlashcard and last FlashcardDetails Page. "
              ghLink="https://github.com/panku-chavan/flashcard-generator"
              demoLink="https://flashcard-generator-15e43.web.app//"
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={resumeBuilder}
              isBlog={false}
              title="Resume Builder"
              description="In this app user can make there resume by simply adding there information and download there resume in pdf format.This is a sipmle react app. The hole app develop with reactJs, React hooks, Design with react bootstrap and manage the state using react redux. This is aslo a Single Page application SPA." 
              ghLink="https://github.com/panku-chavan/resume-builder"
              demoLink="https://panku-chavan.github.io/resume-builder/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myportfolio}
              isBlog={false}
              title="My Portfolio"
              description="This is my portfolio app. I make this this app using create-react-app. I design this app using bootstrap framework. This is responsive app. In this app i tried to explained myself in breif. I have added my resume and all information about me. I added my all projects or recent work also. "
              ghLink="https://github.com/panku-chavan/my-portfolio"
              demoLink="https://panku-chavan.github.io/my-portfolio/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calc}
              isBlog={false}
              title="Simple Calculator"
              description="This is a Simple React App. This is a plain CSS project. All Mathematical operation works properly. Simple Calculator helps users to calculate simple calculations with great speed and accessibility. This makes it the best solution for quick and simple calculations."
              ghLink="https://github.com/panku-chavan/simple-calculator"
              demoLink="https://panku-chavan.github.io/simple-calculator/"              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

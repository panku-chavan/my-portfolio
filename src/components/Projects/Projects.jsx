import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import calc from "../../Assets/Projects/calc.png";
import resumeBuilder from "../../Assets/Projects/resumeBuilder.png";
import flashcard from "../../Assets/Projects/flashcard.png";
import crypto from "../../Assets/Projects/crypto.png";

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
              title="Flashcard Generator"
              description="Flashcard Generator"
              ghLink="https://github.com/panku-chavan/flashcard-generator"
              demoLink="https://flashcard-generator-15e43.web.app//"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calc}
              isBlog={false}
              title="Simple Calculator"
              description="This is a Simple React App. This is a plain CSS project. All Mathematical operation works properly."
              ghLink="https://github.com/panku-chavan/simple-calculator"
              demoLink="https://panku-chavan.github.io/simple-calculator/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={resumeBuilder}
              isBlog={false}
              title="Resume Builder"
              description="Resume builder."
              ghLink="https://github.com/panku-chavan/resume-builder"
              demoLink="https://panku-chavan.github.io/resume-builder/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

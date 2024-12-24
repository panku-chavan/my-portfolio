import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import CertificateCard from "./CertificateCard";
import jsBasic from "../../Assets/Cerificates/jsBasic.jpg";
import JsIntermediate from "../../Assets/Cerificates/JsIntermediate.jpg";
import react from "../../Assets/Cerificates/react.jpg";

import rpa from "../../Assets/Cerificates/rpa.jpg";

import fswd from "../../Assets/Cerificates/fswd.png";
import fd from "../../Assets/Cerificates/frontend.jpg";

const certificates = [
  { title: "Fronend Development React Hackerrank", img: fd, link: "https://www.hackerrank.com/certificates/iframe/ede997426e1b" },
  { title: "Full stack web development", img: fswd, link: "https://verified.sertifier.com/en/verify/37309545415262/" },
  { title: "Javascript Basics", img: jsBasic, link: "https://www.hackerrank.com/certificates/iframe/4e7680f85a43" },
  { title: "Javascript Intermediate", img: JsIntermediate, link: "https://www.hackerrank.com/certificates/iframe/c35ba335afd6" },
  { title: "RPA Fundamental", img: rpa, link: "https://akademy.akabot.com/certificates/3c159bca0fa94503b162103b2780117a" },
  { title: "React", img: react, link: "https://www.hackerrank.com/certificates/iframe/af94a5902369" },
];

const Certificates = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Certificates </strong>
        </h1>
        <p style={{ color: "white" }}>Here are a few certificates I've earn.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {certificates.map((certificate,index)=>(<Col key={index} md={6} className="project-card">
            <CertificateCard img={certificate.img} title={certificate.title} link={certificate.link}/>
          </Col>))}
          
        </Row>
      </Container>
    </Container>
  );
};

export default Certificates;

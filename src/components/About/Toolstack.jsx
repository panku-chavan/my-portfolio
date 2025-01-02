import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiPostman,
  SiVercel,
} from "react-icons/si";
import { FaWindows } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <VscVscode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>

    </Row>
  );
}

export default Toolstack;

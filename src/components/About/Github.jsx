import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";


function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="panku-chavan"
        blockSize={15}
        blockMargin={3}
        color="#c084f5"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;

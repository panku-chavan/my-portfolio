import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { AiOutlineDownload } from "react-icons/ai";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {  pdfjs } from "react-pdf";

import Particle from "../Particle";
import pdf from "../../Assets/Pankaj_Chavan.pdf";
import PankajChavan from "../../Assets/PankajChavan.jpg";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <img src={PankajChavan} alt="PankajChavan" className="img-fluid w-50"></img>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        {/* <h1>This Page is not avilable currently....This is under construction</h1> */}
      </Container>
    </div>
  );
}

export default ResumeNew;

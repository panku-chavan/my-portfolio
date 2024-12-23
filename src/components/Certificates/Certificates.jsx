import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Particle from '../Particle';
import CertificateCard from './CertificateCard';
import jsBasic from '../../Assets/Cerificates/jsBasic.jpg';
import JsIntermediate from '../../Assets/Cerificates/JsIntermediate.jpg';
import react from '../../Assets/Cerificates/react.jpg';
import reduxSync from '../../Assets/Cerificates/reduxSync.png';
import GYT from '../../Assets/Cerificates/GYS.png';
import fg from '../../Assets/Cerificates/fg.png';

import react2 from '../../Assets/Cerificates/react2.png';
import rpa from '../../Assets/Cerificates/rpa.jpg';
import advancereact from '../../Assets/Cerificates/advanceReact.png';
import node from '../../Assets/Cerificates/node.png';
import jqry from '../../Assets/Cerificates/jqry.png';
import aws from '../../Assets/Cerificates/aws.png';
import mongoose from '../../Assets/Cerificates/mongoose.png';
import mongodb from '../../Assets/Cerificates/mongodb.png';
import css from '../../Assets/Cerificates/css.png';
import dom from '../../Assets/Cerificates/dom.png';
import html from '../../Assets/Cerificates/html.png';
import fswd from '../../Assets/Cerificates/fswd.png';


const Certificates = () => {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    My  <strong className="purple">Certificates </strong>
                </h1>
                <p style={{ color: "white" }}>
                    Here are a few certificates I've earn.
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                <Col md={6} className="project-card">
                        <CertificateCard
                            img={fswd}
                            title={"Full stack web development"}
                        />
                    </Col>
                    <Col md={6} className="project-card">
                        <CertificateCard
                            img={jsBasic}
                            title={"Javascript Basics"}
                        />
                    </Col>
                    <Col md={6} className="project-card">
                        <CertificateCard
                            img={JsIntermediate}
                            title={"Javascript Intermediate"}
                        />
                    </Col>
                    <Col md={6} className="project-card">
                        <CertificateCard
                            img={rpa}
                            title={"RPA Fundamental"}
                        />
                    </Col>
                    <Col md={6} className="project-card">
                        <CertificateCard
                            img={react}
                            title={"React"}
                        />
                    </Col>
                    <Col md={6} className="project-card">
                        <CertificateCard
                            img={reduxSync}
                            title={"Redux Syncronous"}
                        />
                    </Col>
                    <Col md={6} className="project-card">
                        <CertificateCard
                            img={GYT}
                            title={"Get Youtube Subscribers Backend-Project"}
                        />
                    </Col>
                    <Col md={6} className="project-card">
                        <CertificateCard
                            img={fg}
                            title={"Flashcard Generator Frontend-Project"}
                        />
                    </Col>
                    <Col md={6} className="project-card">
                        <CertificateCard
                            img={react2}
                            title={"Introduction to react"}
                        />
                    </Col>
                    <Col md={6} className="project-card">
                        <CertificateCard
                            img={advancereact}
                            title={"React Advance"}
                        />
                    </Col>
                    <Col md={6} className="project-card">
                        <CertificateCard
                            img={node}
                            title={"Introduction to NodeJs"}
                        />
                    </Col>
                    <Col md={6} className="project-card">
                        <CertificateCard
                            img={jqry}
                            title={"Introduction to jQuery"}
                        />
                    </Col>
                    <Col md={6} className="project-card">
                        <CertificateCard
                            img={aws}
                            title={"Introduction to Aws"}
                        />
                    </Col>
                    <Col md={6} className="project-card">
                        <CertificateCard
                            img={mongoose}
                            title={"Introduction to Mongoose"}
                        />
                    </Col>
                    <Col md={6} className="project-card">
                        <CertificateCard
                            img={mongodb}
                            title={"Introduction to MongoDb"}
                        />
                    </Col>
                    <Col md={6} className="project-card">
                        <CertificateCard
                            img={css}
                            title={"Introduction to CSS"}
                        />
                    </Col>
                    <Col md={6} className="project-card">
                        <CertificateCard
                            img={dom}
                            title={"Introduction to DOM"}
                        />
                    </Col>
                    <Col md={6} className="project-card">
                        <CertificateCard
                            img={html}
                            title={"Introduction to HTML"}
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Certificates
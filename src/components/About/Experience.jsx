import React from 'react'
import { ImPointRight } from "react-icons/im";
import Card from "react-bootstrap/Card";
import { GiPostOffice } from "react-icons/gi";

const Experience = () => {
    return (
        <div>
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                My <strong className="purple">Eperience</strong>
            </h1>
            <Card className="quote-card-view">
                <Card.Body>
                    <blockquote className="blockquote mb-0">

                        <hr />
                        <div className='p-3'>

                            <p style={{ textAlign: "justify" }}>
                                Software<span className="purple">Developer Engineer </span>
                                Front<span className='purple'>end</span> Developer
                                <br /><GiPostOffice />  <span style={{ padding: "", }}>Hostgrad<span className='purple'>WebSolutions</span>, Kolkatta, Remote</span>
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
                            <footer className="blockquote-footer">June-2022 to current</footer>


                        </div>
                        <hr />
                        <div className='p-3'>
                            <p style={{ textAlign: "justify" }}>
                                Full Stack<span className="purple"> Web Developer Trainee </span>
                                <br /><GiPostOffice />  <span style={{ padding: "5px", }}>Alma<span className='purple'>Better</span>, Banglore</span>
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
                            <footer className="blockquote-footer">Augest-2022 to May-2023 : 10 Months</footer>

                        </div>
                        <hr />

                        <div className="p-3">
                            <p style={{ textAlign: "justify" }}>
                                Php<span className="purple"> Intern </span>
                                <br /><GiPostOffice />  <span style={{ padding: "5px", }}>RB<span className='purple'>Softwares</span>, Nashik</span>
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
                            <footer className="blockquote-footer">Feb-2021 to July-2021 : 6 Months</footer>
                        </div>
                        <hr />
                    </blockquote>
                </Card.Body>
            </Card>


        </div>
    )
}

export default Experience
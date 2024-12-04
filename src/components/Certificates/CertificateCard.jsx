import React from "react";
import Card from "react-bootstrap/Card";
import { IoMdDownload } from "react-icons/io";

const CertificateCard = ({ img, title }) => {
    return (
        <Card className="project-card-view position-relative">
            <Card.Body>
                <Card.Img variant="top" src={img} alt="card-img" className="position-relative" />
                <Card.Title>{title}</Card.Title>
                <a 
                    href={img} 
                    download 
                    className="download-icon-btn"
                >
                    <IoMdDownload size={24} />
                </a>
            </Card.Body>
        </Card>
    );
};

export default CertificateCard;

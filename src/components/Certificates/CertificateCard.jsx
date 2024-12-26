import React from "react";
import Card from "react-bootstrap/Card";
import { IoMdDownload, IoMdLink } from "react-icons/io";

const CertificateCard = ({ img, title,link }) => {
    return (
        
        <Card className="project-card-view position-relative" >
            <Card.Body>
                <Card.Img variant="top" src={img} alt="card-img" className="position-relative" />
                <Card.Title>{title}</Card.Title>
                <a 
                    href={link} 
                    target="_blank"
                    className="link-icon-btn"
                    rel="noreferrer"
                >
                    <IoMdLink size={24} />
                </a>
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

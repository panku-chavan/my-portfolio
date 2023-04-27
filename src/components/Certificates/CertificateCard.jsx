import React from 'react'
import Card from "react-bootstrap/Card";
const CertificateCard = ({ img, title }) => {
    return (
        <Card className="project-card-view">
            <Card.Body>
                <Card.Img variant="top" src={img} alt="card-img" />
                <Card.Title>{title}</Card.Title>

            </Card.Body>
        </Card>
    )
}

export default CertificateCard
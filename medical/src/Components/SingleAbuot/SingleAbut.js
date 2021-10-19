import React from 'react';
import { Col, Card } from 'react-bootstrap';

const SingleAbut = (props) => {
    const {doctorIMg,doctorName,Country} = props.single
    return (
        <Col>
        <Card>
            <Card.Img variant="top" src={doctorIMg} />
            <Card.Body>
            <Card.Title>{doctorName}</Card.Title>
            <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit longer.
            </Card.Text>
            </Card.Body>
        </Card>
    </Col>

    );
};

export default SingleAbut;
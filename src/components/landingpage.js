import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import avatar from '../assets/dylson.jpg'


export default function Landing() {
    return (
        <div>
            <Container fluid className="landing-grid">
                <Row>
                    <Col></Col>
                    <Col><img src={avatar} alt="picture of Dylson" className="avatar-img"/></Col>
                    <Col></Col>
                </Row>
            </Container>

            <Container fluid className="landing-grid">
            <div className="banner-text">
            <h1> Full-Stack Web Developer </h1>
            <hr />
            </div>

            <p>HTML/CSS | Bootstrap | Javascrip</p>
            </Container>
            

        </div>
    );

}

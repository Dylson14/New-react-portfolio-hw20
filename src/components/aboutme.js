import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import standDyl from "../assets/standDyl.jpg";

export default function AboutMe() {
  return (
    <div className="landing-grid">
      <Container className="contact-grid bottom-padding">
        <Row>
          <Col>
            <h2>Dylson Oliveira</h2>
            <img src={standDyl} alt="dylson standing up" className="hor-img" />
          </Col>
          <Col className="">
            <p style={{ width: "75%", margin: "auto"}}>
              A Driven and Enthusiastic Web Developer, offering an understanding
              in front and back-end development as well as a robust nature
              towards working in a team. Seeking an opportunity to problem-solve
              challenging code in an environment where growth and personal
              development is embraced.
              <ul></ul>
              After completing highschool in Luanda, Angola. I decided to seek
              higher education as a Mechanical Engineer in Edinburgh, Scotland.
              It was only until my 4th year of university I was introduced to
              the programming language C++ in a school module. I found it
              fascinating to see lines of text execute human performed tasks,
              and its possibilities of what it could do made me fall in love
              with programming.
              <ul></ul>
              After graduation, I thought about what to do with my life, and
              decided to explore web development as a career path. So I attended
              a Full-Stack Web Development bootcamp by the university of
              birmingham and only then realized the huge wonders that is the
              tech industry. I'm not looing back, I want to explore more and
              learn loads! 
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

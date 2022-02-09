import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import toDoCamp from '../assets/2DoCamp.png'
import Employee from '../assets/employee.jpeg'
import infoCraft from '../assets/infoCraft.png'
import passGen from '../assets/passGen.png'
import Scheduler from '../assets/scheduler.png'
import weathDash from '../assets/weathDash.jpg'

export default function Projects() {
  return (
    <div className="landing-grid">
      <Container className="bottom-padding top-padding">
        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={toDoCamp} className='project-img' />
              <Card.Body>
                <Card.Title>2DoCamp</Card.Title>
                <Card.Text>
                A to do list app, focused on organizing future cohort students and providing advice, resources, and motivational messages to boost their morale and productivity!
                </Card.Text>
                <Button variant="primary" href='https://github.com/meljack1/2DoCamp'>Github Repo Here</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Employee} className='project-img' />
              <Card.Body>
                <Card.Title>Find My Employee</Card.Title>
                <Card.Text>
                FindMyEmployee is a command-line application that allows a user to manage a company's employee database.
                </Card.Text>
                <Button variant="primary" href="https://github.com/Dylson14/iEmp-FindMyEmployee-HW12">Github Repo Here</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={infoCraft} className='project-img' />
              <Card.Body>
                <Card.Title>InfoCraft</Card.Title>
                <Card.Text>
                Info-craft brings users together to compare stats and achievements with one another, pushing players to compete to being the best crafter there ever was.
                </Card.Text>
                <Button variant="primary" href="https://github.com/jjcourtney/PDJ-InfoCraft">Github Repo Here</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container className="bottom-padding">
        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={passGen} className='project-img' />
              <Card.Body>
                <Card.Title>Qwerty Generator</Card.Title>
                <Card.Text>
                Qwerty generator is a password generating app that lets a user generate random passwords based on a specific criteria. It features dynamic HTML and CSS all powered by JavaScript as well as contains a responsive UI for multiple screen sizes
                </Card.Text>
                <Button variant="primary" href="https://github.com/Dylson14/Qwerty-Generator-HW3">Github Repo Here</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Scheduler} className='project-img' />
              <Card.Body>
                <Card.Title>The Amazing Spider Plan</Card.Title>
                <Card.Text>
                This application allows users to save events for each hour of the day and operates in the browser featuring dynamically updated HTML and CSS all powered by jQuery.
                </Card.Text>
                <Button variant="primary" href="https://github.com/Dylson14/The-Amazing-Spider-Plan-HW5">Github Repo Here</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={weathDash} className='project-img' />
              <Card.Body>
                <Card.Title>Cloudy with a chance of Meatballs</Card.Title>
                <Card.Text>
                This weather dashboard app allows users to retrieve multiple weather conditions of a US city such as their temperature, UV index, humidity etc.
                </Card.Text>
                <Button variant="primary" href="https://github.com/Dylson14/cloudy-with-meatballs-HW6">Github Repo Here</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      
    </div>
  );
}

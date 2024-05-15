import ProjectCard from "./projectComponents/ProjectCard.jsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../components/projectComponents/projectStyles.css";
/*** Import images from Assets folder*/
import cpu from "../../src/assets/ProjectImages/cpu.png";
import kami from "../../src/assets/ProjectImages/kami.png";
import spaceTime from "../../src/assets/ProjectImages/spaceTime.png";
import bema from "../../src/assets/ProjectImages/bema.png";

import Github from "./projectComponents/Github";

export default function Projects() {
  return (
    <Container
      fluid
      className="project-section tracking-tight bg-gray-950 text-white"
    >
      <Container>
        <h1 className="project-heading">
          My Recent{" "}
          <strong>
            <span className="text-fuchsia-900">Works</span>
          </strong>
        </h1>
        <p style={{ color: "" }}>
          Here are a few projects I&lsquo;ve worked on recently.
        </p>
        <Row>
          <Row className="justify-center pb-2.5 align-middle">
            <Col md={4} className="project-card break-normal">
              <ProjectCard
                imgPath={cpu}
                isBlog={false}
                title="CPU Assembler Program"
                description="A program that translate assembly code into machine code by using short alphanumeric codes to represent processor instructions."
                ghLink="https://github.com/BasicallyManny/CPU-Assembler-Program"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={kami}
                isBlog={false}
                title="Kami"
                description="Coordinate bot for Minecraft(really any game that uses coordinates, but was made with Minecraft in mind) - based off the dictionary data structure built into Python. "
                ghLink="https://github.com/BasicallyManny/Coordinate-Bot-for-Discord"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={spaceTime}
                isBlog={false}
                title="SpaceTime"
                description="A full-stack web-app that enables account holders to plan/organize social events. This site was constructed over a period of eight weeks using the Agile Model to simulate industry practices"
                ghLink="https://github.com/BasicallyManny/SpaceTime-Web-APP"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={bema}
                isBlog={false}
                title="BEMA"
                description="Using large language models (LLMs), LangChain, and OpenAI, BEMA is a chatbot that can converse with a person and help with various tasks similar to chatGPT. 
                However, BEMA offers a unique feature tailored to job seekers: it can create individualized resumes based on the job listings furnished by the user."
                ghLink="https://github.com/Teccon1998/GenAIAssistant"
              />
            </Col>
          </Row>
        </Row>
      </Container>
      <Github></Github>
    </Container>
  );
}

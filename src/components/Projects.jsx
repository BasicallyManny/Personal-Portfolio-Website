import ProjectCard from "./projectComponents/ProjectCard.jsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Github from "./projectComponents/Github";
import cpu from "../../src/assets/ProjectImages/cpu.png";
import kami from "../../src/assets/ProjectImages/kami.png";
import spaceTime from "../../src/assets/ProjectImages/spaceTime.png";
import bema from "../../src/assets/ProjectImages/bema.png";
import algorithmVisualizer from "../../src/assets/ProjectImages/algorithmVisual.png";

export default function Projects() {
  return (
    <Container fluid className="project-section bg-gray-950 text-white">
      <Container>
        <h1 className="project-heading">
          My Recent{" "}
          <strong>
            <span className="text-fuchsia-900">Works</span>
          </strong>
        </h1>
        <p className="text-center mb-8">
          Here are a few projects I&lsquo;ve worked on recently.
        </p>
        <Row className="justify-center gap-4">
                    <Col xs={12} md={6} lg={4} xl={3} className="project-card">
            <ProjectCard
              imgPath={bema}
              isBlog={false}
              title="BEMA"
              description="BEMA is a chatbot that can converse with a person and help with various tasks similar to chatGPT. 
              However, BEMA offers a unique feature tailored to job seekers: it can create individualized resumes based on the job listings furnished by the user."
              ghLink="https://github.com/Teccon1998/GenAIAssistant"
            />
          </Col>
          <Col xs={12} md={6} lg={4} xl={3} className="project-card">
            <ProjectCard
              imgPath={algorithmVisualizer}
              isBlog={true}
              title="Algorithm Visualizer"
              description="A sorting algorithm visualizer built in React using TypeScript. This web application
              allows users to visualize how different sorting algorithms work in real time, provides an interactive way to understand the mechanics of sorting."
              ghLink="https://github.com/BasicallyManny/Algorithm-Visualizer"
              blogLink="https://algorithmsvisualizer.vercel.app/"
            />
          </Col>
          <Col xs={12} md={6} lg={4} xl={3} className="project-card">
            <ProjectCard
              imgPath={spaceTime}
              isBlog={false}
              title="SpaceTime"
              description="A full-stack web-app that enables account holders to plan/organize social events. This site was constructed over a period of eight weeks using the Agile Model to simulate industry practices"
              ghLink="https://github.com/BasicallyManny/SpaceTime-Web-APP"
            />
          </Col>              
          <Col xs={12} md={6} lg={4} xl={3} className="project-card">
            <ProjectCard
              imgPath={cpu}
              isBlog={false}
              title="CPU Assembler Program"
              description="A program that translate assembly code into machine code by using short alphanumeric codes to represent processor instructions."
              ghLink="https://github.com/BasicallyManny/CPU-Assembler-Program"
            />
          </Col>
          <Col xs={12} md={6} lg={4} xl={3} className="project-card">
            <ProjectCard
              imgPath={kami}
              isBlog={false}
              title="Kami"
              description="Coordinate bot for Minecraft(really any game that uses coordinates, but was made with Minecraft in mind) - based off the dictionary data structure built into Python. "
              ghLink="https://github.com/BasicallyManny/Coordinate-Bot-for-Discord"
            />
          </Col>                      
        </Row>
      </Container>
      <Github />
    </Container>
  );
}

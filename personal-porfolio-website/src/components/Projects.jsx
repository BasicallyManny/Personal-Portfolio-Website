import ProjectCard from "./projectComponents/ProjectCard";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import  "../components/projectComponents/projectStyles.css";
/*** Import images from Assets folder*/
import cpu from "../../src/assets/Project Images/cpu.PNG"
import Kami from "../../src/assets/Project Images/Kami.PNG"
import SpaceTime from "../../src/assets/Project Images/SpaceTime.PNG"

import Particles from "../components/constants/Particles"
import Github from "./projectComponents/Github";


export default function Projects(){
    return (
        <Container fluid className="project-section tracking-tight bg-gray-950 text-white">
          <Particles></Particles>
          <Container>
            <h1 className="project-heading">
              My Recent <strong><span className="text-fuchsia-900">Works</span></strong>
            </h1>
            <p style={{ color: ""}}>
              Here are a few projects I&lsquo;ve worked on recently.
            </p>
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
              <Col className="project-card break-normal	">
                <ProjectCard
                  imgPath={cpu}
                  isBlog={false}
                  title="CPU Assembler Program"
                  description="A program that translate assembly code into machine code by using short alphanumeric codes to represent processor instructions."
                  ghLink="https://github.com/BasicallyManny/CPU-Assembler-Program"
                />
              </Col>
    
              <Col className="project-card">
                <ProjectCard
                  imgPath={Kami}
                  isBlog={false}
                  title="Kami"
                  description="Coordinate bot for Minecraft(really any game that uses coordinates, but was made with Minecraft in mind) - based off the dictionary data structure built into Python. "
                  ghLink="https://github.com/BasicallyManny/Coordinate-Bot-for-Discord"
                />
              </Col>
    
              <Col className="project-card">
                <ProjectCard
                  imgPath={SpaceTime}
                  isBlog={false}
                  title="SpaceTime"
                  description="A full-stack web-app that enables account holders to plan/organize social events. This site was constructed over a period of eight weeks using the Agile Model to simulate industry practices"
                  ghLink="https://github.com/BasicallyManny/SpaceTime-Web-APP"              
                />
              </Col>
            </Row>
          </Container>
          <Github></Github>
        </Container>
      );
}
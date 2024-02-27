import ProjectCard from "./projectComponents/ProjectCard";
import { Container, Row, Col } from "react-bootstrap";
import  "../components/projectComponents/projectStyles.css";
/*** Import images from Assets folder*/
import cpu from "../../src/assets/Project Images/cpu.jpg"
import Kami from "../../src/assets/Project Images/Kami.PNG"
import SpaceTime from "../../src/assets/Project Images/SpaceTime.PNG"


export default function Projects(){
    return(
        <Container fluid className="!relative !pt-12 !pl-6 !pr-6 !h-auto ">
            <Container>
                <h1 className="!pt-2.5 !text-4xl !font-medium !text-white">
                    My Recent <strong className="purple">Works </strong>
                </h1>
                <p className="text-white">
                    Here are a few projects I worked on recently.
                </p>
                <Row className="justify-center pb-2.5">
                    <Col md={4} className="project-card">
                        <ProjectCard
                        imgPath={cpu}
                        isBlog={false}
                        title="CPU Assembler Program"
                        description="A program that translate assembly code into machine code by useing short alphanumeric codes to represent processor instructions."
                        ghLink="https://github.com/BasicallyManny/CPU-Assembler-Program"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                        imgPath={Kami}
                        isBlog={false}
                        title="Kami"
                        description="Coordinate bot for Minecraft(really any game that uses coordinates, but was made with Minecraft in mind) - based off the dictionary data structure built into Python. "
                        ghLink="https://github.com/BasicallyManny/Coordinate-Bot-for-Discord"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                        imgPath={SpaceTime}
                        isBlog={false}
                        title="SpaceTime"
                        description="A full-stack web-app that enables account holders to plan/organize social events."
                        ghLink="https://github.com/BasicallyManny/SpaceTime-Web-APP"
                        />
                    </Col>
        </Row>
      </Container>
    </Container>
    );
}
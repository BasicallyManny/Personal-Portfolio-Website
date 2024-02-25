import {Row, Col,Container} from "react-bootstrap";
import {DiJavascript1,DiReact,DiNodejs,DiMongodb,DiPython,DiGit,DiJava,DiHtml5,DiCss3,DiDjango  } from "react-icons/di";
import {SiPostgresql} from "react-icons/si";
import './techStack.css';


export default function SkillsCard(){
    return(
        <Container className="justify-center flex">
            <Row className="justify-center flex mt-9 flex-wrap w-10/12">
            <Col xs={4} md={2} className="tech-icons">
                <DiHtml5 />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiCss3 />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
               <DiJavascript1 />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
               <DiNodejs />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
               <DiReact />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
               <DiMongodb />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
               <DiGit />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
               <SiPostgresql />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
               <DiPython />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
               <DiJava />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiDjango />
            </Col>
        </Row>
        </Container>
    );
}
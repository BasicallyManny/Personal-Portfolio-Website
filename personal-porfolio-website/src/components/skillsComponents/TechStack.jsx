import {Row, Col} from "react-bootstrap";
import {DiJavascript1,DiReact,DiNodejs,DiMongodb,DiPython,DiGit,DiJava,DiHtml5,DiCss3,DiDjango  } from "react-icons/di";
import {SiPostgresql,SiOpenai } from "react-icons/si";
import './techStack.css';

export default function TechStacl(){
    return(
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>  
               <Col xs={4} md={2} className="tech-icons">
                   <DiHtml5 />
               </Col>
               <Col xs={4} md={2} className="tech-icons">
                   <DiCss3 />
               </Col>
               <Col xs={4} md={2} className="tech-icons">
                  <DiJavascript1/>
               </Col>
               <Col xs={4} md={2} className="tech-icons">
                  <DiNodejs/>
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
               <Col xs={4} md={2} className="tech-icons">
                   <SiOpenai />
               </Col>
           </Row>
    );
}
import {Row, Col} from "react-bootstrap";
import { SiWindows10,SiVisualstudiocode  } from "react-icons/si"
import { FaGitAlt } from "react-icons/fa";

export default function ToolStack(){
    return(
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>  
               <Col xs={4} md={2} className="tech-icons">
                   <SiWindows10 />
               </Col>
               <Col xs={4} md={2} className="tech-icons">
                   <SiVisualstudiocode />
               </Col>
               <Col xs={4} md={2} className="tech-icons">
                  <FaGitAlt/>
               </Col>
        </Row>
    );
}
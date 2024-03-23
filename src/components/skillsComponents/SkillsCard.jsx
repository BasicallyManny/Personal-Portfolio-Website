import {Row,Container} from "react-bootstrap";
import TechStack from "./TechStack.jsx"
import ToolStack from "./ToolStack.jsx"

export default function SkillsCard(){
    return(
      <Container id="skillsContainer" className="justify-center flex flex-col">
         <Row id="Skills Intro" className="!min-w-9/12 pl-15 !mt-15">
            <blockquote className="mb-0">
               <p style={{ textAlign: "justify" }} className=" italic subpixel-antialiased text-lg !z-10 pl-16 pr-16 !mt-5 !pb-14"> 
                  Over the past four years, I have consciously cultivated my programming capabilities across several programming 
                  languages and front-end web development technologies. I have amassed tangible experience constructing interactive web applications, 
                  interfaces, and APIs. I strive to remain a flexible, adaptive programmer with a modern skillset. I look forward to learning new 
                  frameworks and the best practices in software engineering. My field of Interest&apos;s are building new  Web Technologies and Products 
                  and also in areas related to AI
               </p>
            </blockquote>
         </Row>
         <h3><strong>My <span className="text-fuchsia-900">Skillset</span></strong></h3>
         <Container className="!relative !pt-7 pb-7">
            <TechStack></TechStack>
         </Container>
         <h3><strong>My <span className="text-fuchsia-900">Toolset</span></strong></h3>
         <Container className="!relative !pt-7 pb-7">
            <ToolStack></ToolStack>
         </Container>
      </Container>
    );
}
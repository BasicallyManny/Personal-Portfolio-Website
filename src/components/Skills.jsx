import SkillsCard from "./skillsComponents/SkillsCard";
import {Container,Row} from 'react-bootstrap';

export default function Skills(){
    return (
        <section id="techStack" className="bg-gray-950 text-white">
            <Container fluid id="skills" className="relative !pb-6 !pt-8">
                <Container>  
                   <Row className="!pt-8 !pb-5 !mt-10 !text-center !justify-center !min-w-11/12">
                      <h1 style={{ fontSize: "2.6em" }}><strong>Skills</strong><span className="pt-8 mt-8"> &amp;</span><strong> Technologies</strong></h1>
                         <SkillsCard></SkillsCard>
                   </Row>
                </Container>
            </Container>
        </section>
    );
}
import SkillsCard from "./skillsComponents/SkillsCard";
import {Container,Row} from 'react-bootstrap';

export default function Skills(){
    return (
        <section id="techStack">
             <Row id="aboutHeader" className="text-center mb-20 justify-center">
                <Container fluid id="skillsContainer" className="relative">
                    <Container>
                        <h1 style={{ fontSize: "2.6em" }}>Skills<span className=""> &amp;</span> Technologies</h1>
                        <SkillsCard></SkillsCard>
                    </Container>
                </Container>
             </Row>
        </section>
    );
}
import SkillsCard from "./skillsComponents/SkillsCard";
import {Container,Row} from 'react-bootstrap';

export default function Skills(){
    return (
        <section id="techStack">
            <Container fluid id="skillsContainer">
                <Row id="aboutHeader" className="text-center mb-20">
                    <h1 style={{ fontSize: "2.6em" }}>Skills<span className=""> &amp;</span> Technologies</h1>
                    <SkillsCard></SkillsCard>
                </Row>
            </Container>
        </section>
    );
}
import { Container, Row, Col } from "react-bootstrap";
import AboutCard from "./aboutComponents/AboutCard";

export default function About(){
    return(
        <Container fluid id="about" className="relative !pb-6 !pt-8">
            <Container>
                <Row className="justify-center !pt-16">
                    <Col md={8} className="!pt-20 !pb-5 !mt-16 !text-center !justify-center !min-w-11/12">
                    <h1 style={{ fontSize: "2.6em" }}>LET ME <span className=""> INTRODUCE </span> MYSELF</h1>
                        <AboutCard></AboutCard>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
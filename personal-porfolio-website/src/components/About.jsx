import { Container, Row, Col } from "react-bootstrap";
import AboutCard from "./aboutComponents/AboutCard";

export default function About(){
    return(
        <Container fluid id="AboutContainer" className="relative !pb-24 mb-9 !pt-8">
            <Container>
                <Row className="justify-center">
                    <Col md={8} className="!pt-20 !pb-5 !text-center !min-w-full">
                    <h1 style={{ fontSize: "2.6em" }}>LET ME <span className=""> INTRODUCE </span> MYSELF</h1>
                        <AboutCard></AboutCard>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
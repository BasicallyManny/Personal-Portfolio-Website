/* eslint-disable react/no-unescaped-entities */
import { Container, Row, Col } from "react-bootstrap";
import Particle from './constants/Particles';
import Type from "./homeComponents/Type";
import '../components/aboutComponents/about.css';


export default function Home(){
    return(
        <section id="HomeCard">
             <Container fluid className="relative -z-50 bg-top bg-no-repeat !pb-7 !pt-7 " id="home-section">
                <Particle></Particle>
                <Container id="home-content" className="text-left text-slate-400 !pt-36 !pr-0 !pb-8 z-0 ">
                    <Row>
                        <Col md={7} className="!pt-20 !pl-16">
                            <h1 style={{ paddingBottom: 15 }} id="heading" className="!text-2xl !pl-12 "> Hi There!{" "} <span className="wave" role="img" aria-labelledby="wave">👋🏻 </span> </h1>
                            <h1 id="heading-name" className="!pl-12 !text-5xl"> I'M <strong className="main-name"> Manny Fong</strong></h1>
                            <div style={{ padding: 48, textAlign: "left" }}>
                                <Type></Type>
                            </div>
                        </Col>
                    </Row>
                </Container>
             </Container>
        </section>
    );
}
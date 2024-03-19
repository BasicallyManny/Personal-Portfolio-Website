/* eslint-disable react/no-unescaped-entities */
import { Container, Row, Col } from "react-bootstrap";
import Particle from './constants/Particles';
import Type from "./homeComponents/Type";
import '../components/aboutComponents/about.css';
import {AiFillGithub,AiFillInstagram,AiFillTwitterCircle  } from "react-icons/ai";
import About from '../components/About'

export default function Home(){
    return(
        <section id="home" className="bg-gray-950">
             <Container fluid className="relative bg-top bg-no-repeat !pb-7 !pt-7 " id="home-section">
                <Particle></Particle>
                <Container id="home-content" className="text-left text-white !pt-36 !pr-0 !pb-8 z-0 ">
                    <Row>
                        <Col md={7} className="!pt-20 !pl-16">
                            <h1 style={{ paddingBottom: 15 }} id="heading" className="!text-2xl !pl-12 "> Hi There!{" "} <span className="wave" role="img" aria-labelledby="wave">👋🏻 </span> </h1>
                            <h1 id="heading-name" className="!pl-12 !text-5xl"> I'M <strong className="main-name"> Manny Fong</strong></h1>
                            <div style={{ padding: 48, textAlign: "left" }}>
                                <Type></Type>
                            </div>
                        </Col>  
                    </Row>
                    <Row>
                        {/**ABOUT SECTION */}
                        <About />
                    </Row>

                    <Row className="!justify-center">
                        <Col md={12} className=" home-about-social !justify-center text-center pt-7">
                            <h1>FIND ME ON</h1>
                            <p>Feel free to <span className="">connect </span>with me</p>
                            <ul className="home-about-social-links">
                                <li className="social-icons">
                                    <a
                                    href="https://github.com/BasicallyManny"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons">
                                        <AiFillGithub size={40}/>
                                    </a>
                                </li>
                                <li className="social-icons">
                                    <a
                                    href="https://twitter.com/WackBasically"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons">
                                        <AiFillTwitterCircle size={40}/>
                                    </a>
                                </li>
                                <li className="social-icons">
                                    <a
                                    href="https://www.instagram.com/basicallymanny"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons">
                                        <AiFillInstagram size={40}/>
                                    </a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
             </Container>
        </section>
    );
}
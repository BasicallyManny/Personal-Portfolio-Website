import {Container,Col,Row} from "react-bootstrap";
import { IoGameController } from "react-icons/io5";
import { FaBook } from "react-icons/fa";
import { CgGym } from "react-icons/cg";
import gear from "../../assets/Fun Images/gear.gif";

export default function AboutCard(){
    return(
        <>
        <section id="AboutCard" className="">
            <Container id="AboutContainer" className="!min-w-10/12">
                <Container fluid id="AboutContent" className="pl-15 mt-15">
                    <Row id="AboutInfo">
                        <>
                            <blockquote className="mb-0">
                                <p style={{ textAlign: "justify" }} className=" italic subpixel-antialiased text-lg !z-10 pl-16 pr-16 !mt-5"> 
                                    I am a student currently attending the  <span className="text-fuchsia-900"><strong>University at Albany </strong></span> 
                                    with a passion for everything technical and pursuing my dreams of becomeing an Software Engineer. Over the past four years, 
                                    I have consciously cultivated my programming capabilities across several programming languages and front-end web 
                                    development technologies. My fields of interest are related to Web Development, Software Development, Artificial intelligence.
                                    Recently, to improve my programming capabilities and to equimp myself with a more modern skillset
                                    I have been implementing <strong>A.I</strong> in my programs.
                                </p>
                            </blockquote>
                        </>
                        <Row>
                            <h5 className="!pt-5">Apart from coding, some other activities that I enjoy!</h5>
                            <Col md={7}>
                            <ul className="!pt-10">
                                <li className="about-activity .icon-colour">
                                    <a className="icon-colour mr-4"><IoGameController size={30} /></a> Playing Video Games
                                </li>
                                <li className="about-activity .icon-colour">
                                    <a className="icon-colour mr-4"><FaBook size={30} /></a> Reading Philosophy
                                </li>
                                <li className="about-activity .icon-colour">
                                    <a className="icon-colour mr-4"><CgGym size={30} /></a> Going to the Gym
                                </li>
                            </ul>
                            </Col>
                            <Col md={5} style={{ paddingTop: "32px" }}>
                                <img src={gear} alt="about" className="img-fluid !bg-transparent h-56" />
                            </Col>
                        </Row>
                    </Row>
                </Container>
            </Container>
        </section>
        </>
    );
}
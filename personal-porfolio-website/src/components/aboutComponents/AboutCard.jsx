import {Container,Col} from "react-bootstrap";
import Card from 'react-bootstrap/Card';


export default function AboutCard(){
    return(
        <>
        <section id="AboutCard" className="">
            <Container id="AboutContainer">
                <Container fluid id="AboutContent" className="pl-15">
                    <Col id="AboutInfo">
                        <Card>
                            <Card.Body>
                                <blockquote className="mb-0">
                                    <p style={{ textAlign: "justify" }} className="italic subpixel-antialiased text-lg !z-10 pl-16 pr-16 !mt-7"> 
                                      I am a student currently attending the <span className="color--purple"><strong>University at Albany </strong></span> 
                                      with a passion for everything technical and pursuing my dreams of becomeing an Developer. Over the past four years, 
                                      I have consciously cultivated my programming capabilities across several programming languages and front-end web 
                                      development technologies. My fields of interest are related to Web Development, Software Development, and recently implementing
                                      <strong> A.I </strong> in my programs.
                                    </p>
                                </blockquote>
                            </Card.Body>
                        </Card>
                    </Col>
                </Container>
            </Container>
        </section>
        </>
    );
}
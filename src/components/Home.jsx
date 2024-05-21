/* eslint-disable react/no-unescaped-entities */
import { Container, Row, Col } from "react-bootstrap";
import Type from "./homeComponents/Type";
import "../components/aboutComponents/about.css";
//import profileImage from "../assets/FunImages/profile_image.png";
import coding from "../assets/FunImages/coding.gif";


import {
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import About from "../components/About";

export default function Home() {
  return (
    <section id="home" className="bg-gray-950">
      <Container
        fluid
        className="relative bg-top bg-no-repeat !pb-7 !pt-7 "
        id="home-section"
      >
        <Container
          id="home-content"
          className="text-left text-white !pt-36 !pr-0 !pb-8 z-0 "
        >
          <Row>
            <Col md={7} className="!pt-20">
              <h1
                style={{ paddingBottom: 15 }}
                id="heading"
                className="!text-2xl !pl-12 "
              >
                {" "}
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻{" "}
                </span>{" "}
              </h1>
              <h1 id="heading-name" className="!pl-12 !text-5xl">
                {" "}
                I'm <strong className="main-name"> Manny Fong</strong>
              </h1>
              <div style={{ padding: 48, textAlign: "left" }}>
                <Type></Type>
              </div>
            </Col>
            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={coding}
                alt="home pic"
                className="img-fluid"
                width="640"
                height="426"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
          <Row>
            {/**ABOUT SECTION */}
            <About />
          </Row>

          <Row className="!justify-center">
            <Col
              md={12}
              className=" !justify-center text-center pt-7"
            >
              <h1>FIND ME ON </h1>
              <p>
                Feel free to <span className="">connect </span>with me
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/BasicallyManny"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub size={40} />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/manfred-fong-532548300/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillLinkedin  size={40} />
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

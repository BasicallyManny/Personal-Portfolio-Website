// eslint-disable-next-line no-unused-vars
import { FaTwitter, FaInstagram, FaGithub, FaCodeBranch } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <Container fluid id="Footer">
      <Row id="footerElements">
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Manfred Fong</h3>
        </Col>
        <Col>
          <Row> 
            <a
                href="https://github.com/BasicallyManny/Personal-Portfolio-Website"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaCodeBranch />
              </a>
          </Row>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/BasicallyManny"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/WackBasically"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/BasicallyManny"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

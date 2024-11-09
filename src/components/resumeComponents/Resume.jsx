import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "./resumeStyles.css";

import pdf from "../../assets/Resume.pdf";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function Resume() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className="bg-gray-950 text-white">
      <Container fluid className="resume-section">
        <Row className="!pt-8 !pb-5 !text-center !justify-center !min-w-11/12">
          <h1>
            My{" "}
            <strong>
              <span className="text-fuchsia-900">Resume</span>
            </strong>
          </h1>
        </Row>

        <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center !overflow-hidden">
            <Page
              pageNumber={1}
              scale={width > 786  ? 1.7 : 0.6}
              renderAnnotationLayer={false}
              renderTextLayer={false}
            />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px", backgroundColor: "#6a0dad", borderColor: "#6a0dad",display: "flex", justifyContent: "center", alignItems: "center" }} // Custom purple color
          >
            <AiOutlineDownload size={35} style={{ marginRight: "8px" }} />
            <p>Download Resume</p>

          </Button>
        </Row>
      </Container>
    </div>
  );
}

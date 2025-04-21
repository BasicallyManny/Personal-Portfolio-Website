import { useState, useEffect } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

import "react-pdf/dist/esm/Page/AnnotationLayer.css";

const Resume: React.FC = () => {
  const [width, setWidth] = useState<number>(1200);
  const [numPages, setNumPages] = useState<number | null>(null);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const resumeUrl: string = "/SWEResume.pdf"; // File path to your resume

  const onLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  return (
    <div className="bg-transparent mt-30 text-white px-4 py-8 min-h-screen">
      <div className="text-center pb-10">
        <h1 className="text-3xl font-bold">
          My <span className="text-fuchsia-900">Resume</span>
        </h1>
      </div>

      <div className="flex justify-center overflow-hidden mb-10">
        <Document
          file={resumeUrl}
          onLoadSuccess={onLoadSuccess}
          onLoadError={(error) => console.error("Error loading document:", error)}
          onSourceError={(error) => console.error("Error loading source:", error)}
          loading={<p className="text-center">Loading PDF...</p>}
        >
          {numPages && (
            <Page
              pageNumber={1}
              scale={width > 786 ? 1.7 : 0.6}
              renderAnnotationLayer={false}
              renderTextLayer={false}
            />
          )}
        </Document>
      </div>

      <div className="flex justify-center">
        <a
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-purple-800 hover:bg-purple-900 text-white font-semibold py-3 px-6 rounded-md flex items-center space-x-2 transition duration-300"
          style={{ maxWidth: "250px" }}
        >
          <AiOutlineDownload size={24} />
          <span>Download Resume</span>
        </a>
      </div>
    </div>
  );
};

export default Resume;

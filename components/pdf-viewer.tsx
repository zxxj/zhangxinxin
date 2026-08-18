"use client";

import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

const PdfViewer = () => {
  return (
    <div className="overflow-y-auto h-full">
      <Document file="/files/resume.pdf">
        <Page
          pageNumber={1}
          renderTextLayer
          renderAnnotationLayer
          width={768}
        />
      </Document>
    </div>
  );
};

export default PdfViewer;

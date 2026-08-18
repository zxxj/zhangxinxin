"use client";

import { Download } from "lucide-react";
import WindowControls from "./window-controls";
import WindowWrapper from "./window-wrapper";
import dynamic from "next/dynamic";

const PdfViewer = dynamic(() => import("./pdf-viewer"), {
  ssr: false,
});

const Resume = () => {
  return (
    <>
      <div className="window-header">
        <WindowControls target="resume" />
        <h2>zhangxinxin.pdf</h2>

        <a
          href="files/resume.pdf"
          download
          className="cursor-pointer"
          title="Download resume"
        >
          <Download className="icon" />
        </a>
      </div>
      <PdfViewer />
    </>
  );
};

const ResumeWindow = WindowWrapper({ Component: Resume, windowKey: "resume" });

export default ResumeWindow;

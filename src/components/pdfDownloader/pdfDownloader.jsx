import React, { useRef } from "react";

const DownloadPDFButton = ({ contentRef, filename = "document.pdf" }) => {
  
  const handleDownloadPDF = () => {
    if (typeof window !== "undefined") {
      import("html2pdf.js").then((html2pdf) => {
        const element = contentRef.current;
        html2pdf.default()
          .from(element)
          .set({
            margin: 1,
            filename: filename,
            html2canvas: { scale: 2 },
            jsPDF: { orientation: 'portrait' },
          })
          .save();
      });
    }
  };

  return (
    <button onClick={handleDownloadPDF}>
      Download PDF
    </button>
  );
};

export default DownloadPDFButton;

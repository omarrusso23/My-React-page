import React from "react";
import cv from "../assets/Curriculum vitae íngles(Formateado).pdf"

const PDFViewer = () => {
  return (
    <div>
      <embed src={cv} type="application/pdf" width="100%" height="600px" />
    </div>
  );
};

export default PDFViewer;

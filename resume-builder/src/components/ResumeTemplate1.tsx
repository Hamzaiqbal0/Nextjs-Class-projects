"use client";

import React from 'react';
import html2pdf from 'html2pdf.js';

export default function TemplatePage() {
  // Function to handle PDF download
  const handleDownloadPDF = () => {
    // Get the content to be converted to PDF
    const element = document.getElementById('resume-content');
    if (element) {
      // Define the options object here
      const options = {
        margin: 0,
        filename: 'resume.pdf', // This should end with .pdf
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
      };

      // Use html2pdf with the defined options
      html2pdf().set(options).from(element).save();
    }
  };

  return (
    <div className="p-10">
      <div id="resume-content" className="bg-gray-100 p-4 rounded mb-6">
        <h3>Name: John Doe</h3>
        <p>Email: johndoe@example.com</p>
        <p>Phone: 123-456-7890</p>
      </div>
      <button
        onClick={handleDownloadPDF}
        className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Download Resume (PDF)
      </button>
    </div>
  );
}

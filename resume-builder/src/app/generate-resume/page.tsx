"use client";

import { useEffect, useState } from 'react';

export default function GenerateResume() {
  const [resumeData, setResumeData] = useState<any>(null);

  // Load resume data from localStorage
  useEffect(() => {
    const data = localStorage.getItem('resumeData');
    if (data) {
      setResumeData(JSON.parse(data));
    }
  }, []);

  // Function to handle PDF download
  const handleDownload = () => {
    const content = `
      Name: ${resumeData.name}
      Email: ${resumeData.email}
      Phone: ${resumeData.phone}
      Education: ${resumeData.education}
      Experience: ${resumeData.experience}
      Skills: ${resumeData.skills}
      Summary: ${resumeData.summary}
    `;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'resume.txt';
    link.click();
    URL.revokeObjectURL(url);
  };

  if (!resumeData) return <div>Loading...</div>;

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold mb-4">Your Resume</h2>
      <pre className="bg-gray-100 p-4 rounded mb-6">
        {JSON.stringify(resumeData, null, 2)}
      </pre>
      <button
        onClick={handleDownload}
        className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Download Resume
      </button>
    </div>
  );
}

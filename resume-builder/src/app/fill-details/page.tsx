"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function FillDetails() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [summary, setSummary] = useState('');
  const [education, setEducation] = useState('');
  const [experience, setExperience] = useState('');
  const [skills, setSkills] = useState('');

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Save form data to localStorage
    const formData = { name, email, phone, summary, education, experience, skills };
    localStorage.setItem('resumeData', JSON.stringify(formData));

    // Navigate to the resume generation page
    router.push('/generate-resume');
  };

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold mb-4">Fill Your Details</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-2 border rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Phone"
          className="w-full p-2 border rounded"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="text"
          placeholder="Education"
          className="w-full p-2 border rounded"
          value={education}
          onChange={(e) => setEducation(e.target.value)}
        />
        <input
          type="text"
          placeholder="Experience"
          className="w-full p-2 border rounded"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
        />
        <input
          type="text"
          placeholder="Skills"
          className="w-full p-2 border rounded"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
        />
        <textarea
          placeholder="Professional Summary"
          className="w-full p-2 border rounded"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
        ></textarea>
        <button type="submit" className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Generate Resume
        </button>
      </form>
    </div>
  );
}

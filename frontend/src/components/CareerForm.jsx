"use client";
import React, { useState } from "react";

export default function CareerForm({ onAnalyze }) {
  const [role, setRole] = useState("");
  const [skills, setSkills] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    if (!role || !skills) {
      alert("Please fill fields");
      return;
    }
    const skillArray = skills.split(",").map(s => s.trim()).filter(Boolean);
    onAnalyze(role, skillArray);
  };

  return (
    <form onSubmit={submitForm} className=" p-4 rounded shadow max-w-2xl mx-auto">
      <div className="mb-3">
        <label className="block mb-1 font-medium">Target Role</label>
        <input value={role} onChange={(e) => setRole(e.target.value)} placeholder="Backend Developer" className="w-full border p-2 rounded" />
      </div>

      <div className="mb-3">
        <label className="block mb-1 font-medium">Current Skills (comma separated)</label>
        <input value={skills} onChange={(e) => setSkills(e.target.value)} placeholder="Java, Spring Boot, SQL" className="w-full border p-2 rounded" />
      </div>

      <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">Analyze My Career Path</button>
    </form>
  );
}

"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [position, setPosition] = useState("");
  const [skills, setSkills] = useState("");

  const router = useRouter();
  const onSubmit = () => {
    if (!position || !skills) {
      alert("Please fill all fields");
      return;
    }
    const skillArray = skills.split(",").map(s => s.trim()).filter(Boolean);
    const query = new URLSearchParams({
      position: position,
      skills: skillArray.join(",")
    }).toString();
    router.push(`/dashboard?${query}`);
  }

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col justify-between">
      <div className="w-full p-6 bg-accent-foreground">
        <h1 className="text-3xl font-bold text-center tracking-tight text-gray-200">
          Career Path Analyzer
        </h1>
      </div>

      <div className="mx-auto flex flex-col w-3/4 mt-2 space-y-6 border-2 border-gray-200 px-5 py-10 rounded-2xl">
        <p className="text-gray-900 font-bold text-center text-2xl">Start by entering your career goal and skills.</p>
        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-800">
            Target Position
          </label>
          <input
            type="text"
            placeholder="ex. Frontend Developer"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            className="p-3 border text-gray-950 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/60 transition-all"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-800">
            Current Skills (comma separated)
          </label>
          <input
            type="text"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            placeholder="ex. HTML, CSS, JavaScript"
            className="p-3 border text-gray-950 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/60 transition-all"
          />
        </div>
        <button
          className="cursor-pointer p-3 rounded-xl bg-black text-white font-medium hover:bg-black/80 transition-all"
          onClick={onSubmit}
        >
          Submit
        </button>
      </div>
      <div className="bg-accent-foreground ">
        <footer className="text-center p-4 text-gray-200">
          Devloped By Priyansh Saxena
        </footer>
      </div>
    </div>
  );
}

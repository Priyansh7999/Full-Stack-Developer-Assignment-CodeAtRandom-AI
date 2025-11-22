"use client";
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react'
import SkillGap from './_components/SkillGap';
import Roadmap from './_components/Roadmap';
import TechNews from './_components/TechNews';

function Dashboard() {
  const position = useSearchParams().get("position");
  const skills = useSearchParams().get("skills");
  console.log(position, skills);
  const router = useRouter();
  if (!position || !skills) {
    router.replace("/");
    return null;
  }

  return (
    <div className="min-h-screen text-gray-900 bg-blue-50">
      <div className="w-full p-6 bg-accent-foreground">
        <h1 className="text-3xl font-bold text-center tracking-tight text-gray-200">
          Career Path Analyzer
        </h1>
      </div>
      <p className="text-red-600 italic text-xl p-4">
        Note: The backend is hosted on Render's free tier. If inactive for 15 min,
        the server sleeps and may take 20–30 seconds to wake up on the first request.
        Please wait for the response.
      </p>
      <div>
        <h1 className='text-3xl font-bold p-3'>{position.toUpperCase()}</h1>
      </div>

      <div className='flex'>
        <div className='w-3/5 p-5'>
          <SkillGap position={position} skills={skills} />
        </div>

        <div className='p-5'>
          <Roadmap position={position} />
        </div>
      </div>
      <div className='border-t mt-5'>
        <TechNews />
      </div>
      <div className="bg-accent-foreground ">
        <footer className="text-center p-4 text-gray-200">
          Devloped By Priyansh Saxena
        </footer>
      </div>
    </div>
  )
}

export default Dashboard

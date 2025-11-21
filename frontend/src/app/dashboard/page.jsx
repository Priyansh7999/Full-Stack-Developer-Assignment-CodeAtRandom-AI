"use client";
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react'
import SkillGap from './_components/SkillGap';
import Roadmap from '@/components/Roadmap';

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
   <div className="min-h-screen text-gray-900 bg-card">
      <div className="w-full p-6 bg-accent-foreground">
        <h1 className="text-3xl font-bold text-center tracking-tight text-gray-200">
          Career Path Analyzer
        </h1>
      </div>
      
      <div>
        <h1 className='text-3xl font-bold p-3 border-b'>{position.toUpperCase()}</h1>
      </div>

      <div className='flex'>
        <div className='w-2/5 border-r p-3'>
          <SkillGap position={position} skills={skills}/>
        </div>

        <div className='p-3'>
          <Roadmap position={position} />
        </div>
      </div>
      <div>
        Bottom content
      </div>
    </div>


  )
}

export default Dashboard

"use client"
import React, { useEffect, useState } from 'react'

function Roadmap({ position }) {
  const [roadmapData, setRoadmapData] = useState(null);
  useEffect(() => {
    async function fetchRoadmap() {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/roadmap`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ targetRole: position })
        });
        const data = await response.json();
        setRoadmapData(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching roadmap:", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
    }
    fetchRoadmap();
  }, []);
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Roadmap</h1>
      <div className='flex flex-wrap gap-4'>
        {roadmapData?.roadmap?.map((phaseText, index) => (
          <div
            key={index}
            className={`bg-chart-${index}mb-4 p-5 w-full border border-gray-300 rounded-sm shadow-sm hover:shadow-md`}
          >
            <h2 className="text-xl font-semibold mb-1">
              Phase {index + 1}
            </h2>
            <p className="text-gray-800">{phaseText}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Roadmap;

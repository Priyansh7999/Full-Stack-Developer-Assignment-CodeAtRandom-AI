"use client";
import React, { useEffect, useState } from "react";

function SkillGap({ position, skills }) {
  const [skillGapData, setSkillGapData] = useState(null);

  useEffect(() => {
    if (!position || !skills) return;
    async function fetchData() {
      try {
        const formattedSkills = skills.split(",").map(s => s.trim()).filter(Boolean);

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/skill-gap`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            targetRole: position,
            currentSkills: formattedSkills,
          }),
        });

        const data = await res.json();
        setSkillGapData(data);
        console.log("Skill Gap Result:", data);
      } catch (err) {
        console.error("Skill gap fetch failed:", err);
      }
    }

    fetchData();
  }, [position, skills]);

  return (
    <div className="flex flex-col gap-6 text-xl">
      <div>
        <p className="font-semibold mb-2 text-gray-800">Matched Skills:</p>
        <div className="flex flex-wrap gap-2">
          {skillGapData?.matchedSkills?.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-2 bg-gray-900 text-white rounded-md text-xs"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div>
        <p className="font-semibold mb-2 text-gray-800">Missing Skills:</p>
        <div className="flex flex-wrap gap-2">
          {skillGapData?.missingSkills?.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-2 bg-red-600 text-white rounded-md text-xs"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div>
        <p className="font-semibold mb-2 text-gray-800">Recommendation:</p>
        <p
          className={
            skillGapData?.missingSkills?.length === 0
              ? "text-green-600 text-lg "
              : "text-red-600 text-lg"
          }
        >
          {skillGapData?.recommendation}
        </p>
      </div>

      <div>
        <p className="font-semibold mb-2 text-gray-800">Suggested Learning Order:</p>
        <div className="flex flex-wrap gap-2">
          {skillGapData?.learningOrder?.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-2 bg-blue-700 text-white rounded-md text-xs"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillGap;

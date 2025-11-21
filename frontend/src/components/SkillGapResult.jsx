"use client";
import React from "react";

export default function SkillGapResult({ data }) {
  if (!data) return null;

  const {
    targetRole,
    requiredSkills,
    matchedSkills,
    missingSkills,
    recommendations,
    learningOrder
  } = data;

  return (
    <div className=" p-4 rounded shadow">
      <h3 className="text-lg font-semibold mb-2">Skill Gap — {targetRole}</h3>

      <div className="mb-3">
        <strong>Required Skills:</strong>
        <div className="flex flex-wrap gap-2 mt-2">
          {requiredSkills?.map((s) => (
            <span key={s} className="text-sm px-2 py-1 bg-gray-100 rounded">
              {s}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-3">
        <strong>Matched Skills:</strong>
        <div className="flex flex-wrap gap-2 mt-2">
          {matchedSkills?.length ? matchedSkills.map((s) => (
            <span key={s} className="text-sm px-2 py-1 bg-green-100 rounded">
              {s}
            </span>
          )) : <div className="text-sm text-gray-500 mt-1">No matched skills</div>}
        </div>
      </div>

      <div className="mb-3">
        <strong>Missing Skills:</strong>
        <div className="flex flex-wrap gap-2 mt-2">
          {missingSkills?.length ? missingSkills.map((s) => (
            <span key={s} className="text-sm px-2 py-1 bg-red-100 rounded">
              {s}
            </span>
          )) : <div className="text-sm text-gray-500 mt-1">None — you're good!</div>}
        </div>
      </div>

      <div className="mb-3">
        <strong>Top Recommendation:</strong>
        <div className="mt-1 text-sm text-gray-700">{Array.isArray(recommendations) ? recommendations.join(" ") : recommendations}</div>
      </div>

      <div>
        <strong>Suggested Learning Order:</strong>
        <ol className="list-decimal list-inside mt-2 space-y-1">
          {learningOrder?.length ? learningOrder.map((s, idx) => <li key={idx}>{s}</li>) : <li className="text-gray-500">No steps needed</li>}
        </ol>
      </div>
    </div>
  );
}

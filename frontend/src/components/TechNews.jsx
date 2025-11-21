"use client";
import React from "react";

function timeAgo(unixTime) {
  if (!unixTime) return "";
  const seconds = Math.floor(Date.now() / 1000) - unixTime;
  if (seconds < 60) return `${seconds}s ago`;
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

export default function TechNews({ data }) {
  if (!data || !data.length) return null;

  // data might be array of HN items or {count, stories}
  const stories = Array.isArray(data) ? data : (data.stories || []);

  return (
    <div className="bg-white p-4 rounded shadow mt-6">
      <h3 className="text-lg font-semibold mb-3">Latest Tech News (HackerNews)</h3>

      <div className="space-y-3">
        {stories.map((s) => (
          <a key={s.id} href={s.url || `https://news.ycombinator.com/item?id=${s.id}`} target="_blank" rel="noreferrer" className="block p-3 border rounded hover:bg-gray-50">
            <div className="font-medium">{s.title}</div>
            <div className="text-xs text-gray-500 mt-1 flex flex-wrap gap-3">
              <span>By: {s.by}</span>
              <span>Score: {s.score ?? "n/a"}</span>
              <span>Type: {s.type}</span>
              <span>{timeAgo(s.time)}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

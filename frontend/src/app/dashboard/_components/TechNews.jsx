"use client"
import React, { useEffect, useState } from 'react'

function TechNews() {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        async function fetchNews() {
            try {
                setLoading(true);
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/news`);
                const data = await response.json();
                setNews(data);
                setLoading(false);
                console.log(data);
            } catch (error) {
                console.error("Error fetching news:", error);
            }
        }
        fetchNews();
    }, []);

    return (
        <div className='px-2'>
            <h1 className='font-bold text-center text-2xl pt-3'>TOP 5 TECH NEWS</h1>
            <div className='flex flex-wrap justify-center gap-3 pb-2'>
                {loading && (
                    [...Array(5)].map((_, i) => (
                        <div
                            key={i}
                            className="p-2 w-[400px] border border-gray-300 rounded-lg shadow-md animate-pulse"
                        >
                            <div className="flex flex-col">
                                <div className="h-4 w-1/2 bg-gray-300 rounded mx-auto mb-2"></div>
                                <div className="h-5 w-3/4 bg-gray-300 rounded mx-auto mb-2"></div>
                                <div className="h-4 w-1/3 bg-gray-300 rounded mx-auto"></div>
                            </div>
                        </div>
                    ))
                )}

                {
                    news.stories?.map((story, key) => (
                        <div key={key} className='p-2 w-[400px] border border-gray-300 rounded-lg hover:bg-gray-100 transition shadow-md'>
                            <a href={story.url} className='flex flex-col'>
                                <p className='text-sm text-center'>{new Date(story.time * 1000).toLocaleString()} | {story.type}</p>
                                <p className='font-bold italic text-lg'>{story.title}</p>
                                <p className='text-sm text-center'><span className='font-bold'>By:</span> {story.by} | <span className='font-bold'>Score: </span> {story.score}</p>
                            </a>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default TechNews

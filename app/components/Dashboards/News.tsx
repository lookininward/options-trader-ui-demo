import { useState } from 'react';
import { news } from "@/app/data/news";

const NewsItem = ({ source, title, timeAgo }: { source: string; title: string; timeAgo: string }) => (
    <a href="#" className="flex flex-col items-start py-4 px-4 gap-y-2 hover:bg-gray-100">
        <div className="text-gray-800 text-sm">{source}</div>
        <div className="text-gray-800 text-md font-semibold">{title}</div>
        <div className="text-gray-800 text-xs text-gray-600">{timeAgo}</div>
    </a>
);

export default function News() {
    const [visibleNews, setVisibleNews] = useState(3);
    const showAllNews = () => setVisibleNews(news.length);
    return (
        <div>
            <h3 className='text-md font-bold text-gray-600 mb-3'>News</h3>
            <div className="bg-white p-10 rounded-xl flex flex-col divide-y divide-gray-400 shadow-lg border">
                {news.slice(0, visibleNews).map((item, index) => (
                    <NewsItem key={index} {...item} />
                ))}
            </div>
            {visibleNews < news.length && (
                <div className='w-full flex justify-center'>
                    <button
                        onClick={showAllNews}
                        className="w-full mt-4 font-semibold text-gray-500 hover:text-gray-100 py-2 px-4 rounded hover:bg-slate-500 transition duration-300"
                    >
                        View All
                    </button>
                </div>
            )}
        </div>
    );
}

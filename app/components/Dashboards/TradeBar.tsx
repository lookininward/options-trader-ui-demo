'use client';

import { useState } from 'react';
import { ChartPieIcon, StarIcon as StartIconSolid } from '@heroicons/react/24/solid';
import { StarIcon } from '@heroicons/react/24/outline';
import { aaplData } from '@/app/data/aapl';

export default function TradeBar() {
    const [isWatchlisted, setIsWatchlisted] = useState(false);

    return (
        <div className="w-full flex flex-col md:flex-row gap-y-4 justify-between items-center">
            <div className="divide-x divide-gray-400 text-2xl font-bold flex gap-x-4">
                <div className='text-gray-500'>
                    {aaplData.symbol}
                </div>
                <div className='pl-4 text-gray-700 flex items-center gap-x-2'>
                    {aaplData.name} <ChartPieIcon className='h-6 w-6 inline' />
                </div>
            </div>

            {/* Add to Watchlist */}
            <div className="flex justify-end">
                <button
                    className="hover:bg-slate-500 transition text-gray-800 hover:text-white px-4 py-2 rounded-md flex items-center gap-x-2 font-semibold"
                    onClick={() => setIsWatchlisted((prev) => !prev)}
                >
                    {isWatchlisted ? <StartIconSolid className='h-6 w-6' /> : <StarIcon className='h-6 w-6' />}
                    {isWatchlisted ? 'Remove from' : 'Add to'} Watchlist
                </button>
            </div>
        </div>

    );
}

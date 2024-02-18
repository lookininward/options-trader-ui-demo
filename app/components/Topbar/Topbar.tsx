'use client';

import React from 'react';
import TickerSearch from './TickerSearch';
import LogoButton from './LogoButton';
import HelpButton from './HelpButton';
import DashboardSelectorDropdown from './DashboardSelectorDropdown';
import AccountDropdown from './AccountDropdown';

const Topbar: React.FC = () => {
    return (
        <header className="w-full bg-white shadow-inner h-16 px-4 sm:px-6 lg:px-8 flex justify-between">
            {/* Section 1 */}
            <div className="flex flex-grow gap-x-2 sm:gap-x-8">

                {/* Section 1A */}
                <div className='flex items-center gap-x-1 lg:gap-x-6 relative'>
                    <LogoButton />
                    <DashboardSelectorDropdown />
                </div>

                {/* Section 1B */}
                <div className="flex items-center gap-x-10 flex-grow">

                    {/* Navigation */}
                    <div className="hidden sm:ml-6 lg:flex sm:space-x-8 whitespace-nowrap">
                        <a href="/" className="text-gray-500 border-green-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center text-sm font-medium">
                            Portfolio
                        </a>
                        <a href="/" className="text-gray-500 border-green-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center text-sm font-medium">
                            Activity
                        </a>
                        <a href="/" className="text-gray-500 border-green-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center text-sm font-medium">
                            Move Funds
                        </a>
                    </div>

                    <TickerSearch />
                </div>
            </div>

            {/* Section 2 */}
            <div className="ml-4 flex items-center gap-x-3">
                <AccountDropdown />
                <HelpButton />
            </div>
        </header>
    );
};

export default Topbar;

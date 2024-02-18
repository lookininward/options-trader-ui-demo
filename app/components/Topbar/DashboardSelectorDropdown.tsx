'use client';

import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/16/solid';
import classNames from 'classnames';
import ClickAwayListener from 'react-click-away-listener';

const DASHBOARD_LINKS = [
    {
        title: 'Stocks, ETFs & Crypto',
        description: 'Trade thousands of stocks, ETFS, and over 50 cryptocurrencies',
        href: '/',
        disabled: false,
        children: [
            {
                title: 'Portfolio',
                href: '/',
            },
            {
                title: 'Activity',
                href: '/',
            },
            {
                title: 'Move Funds',
                href: '/',
            },
        ],
    },
    {
        title: 'Managed Investing & Save',
        description: 'Set-it-and-forget-it investing and high-interest savings',
        href: '/',
        disabled: true,
    },
    {
        title: 'Cash',
        description: 'Spend and save with high-interest on your everyday cash',
        href: '/',
        disabled: true,
    },
    {
        title: 'Tax',
        description: 'The simplest way to file your taxes',
        href: '/',
        disabled: true,
    },

];

const DashboardSelectorDropdown: React.FC = () => {
    const [isDashboardSelectorOpen, setIsDashboardSelectorOpen] = useState(false);

    return (
        <div className="relative z-10 cursor-pointer text-gray-900 flex select-none gap-x-1" onClick={() => setIsDashboardSelectorOpen(!isDashboardSelectorOpen)}>
            <div className="hidden lg:flex items-center text-sm font-medium whitespace-nowrap">
                Stocks, ETFs & Crypto
            </div>

            {isDashboardSelectorOpen ? <ChevronUpIcon className="h-6 w-6" /> : <ChevronDownIcon className="h-6 w-6" />}
            {isDashboardSelectorOpen && (
                <ClickAwayListener onClickAway={() => setIsDashboardSelectorOpen(false)}>
                    <div className="absolute left-2 top-5 mt-2 w-72 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none divide-y divide-gray-200 shadow-2xl" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button">
                        {DASHBOARD_LINKS.map((link) => (
                            <a
                                key={link.title}
                                href={!link.disabled ? link.href : undefined}
                                className={classNames(
                                    "flex flex-col gap-y-1 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-100",
                                    link.disabled ? "cursor-not-allowed" : "cursor-pointer"
                                )}
                                role="menuitem"
                            // aria-disabled={link.disabled}
                            >
                                <div className='text-md font-medium text-teal-700'>{link.title}</div>
                                <div className="text-xs text-gray-500">{link.description}</div>
                            </a>
                        ))}
                    </div>
                </ClickAwayListener>
            )}
        </div>
    );
};

export default DashboardSelectorDropdown;

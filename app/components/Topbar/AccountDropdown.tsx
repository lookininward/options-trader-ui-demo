'use client';

import React, { useState } from 'react';
import { UserCircleIcon } from '@heroicons/react/16/solid';
import ClickAwayListener from 'react-click-away-listener';

const AccountDropdownOptions = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
];

const AccountDropdown: React.FC = () => {
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
    return (
        <div className='relative'>
            <button
                type="button"
                className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
                onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
            >
                <span className="sr-only">Open user menu</span>
                <UserCircleIcon className="h-8 w-8 rounded-full text-slate-600" />
            </button>

            {isProfileMenuOpen && (
                <ClickAwayListener onClickAway={() => setIsProfileMenuOpen(false)}>
                    <div className="absolute right-0 top-8 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button">
                        {AccountDropdownOptions.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </ClickAwayListener>
            )}
        </div>
    );
}

export default AccountDropdown;
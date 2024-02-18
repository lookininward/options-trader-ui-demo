import React, { useState, useEffect, useCallback } from 'react';
import debounce from 'debounce';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { tickerData } from '../../data/ticker';
import ClickAwayListener from 'react-click-away-listener';

export default function TickerSearch() {
  const [inputValue, setInputValue] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = useCallback(debounce((query: string) => {
    setIsLoading(true); // Simulate loading state
    setTimeout(() => { // Simulate a network request delay
      const filteredData = tickerData.filter(item =>
        item['2. name'].toLowerCase().includes(query.toLowerCase()) ||
        item['1. symbol'].toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filteredData);
      setIsLoading(false);
    }, 300);
  }, 200), []);

  useEffect(() => {
    if (inputValue) {
      handleSearch(inputValue);
    } else {
      setSearchResults([]);
    }
  }, [inputValue, handleSearch]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className='relative max-w-[420px] min-w-[220px] flex-grow'>
      <form onSubmit={e => e.preventDefault()}>
        <label htmlFor="search" className="sr-only">Search</label>
        <div className="w-full relative text-gray-600 focus-within:text-gray-400">
          <input
            id="search"
            className="block w-full bg-gray-100 h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
            type="search"
            placeholder="Search for a symbol or name"
            value={inputValue}
            onChange={handleSearchChange}
            autoComplete="off"
          />
          <button type="submit" className="absolute right-2 top-0 mt-3 mr-2">
            <MagnifyingGlassIcon className="h-4 w-4 text-gray-400" />
          </button>
        </div>
      </form>

      {/* Loading State */}
      {isLoading &&
        <div className="w-full rounded-md absolute top-11 bg-white text-black py-4 px-6">
          Loading...
        </div>
      }

      {/* Search Results */}
      {!isLoading && searchResults?.length > 0 && (
        <ClickAwayListener onClickAway={() => setSearchResults([])}>
          <div className="w-full rounded-md absolute top-11 bg-white text-black max-h-[400px] overflow-y-scroll shadow-2xl ring-1 ring-black ring-opacity-5">
            <ul className='divide-y divide-gray-200'>
              {searchResults.map((result) => (
                <li key={result['1. symbol']} className='py-4 px-6 hover:bg-gray-50 cursor-pointer'>
                  <div className='text-lg font-medium text-green-700'>
                    ({result['1. symbol']})
                  </div>
                  <div className=''>
                    {result['2. name']}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </ClickAwayListener>
      )}
    </div>
  );
};

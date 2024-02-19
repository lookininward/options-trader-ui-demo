'use client';

import Performance from './Performance';
import MarketDetails from './MarketDetails';
import News from './News';
import About from './About';
import Options from './Options';
import TradeBar from './TradeBar';

export default function Trade() {
  return (
    <main className="px-5 py-8 md:p-10 h-full w-full min-h-screen flex flex-col items-center bg-slate-100">
      <div className='w-full max-w-6xl'>
        <div className="w-full flex justify-between items-center mb-5 md:mb-10">
          <TradeBar />
        </div>
        <div className='grid grid-cols-1 xl:grid-cols-7 gap-x-8'>
          <div className='w-full col-span-1 xl:col-span-4 space-y-8 md:space-y-12'>
            <Performance />
            <MarketDetails />
            <div className='block xl:hidden'>
              <Options />
            </div>
            <News />
            <About />
          </div>
          <div className='hidden xl:block sticky top-10 z-10 self-start mt-12 xl:mt-0 w-full col-span-1 xl:col-span-3'>
            <Options />
          </div>
        </div>
      </div>
    </main >
  );
}

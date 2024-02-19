'use client';

import Performance from './Performance';
import MarketDetails from './MarketDetails';
import News from './News';
import About from './About';
import Options from './Options';
import TradeBar from './TradeBar';

export default function Trade() {
  return (
    <main className="p-10 h-full w-full min-h-screen flex flex-col items-center bg-slate-100">
      <div className='max-w-[1920]'>
        <div className="w-full flex justify-between items-center mb-10">
          <TradeBar />
        </div>
        <div className='relative flex flex-col lg:flex-row gap-x-8'>
          <div className='w-full max-w-lg xl:max-w-3xl flex flex-col gap-y-12'>
            <Performance />
            <MarketDetails />
            <News />
            <About />
          </div>
          <div className='sticky top-10 z-10 self-start mt-12 lg:mt-0 w-full'>
            <Options />
          </div>
        </div>
      </div>
    </main >
  );
}

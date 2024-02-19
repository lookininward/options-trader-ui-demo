'use client';

export default function Options() {

    return (
        <div>
            <div className='flex gap-x-3 divide-x-2 divide-gray-300'>
                <h3 className='text-md font-bold text-gray-600 mb-3 cursor-pointer'>Order</h3>
                <h3 className='pl-3 text-md font-bold text-emerald-700 mb-3 cursor-pointer'>Options</h3>
            </div>
            <div className="min-w-[500px] bg-white p-10 rounded-xl max-w-4xl shadow-lg border">
                transparent
            </div>
        </div>
    );
}

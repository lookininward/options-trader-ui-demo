'use client';

import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import { useEffect, useState, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import { ChartOptions } from './ChartOptions';
import { aaplData } from '@/app/data/aapl';

ChartJS.register(
    Filler,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const TimeRanges = {
    '1D': {
        label: '1D',
        value: 1
    },
    '1W': {
        label: '1W',
        value: 7
    },
    '1M': {
        label: '1M',
        value: 30
    },
    '3M': {
        label: '3M',
        value: 90
    },
    '1Y': {
        label: '1Y',
        value: 365
    },
    '5Y': {
        label: '5Y',
        value: 1825
    }
};

interface Dataset {
    data: number[];
    fill: boolean;
    backgroundColor: string | CanvasGradient; // Allow both string and CanvasGradient
    borderColor: string;
}

interface ChartData {
    labels: string[];
    datasets: Dataset[];
}

const createBackgroundGradient = (ctx: CanvasRenderingContext2D) => {
    const gradient = ctx.createLinearGradient(0, 0, 0, ctx.canvas.clientHeight);
    gradient.addColorStop(0, 'rgba(182, 213, 212, 1)'); // Start color
    gradient.addColorStop(0.75, 'rgba(182, 213, 212, 0)'); // End color (more transparent)

    return gradient;
};

export default function Performance() {
    const chartRef = useRef<any>(null);
    const [selectedRange, setSelectedRange] = useState('5Y');
    const [chartData, setChartData] = useState<ChartData>({
        labels: [],
        datasets: [
            {
                data: [],
                fill: true,
                backgroundColor: 'rgba(75,192,192,0.2)',
                borderColor: 'rgba(75,192,192,1)',
            },
        ],
    });

    useEffect(() => {
        if (!chartRef.current) return; // Ensure the chart ref is available

        // Property 'ctx' does not exist on type 'never'.ts(2339)
        const ctx = chartRef.current.ctx;
        if (!ctx) return; // Ensure the context is available

        const gradient = createBackgroundGradient(ctx);

        setChartData((prevChartData) => ({
            ...prevChartData,
            datasets: prevChartData.datasets.map((dataset) => ({
                ...dataset,
                backgroundColor: gradient, // Apply the gradient
            })),
        }));
    }, []);



    useEffect(() => {
        const loadData = async () => {
            const response = await import('../../data/aapl.json');
            const allData = response.default;

            // Calculate the start date for the selected range
            const endDate = new Date('2024-02-17');
            const startDate = new Date(endDate);
            startDate.setDate(endDate.getDate() - TimeRanges[selectedRange as keyof typeof TimeRanges].value);


            const filteredData = allData.filter((item) => {
                const itemDate = new Date(item.Date);
                return itemDate >= startDate && itemDate <= endDate;
            });

            const labels = filteredData.map((item) => item.Date);
            const closePrices = filteredData.map((item) => item.Close);

            setChartData((prevChartData) => ({
                ...prevChartData,
                labels: labels, // Update labels
                datasets: prevChartData.datasets.map((dataset, index) => ({
                    ...dataset,
                    data: index === 0 ? closePrices : dataset.data, // Update data for the first dataset
                })),
            }));
        };

        loadData();
    }, [selectedRange]); // Add selectedRange as a dependency


    return (
        < div >
            <h3 className='text-md font-bold text-gray-600 mb-3'>Performance</h3>
            <div className="bg-white p-10 rounded-xl max-w-4xl shadow-lg border">
                <div className="text-2xl font-bold">
                    $182.31 {aaplData.currency}
                </div>

                <Line
                    ref={chartRef}
                    data={chartData}
                    options={ChartOptions}
                />

                {/* Date Range Selector */}
                <div className='w-full flex justify-center'>
                    <div className="flex gap-x-2">
                        {Object.keys(TimeRanges).map((range) => (
                            <button
                                key={range}
                                onClick={() => setSelectedRange(range)}
                                className={`px-3 py-2 rounded-3xl font-semibold ${selectedRange === range ? 'bg-slate-500 text-white' : 'text-slate-500'}`}
                            >
                                {TimeRanges[range as keyof typeof TimeRanges].label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div >


    );
}

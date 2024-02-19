export const ChartOptions = {
    scales: {
        x: {
            display: false,
            grid: {
                display: false, // This will turn off the x-axis grid lines
            },
            ticks: {
                display: false,
            }
        },
        y: {
            beginAtZero: true,
            display: false,
            grid: {
                display: false, // This will turn off the y-axis grid lines
            },
            ticks: {
                display: false,
            }
        },
    },
    plugins: {
        legend: {
            display: false // This will hide the legend and any labels
        },
        title: {
            display: false // This will hide the title at the top of the chart
        },
        tooltip: {
            enabled: false // This will turn off tooltips which might show "undefined"
        },
        afterDraw: (chart: any) => {
            const ctx = chart.ctx;
            const chartArea = chart.chartArea;

            if (!chartArea) {
                // This is to ensure that the chart area is available
                return;
            }

            const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
            gradient.addColorStop(0, 'rgba(182, 213, 212, 0)'); // More transparent at the bottom
            gradient.addColorStop(1, 'rgba(182, 213, 212, 1)'); // Less transparent at the top

            // Assuming there's only one dataset or you want to apply this to the first dataset
            chart.data.datasets[0].backgroundColor = gradient;
            chart.update();
        },

    },
    elements: {
        line: {
            tension: 0.3, // Adjusts line tension for a more wavy appearance
            borderWidth: 2, // Adjust line thickness if needed
        },
        point: {
            radius: 1, // Makes data points visible
            hoverRadius: 1, // Enlarges data points on hover for better visibility
        },


    },
}
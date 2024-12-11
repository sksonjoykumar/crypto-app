import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
} from "chart.js";

// Register required components
ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale
);

function LineChart({ coinInfoData, isDarkMode }) {
  // Prepare chart data from coinInfoData
  const labels = coinInfoData.map(([timestamp]) =>
    new Date(timestamp).toLocaleDateString()
  ); // Convert timestamps to readable dates
  const prices = coinInfoData.map(([, price]) => price);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Coin Price (USD)",
        data: prices,
        borderColor: "#3A7EE9",
        backgroundColor: "transparent",
        tension: 0.3,
        borderWidth: 1,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      title: {
        display: true,
        text: "Price Change in the last 30 days",
        font: {
          size: 18,
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Date",
        },
      },
      y: {
        title: {
          display: true,
          text: "Price (USD)",
        },
        ticks: {
          callback: (value) => `$${value}`,
        },
      },
    },
  };

  return (
    <div className="p-4">
      <Line className="w-full font-outfit" data={chartData} options={options} />
    </div>
  );
}

export default LineChart;

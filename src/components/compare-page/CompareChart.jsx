import React from "react";
import { Line } from "react-chartjs-2";

function CompareChart({ coinInfoData }) {
  // Guard clause to prevent rendering if no data is available
  if (!coinInfoData || coinInfoData.length < 2) {
    return (
      <p className="text-center text-gray-600">
        Please select two coins to compare.
      </p>
    );
  }

  // Prepare chart data
  const chartData = {
    labels: coinInfoData[0]?.data.map((entry) =>
      new Date(entry[0]).toLocaleDateString()
    ),
    datasets: coinInfoData.map((coin, index) => ({
      label: coin.name,
      data: coin.data.map((entry) => entry[1]),
      borderColor: index === 0 ? "#3A7FE9" : "#61C96F",
      backgroundColor: "transparent",
      pointRadius: 2,
      tension: 0.4, // Smooth lines
    })),
  };

  // Chart options for better UX
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Price Change in the last 30 days",
        font: {
          size: 18,
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.dataset.label}: $${context.raw.toFixed(2)}`;
          },
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
          callback: function (value) {
            return `$${value}`;
          },
        },
      },
    },
  };

  return <Line data={chartData} options={chartOptions} />;
}

export default CompareChart;

import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const data = {
  labels: ["Jan", "Feb", "Mar"],
  datasets: [
    {
      label: "Income",
      data: [65, 59, 80],
      backgroundColor: ["green"],
    },
    {
      label: "Expense",
      data: [40, 50, 75],
      backgroundColor: ["red"],
    },
  ],
};

const options = {
  maintainAspectRatio: false,
};

const BarChart = () => {
  return (
    <div>
      <Bar data={data} height={300} options={options} />
    </div>
  );
};

export default BarChart;

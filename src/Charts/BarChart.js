import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const financeData = [
  {
    month: "Jan",
    income: 100,
    expense: 80,
  },
  {
    month: "Feb",
    income: 200,
    expense: 70,
  },
  {
    month: "Mar",
    income: 200,
    expense: 90,
  },
];

const data = {
  labels: financeData.map((d) => d.month),
  datasets: [
    {
      label: "Income",
      data: financeData.map((d) => d.income),
      backgroundColor: ["rgba(255, 99, 132, 0.2)"],
    },
    {
      label: "Expense",
      data: financeData.map((d) => d.expense),
      backgroundColor: ["rgba(54, 162, 235, 0.2)"],
    },
  ],
};

const options = {
  maintainAspectRatio: false,
  responsive: true,
};

const BarChart = () => {
  return (
    <div>
      <Bar data={data} height={400} options={options} />
    </div>
  );
};

export default BarChart;

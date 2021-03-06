import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const financeData = [
  {
    month: "Jan",
    income: 72654.56,
    expense: 72724.22,
  },
  {
    month: "Feb",
    income: 82427.0,
    expense: 108479.33,
  },
  {
    month: "Mar",
    income: 87749.0,
    expense: 110531.68,
  },
];

const data = {
  labels: financeData.map((d) => d.month),
  datasets: [
    {
      label: "Income",
      data: financeData.map((d) => d.income),
      backgroundColor: ["rgba(75, 192, 192, 0.5)"],
      borderColor: ["green"],
      borderWidth: 1,
    },
    {
      label: "Expense",
      data: financeData.map((d) => d.expense),
      backgroundColor: ["rgba(255, 99, 132, 0.5)"],
      borderColor: ["red"],
      borderWidth: 1,
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

import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Chart } from "react-chartjs-2";

// 注册 Chart.js 的组件
ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend);

const VarianceChart: React.FC = () => {
  // 解释变量比例数据
  const explainedVarianceRatio = [
    0.334904238417343, 0.1322982555998, 0.0955352045177531, 0.0857333868203832,
    0.0795030185293694, 0.0720376674320756, 0.0701756500083144, 0.0545978943261031,
    0.0304267033726373, 0.0271985669344134, 0.00975610029095337, 0.00783331375067426, 0.0,
  ];

  // 累计解释变量比例数据
  const cumulativeExplainedVariance = [
    0.334904238417343, 0.467202494017323, 0.562737698535076, 0.648471085355459,
    0.727974103884829, 0.800011771316904, 0.870187421325219, 0.924785315651322,
    0.955212019023959, 0.982410585958372, 0.99216686249326, 1.0, 1.0,
  ];

  const labels = explainedVarianceRatio.map((_, index) => `PC${index + 1}`);

  const data = {
    labels,
    datasets: [
      {
        type: "bar" as const, // 明确声明为柱状图
        label: "Explained Variance Ratio",
        data: explainedVarianceRatio,
        backgroundColor: labels.map(label => (label === "PC6" ? "rgba(255, 0, 0, 0.5)" : "rgba(75, 192, 192, 0.5)")), // Dynamically set color
      },
      {
        type: "line" as const, // 明确声明为折线图
        label: "Cumulative Explained Variance",
        data: cumulativeExplainedVariance,
        borderColor: "rgba(255, 99, 132, 1)", // 折线颜色
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      tooltip: {
        mode: "index" as const,
        intersect: false,
      },
    },
    
    scales: {
      x: {
        title: {
          display: true,
          text: "Principal Components",
        },
      },
      y: {
        title: {
          display: true,
          text: "Variance Explained",
        },
      },
    },
  };

  return <Chart type="bar" data={data} options={options} />;
};

export default VarianceChart;

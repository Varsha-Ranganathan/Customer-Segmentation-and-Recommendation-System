import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const EvaluationMetrics: React.FC = () => {
  // Dataset after applying T-SNE
  const dataAfter = [
    { clusters: 3, silhouette: 0.482963, logLikelihood: -41698.363334, chIndices: 4837.209022, bic: 83539.198329, daviesBouldin: 0.702043 },
    { clusters: 4, silhouette: 0.391976, logLikelihood: -41400.681424, chIndices: 3886.787350, bic: 82994.118624, daviesBouldin: 0.873939 },
    { clusters: 5, silhouette: 0.425330, logLikelihood: -41191.112140, chIndices: 4971.435526, bic: 82625.264172, daviesBouldin: 0.850173 },
    { clusters: 6, silhouette: 0.421885, logLikelihood: -40956.844691, chIndices: 4160.425066, bic: 82207.013390, daviesBouldin: 0.909413 },
    { clusters: 7, silhouette: 0.442949, logLikelihood: -40580.559032, chIndices: 4287.313461, bic: 81504.726188, daviesBouldin: 0.852580 },
    { clusters: 8, silhouette: 0.455275, logLikelihood: -40503.728308, chIndices: 5727.426180, bic: 81401.348855, daviesBouldin: 0.807918 },
    { clusters: 9, silhouette: 0.478021, logLikelihood: -40271.325804, chIndices: 6399.399731, bic: 80986.827964, daviesBouldin: 0.732990 },
    { clusters: 10, silhouette: 0.472363, logLikelihood: -40184.615545, chIndices: 6273.175785, bic: 80863.691561, daviesBouldin: 0.731595 },
  ];

  // Generate chart data for a specific metric
  const generateChartData = (metric: string) => ({
    labels: dataAfter.map((row) => row.clusters),
    datasets: [
      {
        label: `${metric} (After T-SNE)`,
        data: dataAfter.map((row) => row[metric as keyof typeof row] as number),
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderWidth: 2,
        fill: false,
      },
    ],
  });

  return (
    <div>
      <h1>Evaluation Metrics (Find optimal clusters=5)</h1>

      {/* Line Charts for each metric */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 600px))", gap: "20px", marginTop: "20px" }}>
        <div>
          <h3>Silhouette Score</h3>
          <Line data={generateChartData("silhouette")} options={{ maintainAspectRatio: true }} />
        </div>
        <div>
          <h3>Log-likelihood</h3>
          <Line data={generateChartData("logLikelihood")} options={{ maintainAspectRatio: true }} />
        </div>
        <div>
          <h3>CH Indices</h3>
          <Line data={generateChartData("chIndices")} options={{ maintainAspectRatio: true }} />
        </div>
        <div>
          <h3>BIC</h3>
          <Line data={generateChartData("bic")} options={{ maintainAspectRatio: true }} />
        </div>
        <div>
          <h3>Davies Bouldin</h3>
          <Line data={generateChartData("daviesBouldin")} options={{ maintainAspectRatio: true }} />
        </div>
      </div>
    </div>
  );
};

export default EvaluationMetrics;

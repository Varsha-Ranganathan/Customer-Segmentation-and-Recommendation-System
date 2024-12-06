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

const SC_After: React.FC = () => {
  // Original dataset (before applying T-SNE)
  const dataBefore = [
    { clusters: 3, silhouette: 0.1629283832123380, logLikelihood: -735.4779354229500, chIndices: 596.0166307190360, bic: 2367.6892671493900, daviesBouldin: 1.80401559819709 },
    { clusters: 4, silhouette: 0.1772173223416660, logLikelihood: -49.48290696161620, chIndices: 678.5277204429530, bic: 1297.4039043101400, daviesBouldin: 1.6666500420569700 },
    { clusters: 5, silhouette: 0.1731058108279680, logLikelihood: 2342.3308887045800, chIndices: 678.1154158011690, bic: -3184.518992938840, daviesBouldin: 1.5693772227706400 },
    { clusters: 6, silhouette: 0.05466149598245960, logLikelihood: 2625.8349654194600, chIndices: 548.4184860367310, bic: -3449.8224522851700, daviesBouldin: 1.4642015738085100 },
    { clusters: 7, silhouette: 0.039124167013466800, logLikelihood: 8130.796108229990, chIndices: 524.3733305266540, bic: -14158.040043822800, daviesBouldin: 2.040966450605340 },
    { clusters: 8, silhouette: -0.012759145801547100, logLikelihood: 7507.525816204970, chIndices: 580.5533913454090, bic: -12609.794765689400, daviesBouldin: 1.8136118953466300 },
    { clusters: 9, silhouette: 0.017168600505703600, logLikelihood: 9334.435840816580, chIndices: 563.1288934712530, bic: -15961.910120829200, daviesBouldin: 1.9006477232289800 },
    { clusters: 10, silhouette: 0.013724991722764600, logLikelihood: 9587.34844531419, chIndices: 641.7821939991450, bic: -16166.030635741000, daviesBouldin: 1.901762325024180 },
  ];

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
    labels: dataBefore.map((row) => row.clusters),
    datasets: [
      {
        label: `${metric} (Before T-SNE)`,
        data: dataBefore.map((row) => row[metric as keyof typeof row] as number),
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderWidth: 2,
        fill: false,
      },
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
      <h1>GMM Silhouette Score (Before and After T-SNE)</h1>

      {/* Line Charts for each metric */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 600px))", gap: "20px", marginTop: "20px" }}>
        <div>
          <h3>Silhouette Score</h3>
          <Line data={generateChartData("silhouette")} options={{ maintainAspectRatio: true }} />
        </div>
        {/* Insert PNG Image */}
        <div style={{ marginBottom: "20px" }}>
            <img src="/After.png" alt="Example Visualization" style={{ width: "160%", maxHeight: "800px", objectFit: "contain" }} />
        </div>

        
        {/*<div>
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
        </div>*/}
      </div>
    </div>
  );
};

export default SC_After;

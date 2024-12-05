import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import VarianceChart from "./VarianceChart";
import SC_Before from "./SC_Before";
import SC_After from "./SC_After";
import EvaluationMetrics from "./EvaluationMetric";
import K_mean from "./K_mean";
import Three_d from "./Three_d";
import T_SNE from "./T_SNE";

export default function FinalProject() {
    return (
        <Router>
            <div>
                <h1>DS5230 Final Project</h1>
                <nav>
                    {/* Navigation Links */}
                    <Link to="/"> PCA Components</Link> | 
                    <Link to="/K_mean"> K Means Silhouette</Link> |
                    <Link to="/3-G-K"> 3D plots</Link> |
                    <Link to="/SC-before"> GMM Silhouette before T-SNE</Link> |
                    <Link to="/SC-after"> GMM Silhouette after T-SNE</Link> |
                    <Link to="/evaluation-metric"> GMM Evaluation Metrics</Link> |
                    <Link to="/t-sne"> T-SNE</Link>
                </nav>
                <hr />
                <Routes>
                    {/* Routes for components */}
                    <Route path="/" element={<VarianceChart />} />
                    <Route path="/SC-before" element={<SC_Before />} />
                    <Route path="/SC-after" element={<SC_After />} />
                    <Route path="/evaluation-metric" element={<EvaluationMetrics />} />
                    <Route path="/K_mean" element={<K_mean />} />
                    <Route path="/3-G-K" element={<Three_d />} />
                    <Route path="/t-sne" element={<T_SNE />} />
                </Routes>
            </div>
        </Router>
    );
}

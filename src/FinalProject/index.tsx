import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import VarianceChart from "./VarianceChart";
import SC_Before from "./SC_before";
import SC_After from "./SC_after";
import EvaluationMetrics from "./EvaluationMetric";

export default function FinalProject() {
    return (
        <Router>
            <div>
                <h1>CS5230 Final Project</h1>
                <nav>
                    {/* Navigation Links */}
                    <Link to="/">PCA Components</Link> | 
                    <Link to="/SC-before">Silhouette before T-SNE</Link> |
                    <Link to="/SC-after">Silhouette after T-SNE</Link> |
                    <Link to="/evaluation-metric">Evaluation Metrics</Link>
                </nav>
                <hr />
                <Routes>
                    {/* Routes for components */}
                    <Route path="/" element={<VarianceChart />} />
                    <Route path="/SC-before" element={<SC_Before />} />
                    <Route path="/SC-after" element={<SC_After />} />
                    <Route path="/evaluation-metric" element={<EvaluationMetrics />} />
                </Routes>
            </div>
        </Router>
    );
}

export default function T_SNE() {
    return (
        <div>
             {/* Insert PNG Image */}
        <div style={{ marginLeft: "20px" }}>
            <h2>GMM T-SNE</h2>
            <img src="/GMMtsne.png" alt="Example Visualization" style={{ width: "100%", maxHeight: "600px", objectFit: "contain" }} />
        </div>
        {/* Insert PNG Image */}
        <div style={{ marginLeft: "20px" }}>
        <h2>K-means T-SNE</h2>
            <img src="/ktsne.png" alt="Example Visualization" style={{ width: "100%", maxHeight: "500px", objectFit: "contain" }} />
        </div>
        </div>
    )
}
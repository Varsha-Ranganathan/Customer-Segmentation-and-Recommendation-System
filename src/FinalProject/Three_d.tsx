export default function Three_d() {
    return(
        <div>
             {/* Insert PNG Image */}
        <div style={{ marginLeft: "20px" }}>
            <h2>K-Means 3D plot</h2>
            <img src="/K3D.png" alt="Example Visualization" style={{ width: "100%", maxHeight: "600px", objectFit: "contain" }} />
        </div>
        {/* Insert PNG Image */}
        <div style={{ marginLeft: "20px" }}>
        <h2>GMM 3D plot</h2>
            <img src="/GMM3D.png" alt="Example Visualization" style={{ width: "100%", maxHeight: "500px", objectFit: "contain" }} />
        </div>
        </div>
    )
}
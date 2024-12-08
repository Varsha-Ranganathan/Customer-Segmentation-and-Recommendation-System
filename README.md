# Customer Segmentation and Recommendation System

This project analyzes transactional data to understand customer behavior and purchasing patterns. By leveraging advanced clustering and recommendation techniques, we developed tools for customer segmentation and personalized product suggestions, enabling businesses to optimize marketing strategies and improve customer engagement.

---

## Key Highlights

- **Data Source**: Online Retail dataset from UCI Machine Learning Repository (541,909 transactions, 4,362 unique customers, majority from the UK).
  
- **Customer Segmentation**:
  - **Clustering Techniques**: Applied K-Means and Gaussian Mixture Models (GMM) after dimensionality reduction using PCA and T-SNE.
  - **Feature Engineering**: Created features like RFM metrics, purchase intervals, spending trends, and cancellation behavior for enhanced profiling.
  - **Clusters Identified**:
    - **Cluster 0**: High-value frequent buyers — ideal for loyalty programs and upsell campaigns.
    - **Cluster 1**: Low spenders — targeted promotions can increase engagement.
    - **Cluster 2**: Dormant customers — need reactivation through personalized messages and incentives.
    - **Cluster 3**: VIP customers — benefit from concierge-level services and premium offerings.
    - **Cluster 4**: Stable shoppers — suited for cross-selling and loyalty programs.

---

## Recommendation Systems

- **Content-Based Filtering**: Recommended products based on product attributes and cluster preferences, particularly useful for new customers with no purchase history.
- **Collaborative Filtering**: Suggested complementary or higher-value products using customer purchase history and cluster analysis.
- Addressed business goals such as:
  - Increasing **Average Basket Value (ABV)** through related and higher-value product recommendations.
  - Engaging new customers with universally appealing product suggestions.
  - Strengthening VIP loyalty with tailored premium recommendations.

---

## Results

- Improved clustering with GMM and T-SNE, achieving balanced clusters and a higher silhouette score of **0.43** for five clusters.
- Clear segmentation enabled actionable marketing strategies and enhanced customer targeting.
- Personalized recommendations boosted engagement, increased ABV, and aligned with customer behaviors.

---

## Technologies Used

- **Programming**: Python (Pandas, Scikit-learn, Matplotlib, Seaborn), React-based User Interface
- **Dimensionality Reduction**: PCA, T-SNE
- **Clustering**: K-Means, Gaussian Mixture Models (GMM)
- **Recommendation Techniques**: Content-Based Filtering, Collaborative Filtering

---

For more details and code, refer to the project files.

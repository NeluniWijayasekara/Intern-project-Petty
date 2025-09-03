// src/pages/dashboard/Dashboard.tsx
import React from "react";
import { Row, Col } from "antd";
import DashboardCard from "../../components/DashboardCard";

const Dashboard: React.FC = () => {
  // 👇 API data (hardcoded for now, later can come from backend)
  const stats = [
    { title: "Active Fraud Cases", value: 12 },
    { title: "High-Risk Users", value: 5 },
    { title: "Flagged Claims", value: 8 },
    { title: "Suspicious Listings", value: 4 },
  ];

  return (
    <div>
      <h2 style={{ marginBottom: 20 }}>Dashboard Overview</h2>
      <Row gutter={[16, 16]}>
        {stats.map((stat, index) => (
          <Col xs={24} sm={12} md={6} key={index}>
            <DashboardCard title={stat.title} value={stat.value} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Dashboard;

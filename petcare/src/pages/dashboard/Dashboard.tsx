import React from "react";
import { Row, Col, Card } from "antd";

const Dashboard: React.FC = () => {
  return (
    <div>
      <h2 style={{ marginBottom: 20 }}>Dashboard Overview</h2>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={6}>
          <Card bordered style={{ borderRadius: 8 }}>
            <h3>Active Fraud Cases: 12</h3>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card bordered style={{ borderRadius: 8 }}>
            <h3>High-Risk Users: 5</h3>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card bordered style={{ borderRadius: 8 }}>
            <h3>Flagged Claims: 8</h3>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card bordered style={{ borderRadius: 8 }}>
            <h3>Suspicious Listings: 4</h3>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;

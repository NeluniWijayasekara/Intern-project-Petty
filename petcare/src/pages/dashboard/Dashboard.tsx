import React from "react";
import { Card, Row, Col } from "antd";

const Dashboard: React.FC = () => {
  return (
    <div style={{ padding: 24 }}>
      <h1>Dashboard</h1>
      <Row gutter={16}>
        <Col span={6}>
          <Card title="Users" bordered={false}>
            120
          </Card>
        </Col>
        <Col span={6}>
          <Card title="Pets" bordered={false}>
            80
          </Card>
        </Col>
        <Col span={6}>
          <Card title="Appointments" bordered={false}>
            45
          </Card>
        </Col>
        <Col span={6}>
          <Card title="Revenue" bordered={false}>
            $2,500
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;

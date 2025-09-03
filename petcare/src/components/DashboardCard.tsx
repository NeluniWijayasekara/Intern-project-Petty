// src/components/DashboardCard.tsx
import React from "react";
import { Card } from "antd";

interface DashboardCardProps {
  title: string;
  value: number | string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, value }) => {
  return (
    <Card bordered style={{ borderRadius: 8 }}>
      <h3>{title}: {value}</h3>
    </Card>
  );
};

export default DashboardCard;

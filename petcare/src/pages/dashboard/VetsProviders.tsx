// src/pages/VetsProviders.tsx
import React, { useEffect, useState } from "react";
import { Table, Typography, Tag } from "antd";

const { Title } = Typography;

interface Provider {
  key: string;
  name: string;
  type: string;
  license: string;
  status: string;
}

const VetsProviders: React.FC = () => {
  const [providers, setProviders] = useState<Provider[]>([]);

  useEffect(() => {
    const fetchProviders = async () => {
      try {
        // 👉 Replace with real API call later
        // const response = await fetch("/api/providers");
        // const data = await response.json();
        // setProviders(data);

        setProviders([]); // start with empty data
      } catch (error) {
        console.error("Error fetching providers:", error);
      }
    };

    fetchProviders();
  }, []);

  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Type", dataIndex: "type", key: "type" },
    { title: "License", dataIndex: "license", key: "license" },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => (
        <Tag color={status === "Approved" ? "green" : "orange"}>
          {status}
        </Tag>
      ),
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <Title level={4}>Vet & Service Provider Verification</Title>
      <Table
        columns={columns}
        dataSource={providers}
        pagination={false}
        bordered
      />
    </div>
  );
};

export default VetsProviders;

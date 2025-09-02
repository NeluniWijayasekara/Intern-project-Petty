import React from "react";
import { Table, Tag, Button } from "antd";

interface User {
  key: string;
  name: string;
  email: string;
  risk: "Low" | "Medium" | "High";
  status: "Active" | "Suspended";
}

const Users: React.FC = () => {
  const data: User[] = [
    {
      key: "1",
      name: "Emma Lee",
      email: "emma@example.com",
      risk: "High",
      status: "Suspended",
    }
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Risk Score",
      dataIndex: "risk",
      key: "risk",
      render: (risk: User["risk"]) => {
        let color = "green";
        if (risk === "High") color = "red";
        else if (risk === "Medium") color = "orange";
        return <Tag color={color}>{risk}</Tag>;
      },
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: User["status"]) => {
        return status === "Suspended" ? (
          <Tag color="volcano">{status}</Tag>
        ) : (
          <Tag color="blue">{status}</Tag>
        );
      },
    },
    {
      title: "Actions",
      key: "actions",
      render: (_: any, record: User) => (
        <Button type="default">
          {record.status === "Suspended" ? "Whitelist" : "Suspend"}
        </Button>
      ),
    },
  ];

  return (
    <div>
      <h2>User Fraud Management</h2>
      <Table columns={columns} dataSource={data} pagination={false} />
    </div>
  );
};

export default Users;

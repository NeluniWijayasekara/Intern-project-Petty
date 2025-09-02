import React, { useEffect, useState } from "react";
import { Table, Tag, Button, Spin, message } from "antd";
import axios from "axios";

interface User {
  key: string;
  name: string;
  email: string;
  riskScore: "Low" | "Medium" | "High";
  status: "Active" | "Suspended" | "Pending";
}

const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // 🔹 Fetch user list from backend
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:5000/api/users");
      const data = response.data.map((u: any, index: number) => ({
        key: index.toString(),
        name: u.name,
        email: u.email,
        riskScore: u.riskScore,
        status: u.status,
      }));
      setUsers(data);
    } catch (error) {
      message.error("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // 🔹 Action for Whitelist button
  const handleWhitelist = (record: User) => {
    message.success(`${record.name} has been whitelisted`);
    // 👉 API call could go here: axios.post("/api/users/whitelist", { id: record.key })
  };

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
      dataIndex: "riskScore",
      key: "riskScore",
      render: (risk: User["riskScore"]) => {
        let color = "blue";
        if (risk === "High") color = "red";
        else if (risk === "Medium") color = "orange";
        else if (risk === "Low") color = "green";
        return <Tag color={color}>{risk}</Tag>;
      },
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_: any, record: User) => (
        <Button type="primary" onClick={() => handleWhitelist(record)}>
          Whitelist
        </Button>
      ),
    },
  ];

  return (
    <div>
      <h2>User Fraud Management</h2>
      {loading ? (
        <Spin size="large" />
      ) : (
        <Table columns={columns} dataSource={users} pagination={false} />
      )}
    </div>
  );
};

export default Users;

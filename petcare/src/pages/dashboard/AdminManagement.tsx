// src/pages/AdminManagement.tsx
import React, { useEffect, useState } from "react";
import { Table, Typography } from "antd";

const { Title } = Typography;

interface Admin {
  key: string;
  name: string;
  email: string;
  role: string;
}

const AdminManagement: React.FC = () => {
  const [admins, setAdmins] = useState<Admin[]>([]);

  useEffect(() => {
  const fetchAdmins = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admins"); // 👈 API URL
      const data = await response.json();

      // Table වලට key එක අවශ්‍යයි, backend එකෙන් id නම් key එකට map කරන්න
      const formatted = data.map((admin: any, index: number) => ({
        key: admin.id || index.toString(),
        name: admin.name,
        email: admin.email,
        role: admin.role,
      }));

      setAdmins(formatted);
    } catch (error) {
      console.error("Error fetching admins:", error);
    }
  };

  fetchAdmins();
}, []);


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
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <Title level={4}>Admin & Role Management</Title>
      <Table
        columns={columns}
        dataSource={admins}
        pagination={false}
        bordered
      />
    </div>
  );
};

export default AdminManagement;

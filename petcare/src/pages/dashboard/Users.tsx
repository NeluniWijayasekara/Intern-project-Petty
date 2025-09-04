import React, { useState } from "react";
import { Table, Button, message } from "antd";
import type { TableColumnsType } from "antd";
import UserForm from "../../components/form/UserForm";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}
// Dummy data
const initialUsers: User[] = [
  {
    id: "U-1001",
    name: "Kamal Perera",
    email: "kamal@petcare.lk",
    role: "Admin",
  },
];

const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [open, setOpen] = useState(false);

  const onDelete = (id: string) => {
    setUsers((prev) => prev.filter((u) => u.id !== id));
    message.success("User deleted");
  };

  const onAdd = (user: User) => {
    setUsers((prev) => [user, ...prev]);
    message.success("User created");
  };

  const columns: TableColumnsType<User> = [
    {
      title: "User ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Full Name",
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
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Button size="small" danger onClick={() => onDelete(record.id)}>
          Delete
        </Button>
      ),
    },
  ];

  return (
    <div style={{ padding: 16 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
        <h2 style={{ margin: 0 }}>User Management</h2>
        <Button type="primary" onClick={() => setOpen(true)}>
          + Add User
        </Button>
      </div>

      <Table rowKey="id" columns={columns} dataSource={users} pagination={{ pageSize: 5 }} />

      <UserForm open={open} setOpen={setOpen} onAdd={onAdd} />
    </div>
  );
};

export default Users;

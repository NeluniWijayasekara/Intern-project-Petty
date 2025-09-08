import React, { useState } from "react";
import { Table, Button, message, Popconfirm  } from "antd";
import type { TableColumnsType } from "antd";
import UserForm from "../../components/form/UserForm";

// Define the shape of a User object using TypeScript interface
interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}
// Initial dummy data (preloaded users) use for get ida about UI
const initialUsers: User[] = [
  {
    id: "U-1001",
    name: "Kamal Perera",
    email: "kamal@petcare.lk",
    role: "Admin",
  },
];

const Users: React.FC = () => {
  // State to hold the list of users
  const [users, setUsers] = useState<User[]>(initialUsers);

  // State to control whether the Add User modal (UserForm) is open
  const [open, setOpen] = useState(false);

  // Function to delete a user by ID
  const onDelete = (id: string) => {
    // Keep only the users whose id is not equal to the deleted one
    setUsers((prev) => prev.filter((u) => u.id !== id));
    message.success("User deleted");
  };

  // Function to add a new user
  const onAdd = (user: User) => {
    // Prepend the new user to the existing list
    setUsers((prev) => [user, ...prev]);
    message.success("User created");
  };

  // Prepend the new user to the existing list
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
      // Column for actions like Delete
      title: "Action",
      key: "action",
      render: (_, record) => (
        // Delete button calls onDelete with the current user's id
         <Popconfirm
          title="Are you sure you want to delete this user?"
          okText="Yes"
          cancelText="No"
          onConfirm={() => onDelete(record.id)}
        >
          <Button size="small" danger>
            Delete
          </Button>
        </Popconfirm>
      ),
    },
  ];

  return (
    <div style={{ padding: 16 }}>
     {/* Header section with title and "Add User" button */}
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
        <h2 style={{ margin: 0 }}>User Management</h2>
        <Button type="primary" onClick={() => setOpen(true)}>
          + Add User
        </Button>
      </div>

      {/* Ant Design table showing the list of users */}
      <Table rowKey="id" columns={columns} dataSource={users} pagination={{ pageSize: 5 }} />

      {/* UserForm component for adding new users (modal popup) */}
      <UserForm open={open} setOpen={setOpen} onAdd={onAdd} />
    </div>
  );
};

export default Users;

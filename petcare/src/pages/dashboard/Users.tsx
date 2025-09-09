import React, { useState } from "react";
import { Table, Button, message, Popconfirm ,Modal, Descriptions, Typography  } from "antd";
import type { TableColumnsType } from "antd";
import UserForm from "../../components/form/UserForm";

// Define User type
interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}
// Initial dummy data (preloaded users) use for get ida about UI
const initialUsers: User[] = [
  {
    id: "U-1001",name: "Kamal Perera",email: "kamal@petcare.lk", role: "Admin",
  },
];

const Users: React.FC = () => {
  // State to hold the list of users
  const [users, setUsers] = useState<User[]>(initialUsers);

<<<<<<< HEAD
  // State to control whether the Add User modal (UserForm) is open
  const [open, setOpen] = useState(false);

  // State: View User modal
  const [viewUser, setViewUser] = useState<User | null>(null);
  const [viewOpen, setViewOpen] = useState(false);


  // Function to delete a user by ID
  const onDelete = (id: string) => {
    // Keep only the users whose id is not equal to the deleted one
    setUsers((prev) => prev.filter((u) => u.id !== id));
    message.success("User deleted");
=======
  // 🔹 Fetch user list from backend
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:5000/api/users");
  const data = response.data.map((u: { name: string; email: string; riskScore: User["riskScore"]; status: User["status"] }, index: number) => ({
        key: index.toString(),
        name: u.name,
        email: u.email,
        riskScore: u.riskScore,
        status: u.status,
      }));
      setUsers(data);
    } catch {
      message.error("Failed to fetch users");
    } finally {
      setLoading(false);
    }
>>>>>>> dashboard
  };

  // Function to add a new user
  const onAdd = (user: User) => {
    // Prepend the new user to the existing list
    setUsers((prev) => [user, ...prev]);
    message.success("User created");
  };

    // View function
  const onView = (user: User) => {
    setViewUser(user);
    setViewOpen(true);
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
<<<<<<< HEAD
      // Column for actions like Delete
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div style={{ display: "flex", gap: "8px" }}>
      <Button size="small" onClick={() => onView(record)}>
        View
      </Button>
      <Popconfirm
        title={`Are you sure you want to delete ${record.name}?`}
        okText="Yes"
        cancelText="No"
        onConfirm={() => onDelete(record.id)}
      >
        {/* Delete button calls onDelete with the current user's id  */}
        <Button size="small" danger>
          Delete
=======
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Actions",
      key: "actions",
  render: (_: unknown, record: User) => (
        <Button type="primary" onClick={() => handleWhitelist(record)}>
          Whitelist
>>>>>>> dashboard
        </Button>
      </Popconfirm>
    </div>
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

      {/* View User Modal */}
      <Modal
        title="User Details"
        open={viewOpen}
        onCancel={() => setViewOpen(false)}
        footer={null}
        >
        {viewUser && (
        <Descriptions
          bordered
          column={1} // single column
          size="middle"
          layout="horizontal" // horizontal layout → label and value same line
          style={{ background: "#fafafa", padding: 16, borderRadius: 8 }}
        >
        <Descriptions.Item label="User ID">
          <Typography.Text strong>{viewUser.id}</Typography.Text>
        </Descriptions.Item>

        <Descriptions.Item label="Name">
          <Typography.Text>{viewUser.name}</Typography.Text>
        </Descriptions.Item>

        <Descriptions.Item label="Email">
          <Typography.Text>{viewUser.email}</Typography.Text>
        </Descriptions.Item>

        <Descriptions.Item label="Role">
         <Typography.Text>{viewUser.role}</Typography.Text>
        </Descriptions.Item>
      </Descriptions>
      )}
      </Modal>
    </div>
  );
};

export default Users;

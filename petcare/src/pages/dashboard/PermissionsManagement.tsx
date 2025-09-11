import React, { useState } from "react";
import { Table, Button, Checkbox, message } from "antd";
import type { TableColumnsType } from "antd";

interface Role {
  id: string;
  name: string;
  permissions: string[];
}

const allPermissions = [
  "view_users",
  "add_users",
  "edit_users",
  "delete_users",
  "view_pets",
  "add_pets",
  "edit_pets",
  "delete_pets",
];

const initialRoles: Role[] = [
  { id: "R-1", name: "Admin", permissions: [...allPermissions] },
  { id: "R-2", name: "Vet", permissions: ["view_pets", "edit_pets"] },
  { id: "R-3", name: "Receptionist", permissions: ["view_users", "view_pets", "add_pets"] },
];

const PermissionsManagement: React.FC = () => {
  const [roles, setRoles] = useState<Role[]>(initialRoles);

  // ✅ Toggle permission on/off
  const handlePermissionChange = (roleId: string, permission: string) => {
    setRoles((prev) =>
      prev.map((role) =>
        role.id === roleId
          ? {
              ...role,
              permissions: role.permissions.includes(permission)
                ? role.permissions.filter((p) => p !== permission)
                : [...role.permissions, permission],
            }
          : role
      )
    );
  };

  // ✅ Save all changes
  const onSave = () => {
    console.log("Updated Roles:", roles);
    message.success("Permissions saved (mock)!");
  };

  // 📌 Table columns
  const columns: TableColumnsType<Role> = [
    {
      title: "Role ID",
      dataIndex: "id",
      key: "id",
      width: 100,
    },
    {
      title: "Role Name",
      dataIndex: "name",
      key: "name",
      width: 150,
    },
    ...allPermissions.map((perm) => ({
      title: perm,
      dataIndex: perm,
      key: perm,
      render: (_: any, record: Role) => (
        <Checkbox
          checked={record.permissions.includes(perm)}
          onChange={() => handlePermissionChange(record.id, perm)}
        />
      ),
    })),
  ];

  return (
    <div style={{ padding: 16 }}>
     
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
        <h2 style={{ margin: 0 }}>Permission Management</h2>
        <Button type="primary" onClick={onSave}>
          Save Changes
        </Button>
      </div>


      <Table
        rowKey="id"
        columns={columns}
        dataSource={roles}
        pagination={false}
        scroll={{ x: "max-content" }}
        bordered
      />
    </div>
  );
};

export default PermissionsManagement;

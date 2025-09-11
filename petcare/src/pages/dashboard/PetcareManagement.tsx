import React, { useState } from "react";
import {
  Table,
  Button,
  message,
  Popconfirm,
  Modal,
  Descriptions,
  Typography,
} from "antd";
import type { TableColumnsType } from "antd";
import PetAddForm from "../../components/form/PetAddForm";

interface Pet {
  id: string;
  name: string;
  type: string;
  breed: string;
  owner: string;
  age: number;
}

const initialPets: Pet[] = [
  {
    id: "P-1001",
    name: "Bobby",
    type: "Dog",
    breed: "German Shepherd",
    owner: "Kamal Perera",
    age: 3,
  },
];

const PetcareManagement: React.FC = () => {
  const [pets, setPets] = useState<Pet[]>(initialPets);

  // Add 
  const [open, setOpen] = useState(false);

  // Edit 
  const [editOpen, setEditOpen] = useState(false);
  const [editPet, setEditPet] = useState<Pet | null>(null);

  // View 
  const [viewPet, setViewPet] = useState<Pet | null>(null);
  const [viewOpen, setViewOpen] = useState(false);

  // Delete
  const onDelete = (id: string) => {
    setPets((prev) => prev.filter((p) => p.id !== id));
    message.success("Pet deleted");
  };

  // Add
  const onAdd = (pet: Omit<Pet, "id">) => {
    const newPet: Pet = {
      id: "P-" + (Math.floor(Math.random() * 9000) + 1000),
      ...pet,
    };
    setPets((prev) => [newPet, ...prev]);
    message.success("Pet added");
  };

  // Edit
  const onEdit = (updated: Omit<Pet, "id">) => {
    if (!editPet) return;
    setPets((prev) =>
      prev.map((p) =>
        p.id === editPet.id ? { ...p, ...updated } : p
      )
    );
    message.success("Pet updated");
  };

  // View
  const onView = (pet: Pet) => {
    setViewPet(pet);
    setViewOpen(true);
  };

 
  const columns: TableColumnsType<Pet> = [
    { title: "Pet ID", dataIndex: "id", key: "id" },
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Type", dataIndex: "type", key: "type" },
    { title: "Breed", dataIndex: "breed", key: "breed" },
    { title: "Owner", dataIndex: "owner", key: "owner" },
    { title: "Age", dataIndex: "age", key: "age" },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div style={{ display: "flex", gap: "8px" }}>
          <Button size="small" onClick={() => onView(record)}>
            View
          </Button>
          <Button
            size="small"
            onClick={() => {
              setEditPet(record);
              setEditOpen(true);
            }}
          >
            Edit
          </Button>
          <Popconfirm
            title={`Delete ${record.name}?`}
            okText="Yes"
            cancelText="No"
            onConfirm={() => onDelete(record.id)}
          >
            <Button size="small" danger>
              Delete
            </Button>
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <div style={{ padding: 16 }}>
      
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 12,
        }}
      >
        <h2 style={{ margin: 0 }}>Petcare Management</h2>
        <Button type="primary" onClick={() => setOpen(true)}>
          + Add Pet
        </Button>
      </div>

      {/* Table */}
      <Table
        rowKey="id"
        columns={columns}
        dataSource={pets}
        pagination={{ pageSize: 5 }}
      />

      {/* Add Pet Modal */}
      <Modal
        title="Add New Pet"
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
      >
        <PetAddForm setOpen={setOpen} onSubmit={onAdd} />
      </Modal>

      {/* Edit Pet Modal */}
      <Modal
        title="Edit Pet"
        open={editOpen}
        onCancel={() => {
          setEditOpen(false);
          setEditPet(null);
        }}
        footer={null}
      >
        {editPet && (
          <PetAddForm
            setOpen={setEditOpen}
            onSubmit={onEdit}
            initialValues={editPet}
          />
        )}
      </Modal>

      {/* View Pet Modal */}
      <Modal
        title="Pet Details"
        open={viewOpen}
        onCancel={() => setViewOpen(false)}
        footer={null}
      >
        {viewPet && (
          <Descriptions bordered column={1} size="middle">
            <Descriptions.Item label="Pet ID">
              <Typography.Text strong>{viewPet.id}</Typography.Text>
            </Descriptions.Item>
            <Descriptions.Item label="Name">{viewPet.name}</Descriptions.Item>
            <Descriptions.Item label="Type">{viewPet.type}</Descriptions.Item>
            <Descriptions.Item label="Breed">{viewPet.breed}</Descriptions.Item>
            <Descriptions.Item label="Owner">{viewPet.owner}</Descriptions.Item>
            <Descriptions.Item label="Age">{viewPet.age} years</Descriptions.Item>
          </Descriptions>
        )}
      </Modal>
    </div>
  );
};

export default PetcareManagement;


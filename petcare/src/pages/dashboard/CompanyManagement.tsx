import React, { useState } from "react";
import {
  Table,
  Button,
  message,
  Popconfirm,
  Modal,
  Descriptions,
  Typography,
  Space,
  Form,
  Input,
  DatePicker,
} from "antd";
import type { TableColumnsType } from "antd";
import dayjs from "dayjs";

interface Company {
  id: string;
  name: string;
  legalDocument: string;
  registerDate: string;
  owner: string;
  location: string;
}

const initialCompanies: Company[] = [
  {
    id: "C-1001",
    name: "Tech Innovators Pvt Ltd",
    legalDocument: "DOC-2024-01",
    registerDate: "2023-05-15",
    owner: "Nimal Silva",
    location: "Colombo, Sri Lanka",
  },
];

const CompanyManagement: React.FC = () => {
  const [companies, setCompanies] = useState<Company[]>(initialCompanies);

  // Add Modal
  const [open, setOpen] = useState(false);

  // Edit Modal
  const [editOpen, setEditOpen] = useState(false);
  const [editCompany, setEditCompany] = useState<Company | null>(null);

  // View Modal
  const [viewCompany, setViewCompany] = useState<Company | null>(null);
  const [viewOpen, setViewOpen] = useState(false);

  const [form] = Form.useForm();

  // Delete
  const onDelete = (id: string) => {
    setCompanies((prev) => prev.filter((c) => c.id !== id));
    message.success("Company deleted");
  };

  // Add
  const onAdd = (values: any) => {
    const newCompany: Company = {
      id: "C-" + (Math.floor(Math.random() * 9000) + 1000),
      ...values,
      registerDate: values.registerDate.format("YYYY-MM-DD"),
    };
    setCompanies((prev) => [newCompany, ...prev]);
    message.success("Company added");
    setOpen(false);
    form.resetFields();
  };

  // Edit
  const onEdit = (values: any) => {
    if (!editCompany) return;
    const updated = {
      ...values,
      registerDate: values.registerDate.format("YYYY-MM-DD"),
    };
    setCompanies((prev) =>
      prev.map((c) =>
        c.id === editCompany.id ? { ...c, ...updated } : c
      )
    );
    message.success("Company updated");
    setEditOpen(false);
    setEditCompany(null);
    form.resetFields();
  };

  // View
  const onView = (company: Company) => {
    setViewCompany(company);
    setViewOpen(true);
  };

  // Table Columns
  const columns: TableColumnsType<Company> = [
    { title: "Company ID", dataIndex: "id", key: "id" },
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Legal Document", dataIndex: "legalDocument", key: "legalDocument" },
    { title: "Register Date", dataIndex: "registerDate", key: "registerDate" },
    { title: "Owner", dataIndex: "owner", key: "owner" },
    { title: "Location", dataIndex: "location", key: "location" },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space>
          <Button size="small" onClick={() => onView(record)}>View</Button>
          <Button
            size="small"
            onClick={() => {
              setEditCompany(record);
              form.setFieldsValue({
                ...record,
                registerDate: dayjs(record.registerDate),
              });
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
            <Button size="small" danger>Delete</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div style={{ padding: 16 }}>
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 12,
        }}
      >
        <h2 style={{ margin: 0 }}>Company Management</h2>
        <Button type="primary" onClick={() => setOpen(true)}>
          + Add Company
        </Button>
      </div>

      {/* Table */}
      <Table
        rowKey="id"
        columns={columns}
        dataSource={companies}
        pagination={{ pageSize: 5, showSizeChanger: true }}
      />

      {/* Add Company Modal */}
      <Modal
        title="Add New Company"
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
      >
        <Form form={form} layout="vertical" onFinish={onAdd}>
          <Form.Item
            name="name"
            label="Company Name"
            rules={[{ required: true, message: "Please enter company name" }]}
          >
            <Input placeholder="Enter company name" />
          </Form.Item>

          <Form.Item
            name="legalDocument"
            label="Legal Document"
            rules={[{ required: true, message: "Please enter legal document ID" }]}
          >
            <Input placeholder="Enter legal document" />
          </Form.Item>

          <Form.Item
            name="registerDate"
            label="Register Date"
            rules={[{ required: true, message: "Please select register date" }]}
          >
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            name="owner"
            label="Company Owner"
            rules={[{ required: true, message: "Please enter owner name" }]}
          >
            <Input placeholder="Enter owner name" />
          </Form.Item>

          <Form.Item
            name="location"
            label="Location"
            rules={[{ required: true, message: "Please enter location" }]}
          >
            <Input placeholder="Enter location" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Add Company
            </Button>
          </Form.Item>
        </Form>
      </Modal>

      {/* Edit Company Modal */}
      <Modal
        title="Edit Company"
        open={editOpen}
        onCancel={() => {
          setEditOpen(false);
          setEditCompany(null);
        }}
        footer={null}
      >
        {editCompany && (
          <Form form={form} layout="vertical" onFinish={onEdit}>
            <Form.Item
              name="name"
              label="Company Name"
              rules={[{ required: true, message: "Please enter company name" }]}
            >
              <Input placeholder="Enter company name" />
            </Form.Item>

            <Form.Item
              name="legalDocument"
              label="Legal Document"
              rules={[{ required: true, message: "Please enter legal document ID" }]}
            >
              <Input placeholder="Enter legal document" />
            </Form.Item>

            <Form.Item
              name="registerDate"
              label="Register Date"
              rules={[{ required: true, message: "Please select register date" }]}
            >
              <DatePicker style={{ width: "100%" }} />
            </Form.Item>

            <Form.Item
              name="owner"
              label="Company Owner"
              rules={[{ required: true, message: "Please enter owner name" }]}
            >
              <Input placeholder="Enter owner name" />
            </Form.Item>

            <Form.Item
              name="location"
              label="Location"
              rules={[{ required: true, message: "Please enter location" }]}
            >
              <Input placeholder="Enter location" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Update Company
              </Button>
            </Form.Item>
          </Form>
        )}
      </Modal>

      {/* View Company Modal */}
      <Modal
        title="Company Details"
        open={viewOpen}
        onCancel={() => setViewOpen(false)}
        footer={null}
      >
        {viewCompany && (
          <Descriptions bordered column={1} size="middle">
            <Descriptions.Item label="Company ID">
              <Typography.Text strong>{viewCompany.id}</Typography.Text>
            </Descriptions.Item>
            <Descriptions.Item label="Name">{viewCompany.name}</Descriptions.Item>
            <Descriptions.Item label="Legal Document">{viewCompany.legalDocument}</Descriptions.Item>
            <Descriptions.Item label="Register Date">{viewCompany.registerDate}</Descriptions.Item>
            <Descriptions.Item label="Owner">{viewCompany.owner}</Descriptions.Item>
            <Descriptions.Item label="Location">{viewCompany.location}</Descriptions.Item>
          </Descriptions>
        )}
      </Modal>
    </div>
  );
};

export default CompanyManagement;

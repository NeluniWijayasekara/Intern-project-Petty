import React from "react";
import { Modal, Form, Input } from "antd";

interface UserFormProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  onAdd: (user: any) => void;
}

const UserForm: React.FC<UserFormProps> = ({ open, setOpen, onAdd }) => {
  const [form] = Form.useForm();

  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      const newUser = {
        id: `U-${Date.now()}`,
        name: values.name,
        email: values.email,
        role: values.role,
      };
      onAdd(newUser);
      setOpen(false);
      form.resetFields();
    } catch (err) {
      // handled by antd
    }
  };

  return (
    <Modal
      title="Add User"
      open={open}
      onOk={handleOk}
      onCancel={() => setOpen(false)}
      okText="Create User"
      destroyOnClose
    >
      <Form form={form} layout="vertical">
        <Form.Item
          label="Full Name"
          name="name"
          rules={[{ required: true, message: "Please enter full name" }]}
        >
          <Input placeholder="e.g. Kumari Fernando" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, type: "email", message: "Valid email required" }]}
        >
          <Input placeholder="e.g. kumari@petcare.lk" />
        </Form.Item>

        <Form.Item
          label="Role"
          name="role"
          rules={[{ required: true, message: "Please enter role" }]}
        >
          <Input placeholder="e.g. Admin / Vet / Pet Owner" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default UserForm;

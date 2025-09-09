import React from "react";
import { Modal, Form, Input } from "antd";

interface UserFormProps {
  open: boolean; // whether modal is visible
  setOpen: (open: boolean) => void; // function to toggle modal
  onAdd: (user: any) => void; // callback to add a new user
}

const UserForm: React.FC<UserFormProps> = ({ open, setOpen, onAdd }) => {
  const [form] = Form.useForm(); // Ant Design form instance

  // Handle form submission
  const handleOk = async () => {
    try {
      const values = await form.validateFields(); // Validate fields before submission

      const newUser = {
        id: `U-${Date.now()}`, 
        name: values.name,
        email: values.email,
        role: values.role,
      };

      onAdd(newUser); // pass new user to parent component
      setOpen(false); // close modal
      form.resetFields(); // clear form fields
    } catch (err) {
      // Validation errors handled automatically by Ant Design
    }
  };

  return (
    <Modal
      title="Add User" // Modal header
      open={open} // controls modal visibility
      onOk={handleOk} // submit handler
      onCancel={() => setOpen(false)} // close modal
      okText="Create User" // text for OK button
      destroyOnClose // reset form on close
    >
      <Form form={form} layout="vertical">
        {/* Full Name input field */}
        <Form.Item
          label="Full Name"
          name="name"
          rules={[{ required: true, message: "Please enter full name" }]}
        >
          <Input placeholder="e.g. Kumari Fernando" />
        </Form.Item>

        {/* Email input field */}
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, type: "email", message: "Valid email required" }]}
        >
          <Input placeholder="e.g. kumari@petcare.lk" />
        </Form.Item>

        {/* Role input field */}
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

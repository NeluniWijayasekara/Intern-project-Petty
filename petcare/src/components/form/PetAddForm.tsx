import React from "react";
import { Form, Input, Select, Button } from "antd";

interface Pet {
  id: string;
  name: string;
  type: string;
  breed: string;
  owner: string;
  age: number;
}

interface PetFormProps {
  initialValues?: Omit<Pet, "id">; // for editing
  setOpen: (open: boolean) => void;
  onSubmit: (pet: Omit<Pet, "id">) => void;
}

const PetAddForm: React.FC<PetFormProps> = ({ initialValues, setOpen, onSubmit }) => {
  const [form] = Form.useForm();

  // if edit mode → set form values
  React.useEffect(() => {
    if (initialValues) {
      form.setFieldsValue(initialValues);
    }
  }, [initialValues, form]);

  const handleFinish = (values: any) => {
    onSubmit(values);
    setOpen(false);
    form.resetFields();
  };

  return (
    <Form layout="vertical" form={form} onFinish={handleFinish}>
      <Form.Item name="name" label="Pet Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="type" label="Type" rules={[{ required: true }]}>
        <Select
          options={[
            { value: "Dog", label: "Dog" },
            { value: "Cat", label: "Cat" },
            { value: "Other", label: "Other" },
          ]}
        />
      </Form.Item>
      <Form.Item name="breed" label="Breed">
        <Input />
      </Form.Item>
      <Form.Item name="owner" label="Owner Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="age" label="Age (years)">
        <Input type="number" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          {initialValues ? "Update Pet" : "Save Pet"}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default PetAddForm;

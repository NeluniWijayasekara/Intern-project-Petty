import React from "react";
import { Form, Input, Button } from "antd";
import AuthLayout from "../components/AuthLayout";

const ResetPassword: React.FC = () => {
  const onFinish = (values: any) => {
    console.log("Reset password submit:", values);
  };

  return (
    <AuthLayout title="Petty" subtitle="">
      <Form onFinish={onFinish} layout="vertical">
        <Form.Item name="password" rules={[{ required: true }]}>
          <Input.Password placeholder="Password" size="large" style={inputStyle} />
        </Form.Item>
        <Form.Item name="repassword" rules={[{ required: true }]}>
          <Input.Password placeholder="Re enter password" size="large" style={inputStyle} />
        </Form.Item>

        <Button htmlType="submit" type="primary" block size="large" style={buttonStyle}>
          Login
        </Button>
      </Form>
    </AuthLayout>
  );
};

const inputStyle = {
  borderRadius: 12,
  background: "#f1f1f1",
  border: "none",
  height: 44,
};

const buttonStyle = {
  height: 44,
  borderRadius: 12,
  background: "linear-gradient(90deg, #ff8a00 0%, #ffb020 100%)",
  borderColor: "transparent",
  fontWeight: 600,
};

export default ResetPassword;

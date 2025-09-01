import React from "react";
import { Form, Input, Button, Typography } from "antd";
import { Link } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";

const { Text } = Typography;

const SignUp: React.FC = () => {
  const onFinish = (values: any) => {
    console.log("SignUp submit:", values);
  };

  return (
    <AuthLayout title="Petty" subtitle="Sign up">
      <Form onFinish={onFinish} layout="vertical">
        <Form.Item name="email" rules={[{ required: true, type: "email" }]}>
          <Input placeholder="Email" size="large" style={inputStyle} />
        </Form.Item>
        <Form.Item name="username" rules={[{ required: true }]}>
          <Input placeholder="User name" size="large" style={inputStyle} />
        </Form.Item>
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

      <Text style={{ marginTop: 24, fontSize: 14 }}>
        Do you have account?{" "}
        <Link to="/login" style={{ color: "#ff8a00", fontWeight: 600 }}>
          Login
        </Link>
      </Text>
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

export default SignUp;

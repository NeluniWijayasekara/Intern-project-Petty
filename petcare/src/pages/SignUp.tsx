import React from "react";
import { Form, Input, Typography } from "antd";
import { Link } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";

const { Text } = Typography;

type SignUpValues = {
  email: string;
  username: string;
  password: string;
  repassword: string;
};

const SignUp: React.FC = () => {
  const [form] = Form.useForm<SignUpValues>();

  const onFinish = (values: SignUpValues) => {
    console.log("SignUp submit:", values);
  };

  return (
    <AuthLayout title="Petty" subtitle="Sign up">
      <Form<SignUpValues>
        form={form}
        onFinish={onFinish}
        layout="vertical"
        validateTrigger="onSubmit" // validate only when submit
      >
        {/* email */}
        <Form.Item
          name="email"
          rules={[
            { required: true, message: "Please enter your email" },
            { type: "email", message: "Email is not valid" },
          ]}
        >
          <Input placeholder="Email" size="large" style={inputStyle} />
        </Form.Item>

        {/* username */}
        <Form.Item
          name="username"
          rules={[
            { required: true, message: "Please enter a username" },
            { min: 3, message: "Username must be at least 3 characters" },
          ]}
        >
          <Input placeholder="User name" size="large" style={inputStyle} />
        </Form.Item>

         {/* password */}
        <Form.Item
          name="password"
          rules={[
            { required: true, message: "Please enter your password" },
            { min: 6, message: "Password must be at least 6 characters" },
            {
              validator: (_, value) => {
                if (!value) return Promise.resolve();
                const strongRegex = /[0-9@#$%^&*!]/;
                if (!strongRegex.test(value)) {
                  return Promise.reject(
                    new Error("Password must include a number or special character")
                  );
                }
                return Promise.resolve();
              },
            },
          ]}
        >
          <Input.Password placeholder="Password" size="large" style={inputStyle} />
        </Form.Item>

         {/* re enter password */}
        <Form.Item
          name="repassword"
          dependencies={["password"]}
          rules={[
            { required: true, message: "Please re-enter your password" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("Passwords do not match"));
              },
            }),
          ]}
        >
          <Input.Password placeholder="Re enter password" size="large" style={inputStyle} />
        </Form.Item>

        {/* button */}
        <Form.Item style={{ marginBottom: 8 }}>
          <AuthLayout.AuthButton htmlType="submit">
            Sign up
          </AuthLayout.AuthButton>
        </Form.Item>
      </Form>

       {/* footer link */}
      <Text style={{ marginTop: 24, fontSize: 14, display: "block", textAlign: "center" }}>
        Do you have an account?{" "}
        <Link to="/login" style={{ color: "#ff8a00", fontWeight: 600 }}>
          Login
        </Link>
      </Text>
    </AuthLayout>
  );
};

const inputStyle: React.CSSProperties = {
  borderRadius: 12,
  background: "#f1f1f1",
  border: "none",
  height: 44,
};


export default SignUp;

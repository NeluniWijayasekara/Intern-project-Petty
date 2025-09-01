import React from "react";
import { Form, Input, Button, Typography } from "antd";
import { Link } from "react-router-dom";

const { Title, Text } = Typography;

type LoginValues = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const onFinish = (values: LoginValues) => {
    console.log("Login submit:", values);
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#fff",
        padding: 16,
      }}
    >
      {/* brand */}
      <Title
        level={3}
        style={{ fontFamily: "cursive", marginBottom: 4, lineHeight: 1 }}
      >
        Petty
      </Title>
      <Text style={{ marginBottom: 16 }}>Login</Text>

      {/* logo */}
      <img
        src="/assets/paw.png" // put the image at: public/assets/paw.png
        alt="paw"
        style={{ width: 74, height: 74, objectFit: "contain", marginBottom: 16 }}
      />

      {/* form */}
      <Form<LoginValues>
        name="login"
        onFinish={onFinish}
        layout="vertical"
        style={{ width: 300, maxWidth: "90vw" }}
      >
        <Form.Item
          name="email"
          rules={[
            { required: true, message: "Please enter your email" },
            { type: "email", message: "Email is not valid" },
          ]}
        >
          <Input
            size="large"
            placeholder="Email"
            autoComplete="off"   // ⬅ stop email suggestions
            style={{
              borderRadius: 12,
              background: "#f1f1f1",
              border: "none",
              height: 44,
            }}
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please enter your password" }]}
        >
          <Input.Password
            size="large"
            placeholder="Password"
            style={{
              borderRadius: 12,
              background: "#f1f1f1",
              border: "none",
              height: 44,
            }}
          />
        </Form.Item>

        <Form.Item style={{ marginBottom: 8 }}>
          <Button
            htmlType="submit"
            type="primary"
            size="large"
            block
            style={{
              height: 44,
              borderRadius: 12,
              background:
                "linear-gradient(90deg, #ff8a00 0%, #ffb020 100%)",
              borderColor: "transparent",
              fontWeight: 600,
            }}
          >
            Sign in
          </Button>
        </Form.Item>
      </Form>

      <Link to="#" style={{ color: "#ff8a00", marginTop: 8 }}>
        Forget password?
      </Link>

      <Text style={{ marginTop: 32, fontSize: 14 }}>
        Don&apos;t have an account yet?{" "}
        <Link to="/signup" style={{ color: "#ff8a00", fontWeight: 600 }}>
          Sign Up
        </Link>
      </Text>
    </div>
  );
};

export default Login;

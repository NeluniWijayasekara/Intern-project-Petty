import React from "react";
import { Form, Input,Typography } from "antd";
import { Link } from "react-router-dom";
import AuthLayout from "../../components/AuthLayout.tsx";

const { Text } = Typography;

type LoginValues = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const onFinish = (values: LoginValues) => {
    console.log("Login submit:", values); //api calling spot
  };

  return (
    <AuthLayout title="Petty" subtitle="Login">
      <Form<LoginValues> name="login" onFinish={onFinish} layout="vertical" validateTrigger="onSubmit"  // <-- validate only on submit
        style={{ width: 300, maxWidth: "90vw" }}>
        
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

        {/* password */}
        <Form.Item
          name="password"
          rules={[
            { required: true, message: "Please enter your password" },
            { min: 6, message: "Password must be at least 6 characters" },
        {
             validator: (_, value) => {
              if (!value) return Promise.resolve();

        // regex: must contain at least one number OR one special character
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
          <Input.Password size="large" placeholder="Password" style={inputStyle}
        />
        </Form.Item>

         {/* button */}
        <Form.Item style={{ marginBottom: 8 }}>
          <AuthLayout.AuthButton htmlType="submit">
            Sign in
          </AuthLayout.AuthButton>
        </Form.Item>
      </Form>


      {/* links */}
      <Link to="/forgot" style={{ color: "#ff8a00", marginTop: 8, display: "block", textAlign: "center" ,fontSize: 14, textDecoration: "none",  }}>
        Forget password?
      </Link>

      <Text style={{ marginTop: 32, fontSize: 14, display: "block", textAlign: "center" }}>
        Don&apos;t have an account yet?{" "}
        <Link to="/signup" style={{ color: "#ff8a00", fontWeight: 600 }}>
          Sign Up
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


export default Login;


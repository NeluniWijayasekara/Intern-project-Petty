import React from "react";
import { Form, Input} from "antd";
import AuthLayout from "../components/AuthLayout";

type ForgotPasswordValues = {
  email: string;
};

const ForgotPassword: React.FC = () => {
  const [form] = Form.useForm<ForgotPasswordValues>();

  const onFinish = (values: ForgotPasswordValues) => {
    console.log("Forgot password submit:", values);
    // 🚀 API call spot
  };

  return (
    <AuthLayout title="Petty" subtitle="Forget Password">
      <Form<ForgotPasswordValues>
        form={form}
        name="forgot"
        onFinish={onFinish}
        layout="vertical"
        validateTrigger="onSubmit" // validate only on submit
        style={{ width: 300, maxWidth: "90vw" }}
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

        {/* submit button */}
        <AuthLayout.AuthButton htmlType="submit">
          Send Reset Link
        </AuthLayout.AuthButton>
      </Form>
    </AuthLayout>
  );
};

const inputStyle: React.CSSProperties = {
  borderRadius: 12,
  background: "#f1f1f1",
  border: "none",
  height: 44,
};

export default ForgotPassword;
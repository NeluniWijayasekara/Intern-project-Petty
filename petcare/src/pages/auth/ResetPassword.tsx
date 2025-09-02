import React from "react";
import { Form, Input} from "antd";
import AuthLayout from "../../components/AuthLayout";

type ResetValues = {
  password: string;
  repassword: string;
};

const ResetPassword: React.FC = () => {
  const [form] = Form.useForm<ResetValues>();

  const onFinish = (values: ResetValues) => {
    console.log("Reset password submit:", values); // API call here
  };

    return (
    <AuthLayout title="Petty" subtitle="Reset your password">
      <Form<ResetValues> form={form} onFinish={onFinish} layout="vertical">
        
        {/* New Password */}
        <Form.Item
          name="password"
          rules={[
            { required: true, message: "Please enter your new password" },
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
          <Input.Password placeholder="New Password" size="large" style={inputStyle} />
        </Form.Item>

        {/* Confirm Password */}
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
          <Input.Password placeholder="Confirm Password" size="large" style={inputStyle} />
        </Form.Item>

        {/* Submit Button */}
        <Form.Item>
          <AuthLayout.AuthButton htmlType="submit">
            Reset Password
          </AuthLayout.AuthButton>
        </Form.Item>
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

export default ResetPassword;
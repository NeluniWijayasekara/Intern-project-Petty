import React from "react";
import { Form, Input, Typography } from "antd";
import { Link } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";

const { Text } = Typography;

type OtpValues = {
  otp: string[];
};

const VerifyOtp: React.FC = () => {
  const [form] = Form.useForm<OtpValues>();

  const onFinish = (values: OtpValues) => {
    const otpCode = values.otp.join("");
    console.log("OTP submit:", otpCode); // API call spot
  };

  return (
    <AuthLayout title="Petty" subtitle="Verify OTP">
      <Text
        style={{
          display: "block",
          marginBottom: 16,
          textAlign: "center",
        }}
      >
        Enter the 4-digit OTP sent to your Email. Please check your inbox.
      </Text>

      <Form<OtpValues> form={form} onFinish={onFinish} layout="vertical">
        {/* OTP Inputs */}
        <Form.Item
          name="otp"
          rules={[
            {
              validator: (_, value) => {
                if (!value || value.length !== 4 || value.some((d: string) => !d)) {
                  return Promise.reject(new Error("Please enter the full 4-digit OTP"));
                }
                return Promise.resolve();
              },
            },
          ]}
        >
          <div
            style={{
              display: "flex",
              gap: 8,
              justifyContent: "center",
              marginBottom: 24,
            }}
          >
            {[0, 1, 2, 3].map((i) => (
              <Form.Item
                key={i}
                name={["otp", i]}
                rules={[{ required: true, message: "" }]}
                style={{ marginBottom: 0 }}
              >
                <Input
                  maxLength={1}
                  style={{ width: 44, height: 44, textAlign: "center" }}
                />
              </Form.Item>
            ))}
          </div>
        </Form.Item>

        {/* Verify Button */}
        <Form.Item>
          <AuthLayout.AuthButton htmlType="submit">
            Verify OTP
          </AuthLayout.AuthButton>
        </Form.Item>
      </Form>

      {/* Resend Link */}
      <Text
        style={{
          marginTop: 16,
          display: "block",
          textAlign: "center",
        }}
      >
        Didn’t receive the code?{" "}
        <Link to="#" style={{ color: "#ff8a00", fontWeight: 600 }}>
          Resend OTP
        </Link>
      </Text>
    </AuthLayout>
  );
};

export default VerifyOtp;

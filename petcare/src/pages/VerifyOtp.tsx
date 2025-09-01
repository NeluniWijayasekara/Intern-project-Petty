import React from "react";
import { Input, Button, Typography } from "antd";
import { Link } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";

const { Text } = Typography;

const VerifyOtp: React.FC = () => {
  return (
    <AuthLayout title="Petty" subtitle="">
      <Text style={{ display: "block", marginBottom: 16, textAlign: "center" }}>
        Enter the 4-digit OTP sent to your E mail. please check your inbox.
      </Text>

      <div style={{ display: "flex", gap: 8, justifyContent: "center", marginBottom: 24 }}>
        {[1, 2, 3, 4].map((i) => (
          <Input key={i} maxLength={1} style={{ width: 44, height: 44, textAlign: "center" }} />
        ))}
      </div>

      <Button type="primary" block size="large" style={buttonStyle}>
        Verify OTP
      </Button>

      <Text style={{ marginTop: 16, display: "block", textAlign: "center" }}>
        Didn’t receive the code?{" "}
        <Link to="#" style={{ color: "#ff8a00", fontWeight: 600 }}>
          Resend OTP
        </Link>
      </Text>
    </AuthLayout>
  );
};

const buttonStyle = {
  height: 44,
  borderRadius: 12,
  background: "linear-gradient(90deg, #ff8a00 0%, #ffb020 100%)",
  borderColor: "transparent",
  fontWeight: 600,
};

export default VerifyOtp;

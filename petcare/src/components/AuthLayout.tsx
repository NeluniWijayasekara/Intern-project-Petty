import React from "react";
import { Typography, Button } from "antd";
import type { ButtonProps } from "antd";
import paw from "../assets/paw.png";

const { Title, Text } = Typography;

type Props = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

const AuthLayout: React.FC<Props> & { AuthButton: React.FC<ButtonProps> } = ({title,subtitle,children,}) => {  
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
      <Title level={3} style={{ fontFamily: "cursive", marginBottom: 4, lineHeight: 1 }}>
        Petty
      </Title>
      {subtitle && <Text style={{ marginBottom: 8 }}>{subtitle}</Text>}

      {/* logo */}
      <img
        src={paw}
        alt="paw"
        style={{ width: 74, height: 74, objectFit: "contain", marginBottom: 16 }}
      />

      {/* form or content */}
      <div style={{ width: 300, maxWidth: "90vw" }}>{children}</div>
    </div>
  );
};

// 🔥 Reusable styled button (use across login/signup/forgot)
AuthLayout.AuthButton = (props) => (
  <Button
    {...props}
    type="primary"
    size="large"
    block
    style={{
      height: 44,
      borderRadius: 12,
      background: "linear-gradient(90deg, #ff8a00 0%, #ffb020 100%)",
      borderColor: "transparent",
      fontWeight: 600,
      ...props.style,
    }}
  />
);
export default AuthLayout;

import React from "react";
import { Typography } from "antd";
import paw from "../assets/paw.png";

const { Title, Text } = Typography;

type Props = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

const AuthLayout: React.FC<Props> = ({ title, subtitle, children }) => {
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

export default AuthLayout;

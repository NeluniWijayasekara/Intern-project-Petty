import React from "react";
import { Layout } from "antd";

const { Footer: AntFooter } = Layout;

const Footer: React.FC = () => {
  return (
    <AntFooter style={{ textAlign: "center" }}>
      © {new Date().getFullYear()} PetCare. All Rights Reserved.
    </AntFooter>
  );
};

export default Footer;

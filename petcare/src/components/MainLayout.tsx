import React from "react";
import { Layout } from "antd";
import NavBar from "./NavBar";
import Footer from "./Footer";

const { Content } = Layout;

type Props = {
  children: React.ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <NavBar />
      <Content style={{ padding: "20px" }}>
        {children}
      </Content>
      <Footer />
    </Layout>
  );
};

export default MainLayout;

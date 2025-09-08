import React from "react";
import { Layout } from "antd";
import NavBar from "./NavBar";
import Footer from "./Footer"; 

const { Content } = Layout;

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <NavBar />
      <Layout>
        <Content style={{ margin: "16px", background: "#f5f7fa", padding: 20 }}>
          {children}
        </Content>
        <Footer />  
      </Layout>
    </Layout>
  );
};

export default MainLayout;

import React from "react";
import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  UserOutlined,
  FileSearchOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ToolOutlined,
  ExclamationCircleOutlined,
  SettingOutlined,
  SafetyCertificateOutlined,
  BarChartOutlined,
} from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";

const { Sider } = Layout;

const NavBar: React.FC = () => {
  const location = useLocation();

  return (
    <Sider theme="dark" width={220}>
      <div
        style={{
          color: "white",
          fontWeight: "bold",
          fontSize: 18,
          padding: "16px",
        }}
      >
        Super Admin Panel
      </div>
      <Menu
        mode="inline"
        theme="dark"
        selectedKeys={[location.pathname]}
        items={[
          { key: "/home", icon: <DashboardOutlined />, label: <Link to="/home">Dashboard</Link> },
          { key: "/users", icon: <UserOutlined />, label: <Link to="/users">Users</Link> },
          { key: "/insurance-claims", icon: <FileSearchOutlined />, label: <Link to="/insurance-claims">Insurance Claims</Link> },
          { key: "/marketplace-listings", icon: <AppstoreOutlined />, label: <Link to="/marketplace-listings">Marketplace Listings</Link> },
          { key: "/vets-providers", icon: <TeamOutlined />, label: <Link to="/vets-providers">Vets & Providers</Link> },
          { key: "/services", icon: <ToolOutlined />, label: <Link to="/services">Services</Link> },
          { key: "/fraud-reports", icon: <ExclamationCircleOutlined />, label: <Link to="/fraud-reports">Fraud Reports</Link> },
          { key: "/admin-management", icon: <SettingOutlined />, label: <Link to="/admin-management">Admin Management</Link> },
          { key: "/fraud-rules", icon: <SafetyCertificateOutlined />, label: <Link to="/fraud-rules">Fraud Rules</Link> },
          { key: "/logs-analytics", icon: <BarChartOutlined />, label: <Link to="/logs-analytics">Logs & Analytics</Link> },
        ]}
      />
    </Sider>
  );
};

export default NavBar;

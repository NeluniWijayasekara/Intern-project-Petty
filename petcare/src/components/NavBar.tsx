import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";

const { Header } = Layout;

const NavBar: React.FC = () => {
  return (
    <Header style={{ display: "flex", alignItems: "center" }}>
      <div className="logo" style={{ color: "white", fontSize: 20, fontWeight: "bold", marginRight: 20 }}>
        PetCare Admin
      </div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["dashboard"]}>
        <Menu.Item key="dashboard">
          <Link to="/">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="users">
          <Link to="/users">Users</Link>
        </Menu.Item>
        <Menu.Item key="pets">
          <Link to="/pets">Pets</Link>
        </Menu.Item>
        <Menu.Item key="appointments">
          <Link to="/appointments">Appointments</Link>
        </Menu.Item>
        <Menu.Item key="profile">
          <Link to="/profile">Profile</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default NavBar;

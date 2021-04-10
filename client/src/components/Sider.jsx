import React, { useState } from "react";

import { Layout, Menu, Breadcrumb } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  StarOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const SidePanel = () => {
  const temp = [
    "Action",
    "Comedy",
    "Drama",
    "Horror",
    "Fantasy",
    "Mystery",
    "Romance",
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        breakpoint="lg"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
        style={{
          display: "flex",
          alignSelf: "center",
          overflow: "auto",
          height: "100vh",
          position: "relative",
          left: 0,
          backgroundColor: "#141414",
        }}
        width="200"
      >
        <Menu
          /* theme="dark" */ mode="inline"
          style={{
            borderColor: "silver",
            paddingTop: 110,
            position: "absolute",
            height: "100vh",
          }}
        >
          <SubMenu key="sub1" icon={<UserOutlined />} title="User" >
            <Menu.Item key="1">Profile</Menu.Item>
            <Menu.Item key="2">Favorites</Menu.Item>
            <Menu.Item key="3" danger>
              Logout
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<TeamOutlined />} title="Genre">
            {temp.map((movie, i) => (
              <Menu.Item key={i}>{movie}</Menu.Item>
            ))}
          </SubMenu>
          <Menu.Item key="10" icon={<StarOutlined />}>
            Top 10
          </Menu.Item>
        </Menu>
      </Sider>
    </Layout>
  );
};

export default SidePanel;

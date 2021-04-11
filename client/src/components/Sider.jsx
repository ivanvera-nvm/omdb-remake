import React from "react";

import { Layout, Menu } from "antd";
import { StarOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";

import Grid from "../components/Grid";
import Copyright from "./Copyright";

const { Header, Content, Sider } = Layout;
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
      /*   onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }} */
        style={{
          display: "flex",
          overflow: "auto",
          height: "200vh",
          position: "relative",
          left: 0,
          backgroundColor: "#141414",
        }}
        width="200"
      >
        <Menu
          mode="inline"
          style={{
            borderColor: "silver",
            paddingTop: 110,
            position: "absolute",
            height: "200vh",
          }}
        >
          <SubMenu key="sub1" icon={<UserOutlined />} title="User">
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

      <Layout style={{paddingLeft: 10}}>
        <Header
          className="site-layout-sub-header-background"
          style={{ padding: 0 }}
        />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Grid />
          </div>
        </Content>
        <Copyright />
      </Layout>
    </Layout>
  );
};

export default SidePanel;

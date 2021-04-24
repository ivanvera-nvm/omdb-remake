import React from "react";

import { Layout, Menu } from "antd";
import { StarOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";

import Grid from "../components/Grid";
import Copyright from "./Copyright";

import { clearUser, fetchMe } from "../state/users";
import { useDispatch, useSelector } from "react-redux";

import Profile from "../components/Profile";
import Favorites from "../components/Favorites";

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

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user).user;

  const logout = () => {
    localStorage.removeItem("token");
    dispatch(clearUser());
    dispatch(fetchMe());
    alert("logout!");
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        breakpoint="lg"
        style={{
          display: "flex",
          overflow: "auto",
          height: "360vh",
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
            height: "360vh",
          }}
        >
          {user ? (
            <SubMenu
              key="sub1"
              icon={<UserOutlined />}
              title={`${user.name} ${user.lastName}`}
            >
              <Menu.Item key="1">
                <Profile />
              </Menu.Item>
              <Menu.Item key="2">
                <Favorites />
              </Menu.Item>
              <Menu.Item key="3" danger onClick={logout}>
                Logout
              </Menu.Item>
            </SubMenu>
          ) : (
            <SubMenu key="sub0" icon={<UserOutlined />} title="User"></SubMenu>
          )}

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

      <Layout style={{ paddingLeft: 10 }}>
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

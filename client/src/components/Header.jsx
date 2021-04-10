import React from "react";

import { Layout, Menu, Breadcrumb } from "antd";

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const Appbar = () => {
  const temp = ["Sign Up", "Home", "Sign In"];

  return (
    <div>
        
      <Header
        className="header"
        style={{
          height: 90,
          backgroundColor: "#141414",
          position: "fixed",
          zIndex: 1,
          width: "100%",
          padding: 0,
        }}
      >
          
        <Menu
          mode="horizontal"
          style={{
            display: "flex",
            justifyContent: "center",
            padding: 12,
            margin: 0,
            borderColor: "silver",
            borderRadius: 20,
          }}
        >
          {temp.map((e, i) => (
            <Menu.Item key={i}>{e}</Menu.Item>
          ))}
        </Menu>
        
      </Header>
    </div>
  );
};

export default Appbar;

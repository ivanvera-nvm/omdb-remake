import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import SignIn from "./SingIn";
import SignUp from "./SignUp";

const { Header } = Layout;

const Appbar = () => {
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
          <Menu.Item key="1">
            <SignIn />
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/" />
            Home
          </Menu.Item>
          <Menu.Item key="3">
            <SignUp />
          </Menu.Item>
        </Menu>
      </Header>
    </div>
  );
};

export default Appbar;

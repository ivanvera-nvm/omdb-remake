import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import {
  Layout,
  Menu,
  Drawer,
  Avatar,
  Typography,
  Row,
  Col,
  message,
  Button,
  Radio,
  Space,
} from "antd";

import { List, Divider } from "antd";
import { StarOutlined } from "@ant-design/icons";

const { Header, Content } = Layout;
const { Title } = Typography;

const Profile = ({ bool }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user).user;

  console.log("User ====>", user);

  const [state, setState] = useState({ visible: false, placement: "left" });

  const showDrawer = () => {
    setState({
      visible: true,
    });
  };

  const onClose = () => {
    setState({
      visible: false,
    });
  };

  const removeFav = (imdbID) => {
    axios
      .delete(`http://localhost:8000/api/users/${user.id}/favs`, {
        data: { imdbID },
      })
      .then((res) => {
        return res.data;
      })
      .then(() => {
        message.warning("Movie deleted !");
      })

      .catch((err) => message.error(err));
  };

  const DescriptionItem = ({ title, content }) => (
    <div className="site-description-item-profile-wrapper">
      <p className="site-description-item-profile-p-label">{title}:</p>
      {content}
    </div>
  );

  const { placement, visible } = state;

  return (
    <>
      <Button
        onClick={showDrawer}
        style={{
          borderColor: "#1d1d1d",
          marginLeft: 34,
          marginTop: 15,
          marginBottom: 2,
        }}
      >
        Profile
      </Button>
      <Drawer
        title="Basic Drawer"
        placement={placement}
        closable={false}
        onClose={onClose}
        visible={visible}
        key={placement}
        width="660"
      >
        <p
          className="site-description-item-profile-p"
          style={{ marginBottom: 24 }}
        >
          {user && user.name}
        </p>
        <p className="site-description-item-profile-p">Personal</p>
        <Row>
          <Col span={12}>
            <DescriptionItem
              title="Full Name"
              content={`${user.name} ${user.lastName}`}
            />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Account" content={user.email} />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <DescriptionItem title="City" content="Buenos Aires" />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Country" content="Argentina 🇦🇷" />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <DescriptionItem title="Birthday" content="-" />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Website" content="-" />
          </Col>
        </Row>

        <Divider />
        <p className="site-description-item-profile-p">Contacts</p>
        <Row>
          <Col span={12}>
            <DescriptionItem title="Phone Number" content="+54 ---- ----" />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <DescriptionItem
              title="Github"
              content={
                <a href="http://github.com/ivanvera-nvm">
                  github.com/ivanvera-nvm
                </a>
              }
            />
          </Col>
        </Row>
      </Drawer>
    </>
  );
};

export default Profile;

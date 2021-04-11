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
  const user = useSelector((state) => state.user);

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
      .delete(`http://localhost:3080/api/users/${user.id}/favs`, {
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

  const { placement, visible } = state;

  return (
    <>
       <Button onClick={showDrawer} style={{borderColor: '#1d1d1d', marginLeft: 34, marginTop: 15, marginBottom: 2}}>Profile</Button>
      <Drawer
        title="Basic Drawer"
        placement={placement}
        closable={false}
        onClose={onClose}
        visible={visible}
        key={placement}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

export default Profile;

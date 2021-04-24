import React, { useState } from "react";
import { useSelector } from "react-redux";

import { Drawer, Row, Col, Button, Divider } from "antd";

const Profile = () => {
  const user = useSelector((state) => state.user).user;
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
        }}
      >
        Profile
      </Button>
      <Drawer
        title="User info"
        placement={placement}
        closable={false}
        onClose={onClose}
        visible={visible}
        key={placement}
        width="500"
      >
        <Row>
          <Col span={12}>
            <DescriptionItem
              title="Full Name"
              content={`${user.name} ${user.lastName}`}
            />
            <Divider />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Account" content={user.email} />
            <Divider />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <DescriptionItem title="City" content="Buenos Aires" />
            <Divider />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Country" content="Argentina 🇦🇷" />
            <Divider />
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
        <p className="site-description-item-profile-p">Contact</p>
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

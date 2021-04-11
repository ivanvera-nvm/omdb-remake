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
  Popover,
} from "antd";

import { StarOutlined } from "@ant-design/icons";

const { Header, Content } = Layout;
const { Title } = Typography;

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const [left, setLeft] = useState({ visible: false });
  const [rigth, setRigth] = useState({ visible: false });
  const [bottom, setBottom] = useState({ visible: false });

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

  const showOthersFav = (u) => {};

  const onClose = () => {
    setLeft({
      visible: false,
    });
    setRigth({
      visible: false,
    });
    setBottom({
      visible: false,
    });
  };

  ///left
  const showLeft = () => {
    setLeft({
      visible: true,
    });
  };

  //rigth
  const showRight = () => {
    setRigth({
      visible: true,
    });
  };

  ///bottom
  const showBottom = () => {
    setBottom({
      visible: true,
    });
  };

  return (
    <>
      <div>
        <Layout>
          <Header
            className="header"
            style={{ height: "8rem", verticalAlign: "text-bottom" }}
          >
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["2"]}
              style={{
                fontSize: "2rem",
                textAlign: "center",
                verticalAlign: "text-bottom",
                margin: "0 auto",
                padding: "30px",
              }}
            >
              <Menu.Item key="1" onClick={showLeft}>
                User details
              </Menu.Item>

              <Menu.Item key="2" onClick={showBottom}>
                FAVORITES
              </Menu.Item>
              <Menu.Item key="3" onClick={showRight}>
                Other users
              </Menu.Item>
            </Menu>
          </Header>

          <Layout>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
                height: "100%",
              }}
            >
              <div className="site-drawer-render-in-current-wrapper">
                <Drawer
                  title={`${user.name} ${user.lastName}`}
                  placement="left"
                  closable={true}
                  onClose={onClose}
                  visible={left.visible}
                  getContainer={false}
                  style={{ position: "absolute" }}
                >
                  <Avatar
                    size={{
                      xs: 24,
                      sm: 32,
                      md: 40,
                      lg: 64,
                      xl: 80,
                      xxl: 100,
                    }}
                    src="https://img.favpng.com/5/19/17/cat-computer-icons-user-profile-png-favpng-ssKgUPLWM03x0SY85TD5LsQ5E.jpg"
                  />

                  <div>
                    <Title level={2}>{`UserID: ${user.id}`}</Title>
                    <Title level={5}>{user.email}</Title>
                    <p>User info ....</p>
                  </div>
                </Drawer>
                <Title level={5}>
                  {"You can swap favorites views between users =======>"}
                </Title>
                <Drawer
                  title={"Showing users!"}
                  placement="right"
                  closable={true}
                  onClose={onClose}
                  visible={rigth.visible}
                  getContainer={false}
                  style={{ position: "absolute" }}
                >
                  <div>
                    {["JUAN", "MARTIN", "IVAN"].map((u) => {
                      return (
                        <div>
                          <Avatar
                            icon={<StarOutlined spin={true} />}
                            onClick={() => showOthersFav(u.id)}
                          ></Avatar>
                          <Title level={5}>{"Swap favorites"}</Title>
                          <p>{u.name}</p>
                          <p>{u.lastname}</p>
                          <p>{u.email}</p>
                        </div>
                      );
                    })}
                  </div>
                </Drawer>
                <Drawer
                  title={`${user.name} ${user.lastName} Favorites`}
                  placement="bottom"
                  closable={true}
                  onClose={onClose}
                  visible={bottom.visible}
                  getContainer={false}
                  style={{ position: "absolute" }}
                  height={700}
                >
                  <div>
                    <Row>
                      {["S"].map((movie) => {
                        return (
                          <Col span={8}>
                            <img src={movie.Poster} alt="" />

                            <Title level={5}>
                              {movie.Title}
                              <div>
                                <Button
                                  onClick={() => removeFav(movie.imdbID)}
                                  type="primary"
                                  danger
                                  size="small"
                                >
                                  Remove from favorites
                                </Button>
                              </div>
                            </Title>
                          </Col>
                        );
                      })}
                    </Row>
                    <div></div>
                  </div>
                </Drawer>
              </div>
            </Content>
          </Layout>
        </Layout>
      </div>
    </>
  );
};

export default Profile;

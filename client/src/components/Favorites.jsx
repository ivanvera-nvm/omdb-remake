import React, { useState, useEffect } from "react";
import { Drawer, Button, Row, Col, Typography, message } from "antd";

import { useSelector, useDispatch } from "react-redux";

import { getFavs, removeFavs } from "../state/favorites";

const { Title } = Typography;
const Favorites = () => {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user).user;

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const favorites = useSelector((state) => state.favs).favs;

  useEffect(() => {
    dispatch(getFavs(user.id));
  }, []);

  console.log("---<", favorites, "====");

  const handleClick = (imdbID, userId) => {
    const data = { imdbID, userId };

    dispatch(removeFavs(data))
      .then((res) => message.success("Movie deleted from favorites"))
      .then(res=> dispatch(getFavs(userId)))
      .catch((err) => message.error("An error has occurred"));
  };

  return (
    <>
      <Button
        onClick={showDrawer}
        style={{
          borderColor: "#1d1d1d",
        }}
      >
        Favorites
      </Button>
      <Drawer
        title="Basic Drawer"
        placement="bottom"
        closable={false}
        onClose={onClose}
        visible={visible}
        height="600"
        style={{ textAlign: "center" }}
      >
        <Row>
          {favorites &&
            favorites.map((movie) => {
              return (
                <Col xs={6} xl={4} sm={6} lg={4} md={4} style={{ margin: 7 }}>
                  <img
                    src={movie.Poster}
                    alt="posters"
                    style={{ width: 100, marginBottom: 10, borderRadius: 10 }}
                  />
                  <Title level={5}>
                    {movie.Title}
                    <div>
                      <Button
                        onClick={() => handleClick(movie.imdbID, movie.owner)}
                        type="primary"
                        danger
                        style={{ width: 90 }}
                      >
                        Remove
                      </Button>
                    </div>
                  </Title>
                </Col>
              );
            })}
        </Row>
      </Drawer>
    </>
  );
};

export default Favorites;

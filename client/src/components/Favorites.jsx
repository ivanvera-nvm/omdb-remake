import React, { useState, useEffect } from "react";
import { Drawer, Button, Row, Col, Typography, Spin, message } from "antd";

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

  const handleClick = (imdbID, userId) => {
    const data = { imdbID, userId };

    dispatch(removeFavs(data))
      .then((res) => message.success("Movie deleted from favorites"))
      .then((res) => dispatch(getFavs(userId)))
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
        title="Favorites"
        placement="bottom"
        closable={false}
        onClose={onClose}
        visible={visible}
        height="600"
        style={{ textAlign: "center" }}
      >
        <Row
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          {!favorites ? (
            <Spin spinning="true" size="large" />
          ) : (
            favorites.map((movie) => {
              return (
                <Col
                  xs={10}
                  sm={6}
                  md={6}
                  lg={3}
                  xl={3}
                  style={{ margin: 7 }}
                  key={movie.id}
                >
                  <img
                    src={movie.Poster}
                    alt="posters"
                    style={{ width: 100, marginBottom: 15, borderRadius: 10 }}
                    key={movie.id}
                  />
                  <Title level={5}>
                    {movie.Title}
                    <div>
                      <Button
                        onClick={() => handleClick(movie.imdbID, movie.owner)}
                        type="primary"
                        danger
                        style={{ width: 90, marginTop: 20 }}
                        key={movie.imdbID}
                      >
                        Remove
                      </Button>
                    </div>
                  </Title>
                </Col>
              );
            })
          )}
        </Row>
      </Drawer>
    </>
  );
};

export default Favorites;

import React, { useState, useEffect } from "react";
import { Row, Col, Divider, Input, Card, message } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { HeartFilled } from "@ant-design/icons";
import { findMovies } from "../state/movies";
import axios from "axios";
import config from "../utils/config";

const { Meta } = Card;
const { Search } = Input;

const Grid = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);

  const [loading, setLoading] = useState(false);

  const [input, setInput] = useState({});

  const user = useSelector((state) => state.user).user;

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setInput({ ...input, [key]: value });
  };

  const handleClick = (movie) => {
    let { Title, Year, Poster, Type, imdbID } = movie;
    if (user) {
      axios
        .post(`http://localhost:8000/api/fav/user/${user.id}`, {
          Title,
          Year,
          Poster,
          Type,
          imdbID,
          owner: user.id,
        })
        .then((res) => {
          console.log(res.data);
          return res.data;
        })
        .then(() => message.success("Added to favorites"))
        .catch((e) => console.log(e));
    } else {
      return message.error("You need to be log");
    }
  };

  useEffect(() => {
    dispatch(findMovies(input.search || "the thing"));
  }, [input]);

  return (
    <div style={{ textAlign: "center" }}>
      <Search
        placeholder="Start searching movies"
        loading={loading}
        onChange={handleChange}
        name="search"
        style={{ minWidth: "50%", width: "60%" }}
      />
      <Divider orientation="left">Top</Divider>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {movies.Search &&
          movies.Search.map((movie, i) => (
            <Col
              xs={24}
              xl={8}
              sm={12}
              lg={32}
              id={i}
              style={{ display: "flex", justifyContent: "space-between" }}
              itemID={i}
            >
              <Card
                id={i}
                title="Add to favorites"
                extra={
                  <HeartFilled
                    onClick={() => handleClick(movie)}
                    style={{
                      fontSize: "1.7rem",
                      color: "#eb2f96",
                    }}
                  />
                }
                style={{
                  width: 340,
                  position: "relative",
                  marginTop: 50,
                  padding: "auto",
                  borderRadius: 5,
                  textAlign: "center",
                  margin: 10,
                }}
                onMouseOver
                cover={
                  <img
                    alt="example"
                    src={movie.Poster}
                    style={{
                      width: 340,
                      height: 490,
                      margin: "auto",
                      padding: "2px",
                    }}
                  />
                }
              >
                <Meta title={movie.Title} description={movie.Year} />
              </Card>
            </Col>
          ))}
      </Row>
      <Divider orientation="left">Floor</Divider>
    </div>
  );
};

export default Grid;

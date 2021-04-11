import React, {useState, useEffect} from "react";
import { Row, Col, Divider, Input, Card } from "antd";
import { useSelector, useDispatch } from "react-redux";

import {findMovies} from '../state/movies'

const { Meta } = Card;
const { Search } = Input;

const Grid = () => {
 
  const dispatch = useDispatch()
  const movies = useSelector((state) => state.movies.movies);
  const [input, setInput] = useState({})

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value
    setInput({ ...input, [key]: value });
  };
  
  useEffect(() => {
    dispatch(findMovies(input.search || 'the thing'));
  }, [input]);
 
  console.log(input)

  return (
    <div>
      <Search placeholder="input search loading default" loading onChange={handleChange} name='search'/>
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
                title={movie.Title}
                hoverable
                style={{
                  width: 340,
                  position: "relative",
                  marginTop: 50,
                  padding: "auto",
                  borderColor: "",
                  borderRadius: 5,
                  textAlign: "center",
                  margin: 10,
                }}
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
                <Meta title="Add to favorites" description={movie.Year} />
              </Card>
            </Col>
          ))}
      </Row>
      <Divider orientation="left">Floor</Divider>
    </div>
  );
};

export default Grid;

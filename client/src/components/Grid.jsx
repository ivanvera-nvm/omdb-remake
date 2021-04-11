import React from "react";

import { Row, Col, Divider } from "antd";
import { Card } from "antd";

import { useDispatch, useSelector } from "react-redux";

const { Meta } = Card;



const Grid = () => {

  const dispatch = useDispatch;
  const movies = useSelector((state) => state.movies.movies);


  return (
    <div>
      <Divider orientation="left">Top</Divider>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {movies.Search && movies.Search.map((movie, i) => (
          <Col
            xs={24}
            xl={8}
            sm={12}
            lg={32}
            
            id={i}
            style={{ display: "flex", justifyContent: "space-between" }}
            itemID={i}
          >
            <Card id={i}
              title={movie.Title}
              hoverable
              style={{ width: 320, position: "relative", marginTop: 50, padding: "auto",}}
              cover={
                <img
                  alt="example"
                  src={movie.Poster}
                  style={{
                    width: 320,
                    height: 490,
                    margin: "auto",
                    padding: "auto",
                    borderRadius: 5,
                    border: "3px opacity black",
                  }}
                />
              }
            >
              <Meta 
                title='Add to favorites'
                description={movie.Year}
              />
            </Card>
          </Col>
        ))}
      </Row>
      <Divider orientation="left">Floor</Divider>
    </div>
  );
};

export default Grid;

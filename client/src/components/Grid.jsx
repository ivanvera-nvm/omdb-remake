import React from "react";

import { Row, Col, Divider } from "antd";
import { Card } from "antd";

const { Meta } = Card;

const movies = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Grid = () => {
  return (
    <div>
      <Divider orientation="left">Top</Divider>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {movies.map((movie, i) => (
          <Col
            xs={24}
            xl={8}
            sm={12}
            lg={32}
            id={i}
            style={{ display: "flex", justifyContent: "space-around" }}
          >
            <Card
              title="Movie Name"
              hoverable
              style={{ width: 260, position: "relative", marginTop: 50 }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
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

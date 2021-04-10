import { Layout } from "antd";

const {Footer} = Layout

const Copyright = () => {
  return (
    <div>
      <Footer style={{ textAlign: "center" }}>
        OMDB ©2021 Created by Ivan Vera
      </Footer>
    </div>
  );
};

export default Copyright;

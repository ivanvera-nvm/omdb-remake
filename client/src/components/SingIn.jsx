import React, { useState } from "react";
import { Modal, Button, Input, Form, Layout } from "antd";

import validateMessages from "../utils/validateMsgAntd";

import { fetchMe, loginRequest } from "../state/users";
import { useDispatch } from "react-redux";

const SingIn = () => {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  const onFinish = (values) => {
    dispatch(loginRequest(values)).then((res) => dispatch(fetchMe()));
  };

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  return (
    <div>
      <div>
        <Button type="secondary" onClick={() => setVisible(true)}>
          Sign In
        </Button>
        <Modal
          title="Sign In"
          centered
          visible={visible}
          onOk={() => setVisible(false)}
          onCancel={() => setVisible(false)}
          width={500}
        >
          <Form
            style={{ marginRight: 100 }}
            {...layout}
            name="nest-messages"
            onFinish={onFinish}
            validateMessages={validateMessages}
          >
            <Form.Item
              name={["user", "email"]}
              label="Email"
              rules={[
                {
                  type: "email",
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={["user", "password"]}
              rules={[
                {
                  required: true,
                },
              ]}
              label="Password"
            >
              <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </div>
  );
};

export default SingIn;

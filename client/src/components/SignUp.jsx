import React, { useState } from "react";
import { Modal, Button, Form, Input } from "antd";
import { registerRequest } from "../state/users";
import { useDispatch } from "react-redux";
import validateMessges from "../utils/validateMsgAntd";

const SignUp = () => {
  const validateMessages = validateMessges;
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  const handleSubmit = (values) => {
    console.log(values);
    dispatch(registerRequest(values));
  };

  return (
    <div>
      <Button type="secondary" onClick={() => setVisible(true)}>
        Sign Up
      </Button>
      <Modal
        title="Sign Up"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={600}
      >
        <Form
          style={{ marginRight: 100 }}
          {...layout}
          name="nest-messages"
          onFinish={handleSubmit}
          validateMessages={validateMessages}
        >
          <Form.Item
            name={["user", "name"]}
            label="Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "lastName"]}
            label="Last name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
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
  );
};

export default SignUp;

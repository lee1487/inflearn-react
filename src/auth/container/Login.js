import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Form, Button, Col, Input, Row, Typography } from "antd";
import { Link } from "react-router-dom";
import AuthLayout from "../component/AuthLayout";
import { useDispatch } from "react-redux";
import { actions } from "../state";
import useBlockLoginUser from "../hook/useBlockLoginUser";

const Login = () => {
  useBlockLoginUser();
  const dispatch = useDispatch();
  function onFinish({ username, password }) {
    dispatch(actions.fetchLogin(username, password));
  }
  return (
    <AuthLayout onFinish={onFinish}>
      <Form.Item
        name="username"
        rules={[{ required: true, message: "Please input your Username!" }]}
      >
        <Input prefix={<UserOutlined />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your Password!" }]}
      >
        <Input
          prefix={<LockOutlined />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
          Log in
        </Button>
        Or <Link to="/signup">registor now!</Link>
      </Form.Item>
    </AuthLayout>
  );
};

export default Login;

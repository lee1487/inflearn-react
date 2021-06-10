import React from "react";
import { Form, Col, Row, Typography } from "antd";

/**
 *
 * @param {object} param
 * @param {import('react').ReactNode} param.children
 * @param {()=> void} param.onFinish
 *
 */
const AuthLayout = ({ children, onFinish }) => {
  return (
    <>
      <Row justify="center" style={{ marginTop: 100 }}>
        <Col>
          <Typography.Text style={{ fontFamily: "sans-serif" }}>
            찾 아 야 한 다.
          </Typography.Text>
        </Col>
      </Row>
      <Row justify="center">
        <Col>
          <Form
            initialValues={{ remember: true }}
            style={{ width: 300, marginTop: 50 }}
            onFinish={onFinish}
          >
            {children}
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default AuthLayout;

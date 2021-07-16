import { Button, Form, Input, Select } from "antd";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const styles = {
    borderRadius: "0.375rem !important",
    height: "36px !important",
    fontSize: "14px",
  };

  const { Option } = Select;

  const onFinish = (data) => {};

  const onFinishFailed = (dataFailed) => {};

  return (
    <div className="sign-up-form">
      <div className="color"></div>
      <div className="color"></div>
      <div className="color"></div>
      <div className="box">
        <div className="square-login" data-index={1}></div>
        <div className="square-login" data-index={2}></div>
        <div className="square-login" data-index={3}></div>
        <div className="square-login" data-index={4}></div>
        <div className="square-login" data-index={5}></div>
        <div className="form-container">
          <Form
            name="basic"
            labelCol={{ offset: 1, span: 22 }}
            wrapperCol={{ offset: 1, span: 22 }}
            layout="vertical"
            initialValues={{ remember: true }}
            onFinish={handleSubmit(onFinish)}
            onFinishFailed={onFinishFailed}
            style={{ width: "600px" }}
          >
            <Form.Item>
              <div className="form-title">
                <p>mona media</p>
                <p>Mona PMS - Mona Project Manament System</p>
              </div>
            </Form.Item>

            <Form.Item
              label="Tên tài khoản"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Nhập tên tài khoản!",
                },
                {
                  min: 8,
                  message: "Tên tài khoản phải có ít nhất 8 ký tự!",
                },
                {
                  whitespace: true,
                  message: "Tên đăng nhập không được có khoản trắng",
                },
              ]}
            >
              <Input
                style={styles}
                size="large"
                name="oldpassword"
                {...register("oldpassword")}
              />
            </Form.Item>

            <Form.Item
              label="Mật khẩu"
              name="newpassword"
              rules={[
                { required: true, message: "Nhập mật khẩu mới của bạn!" },
                {
                  min: 8,
                  message: "Mật khẩu phải có ít nhất 8 ký tự!",
                },
              ]}
              hasFeedback
            >
              <Input.Password
                style={styles}
                size="large"
                name="newpassword"
                {...register("newpassword")}
              />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 10, span: 4 }}>
              <Button
                style={{ width: "100%" }}
                type="primary"
                htmlType="submit"
              >
                Đăng nhập
              </Button>
            </Form.Item>

            <Form.Item>
              <p className="forget">
                <Link href="/">Quên mật khẩu?</Link>
              </p>
              <p className="forget">
                Chưa có tài khoản?
                <Link href="/"> Đăng ký</Link>
              </p>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

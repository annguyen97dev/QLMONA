import React, { useRef, useState } from "react";
import LayoutBase from "~/components/LayoutBase";
import { Form, Input, Button, Checkbox } from "antd";
import { useForm } from "react-hook-form";

function ChangePassword() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const password = useRef({});
  password.current = watch("newpassword");

  const onFinish = (values: any) => {};

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  const styles = {
    borderRadius: "0.375rem !important",
    height: "36px !important",
    fontSize: "14px",
  };

  return (
    <div className="change-password-form">
      <div className="box">
        <h4>Thay đổi mật khẩu</h4>
        <Form
          name="basic"
          labelCol={{ offset: 1, span: 22 }}
          wrapperCol={{ offset: 1, span: 22 }}
          style={{ width: "600px", height: "100%" }}
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={handleSubmit(onFinish)}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Mật khẩu cũ"
            name="oldpassword"
            rules={[
              {
                required: true,
                message: "Nhập mật khẩu cũ của bạn!",
              },
              {
                min: 8,
                message: "Mật khẩu phải có ít nhất 8 ký tự!",
              },
            ]}
          >
            <Input.Password
              style={styles}
              size="large"
              name="oldpassword"
              {...register("oldpassword")}
            />
          </Form.Item>

          <Form.Item
            label="Mật khẩu mới"
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

          <Form.Item
            label="Xác nhận lại mật khẩu"
            name="confirmpassword"
            dependencies={["newpassword"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Nhập mật khẩu xác nhận của bạn!",
              },
              {
                min: 8,
                message: "Mật khẩu phải có ít nhất 8 ký tự!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  console.log(value);
                  if (!value || getFieldValue("newpassword") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("Mật khẩu xác nhận của bạn không đúng!")
                  );
                },
              }),
            ]}
          >
            <Input.Password
              style={styles}
              size="large"
              name="confirmpassword"
              {...register("confirmpassword")}
            />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 9, span: 6 }}>
            <Button type="primary" htmlType="submit">
              Cập nhật mật khẩu
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

ChangePassword.layout = LayoutBase;
export default ChangePassword;

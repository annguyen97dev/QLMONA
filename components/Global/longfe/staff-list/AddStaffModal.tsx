import { EditOutlined } from "@ant-design/icons";
import { Form, Input, Modal, Select } from "antd";
import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";

function AddStaffModal({ typeButton }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const style = {
    borderRadius: "30px",
  };
  const { Option } = Select;
  const { TextArea } = Input;
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // Validate regre
  const schema = Yup.object().shape({
    status: Yup.string().required("Status is required"),
    phoneNumber: Yup.string()
      .required("Phone number is required")
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Phone number is not valid"
      ),
    fullname: Yup.string().required("Full name is required"),
    role: Yup.string().required("Role is required"),
    account: Yup.string().required("Account is required"),
    email: Yup.string()
      .required("Email is required")
      .matches(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Email is not valid"
      ),
  });

  const formOptions = { resolver: yupResolver(schema) };
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm(formOptions);

  const onSubmit = () => {};

  return (
    <>
      {typeButton === "add-button" ? (
        <button className="btn btn-primary" onClick={showModal}>
          Thêm nhân viên
        </button>
      ) : (
        <EditOutlined
          onClick={showModal}
          style={{
            fontSize: "20px",
            color: "#08c",
            marginLeft: "10px",
            cursor: "pointer",
          }}
        />
      )}

      <Modal
        title="Thêm nhân viên"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1000}
        footer={
          <>
            <button className="btn btn-primary" onClick={handleOk}>
              {typeButton === "add-button" ? "Thêm" : "Cập nhật"}
            </button>
            <button
              className="btn btn-light"
              style={{ marginLeft: "10px" }}
              onClick={handleCancel}
            >
              Đóng
            </button>
          </>
        }
      >
        <div className="box-form">
          <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-md-3 col-12">
                <Form.Item label="Trạng thái:">
                  <Select
                    className="style-input"
                    defaultValue="Chọn trạng thái"
                    style={style}
                    {...register("status")}
                  >
                    <Option value="Đang hoạt động">Đang hoạt động</Option>
                    <Option value="Ngưng hoạt động">Ngưng hoạt động</Option>
                    <Option value="Tạm khóa">Tạm khóa</Option>
                  </Select>
                  <div className="invalid-message">
                    <p>{errors.status?.message}</p>
                  </div>
                </Form.Item>
              </div>

              <div className="col-md-3 col-12">
                <Form.Item label="Họ tên:">
                  <Input
                    className="style-input"
                    defaultValue="Phương Đặng"
                    placeholder=""
                    {...register("fullName")}
                  />
                  <div className="invalid-message">
                    <p>{errors.fullName?.message}</p>
                  </div>
                </Form.Item>
              </div>

              <div className="col-md-3 col-12">
                <Form.Item label="Ngày sinh:">
                  <Input
                    className="style-input"
                    defaultValue="08-02-2021"
                    placeholder=""
                  />
                </Form.Item>
              </div>

              <div className="col-md-3 col-12">
                <Form.Item label="Số điện thoại">
                  <Input
                    className="style-input"
                    defaultValue="0832141204"
                    placeholder=""
                    {...register("phoneNumber")}
                  />
                  <div className="invalid-message">
                    <p>{errors.phoneNumber?.message}</p>
                  </div>
                </Form.Item>
              </div>
            </div>

            <div className="row">
              <div className="col-md-3 col-12">
                <Form.Item label="Email:">
                  <Input
                    className="style-input"
                    defaultValue="phuongdang11@gmail.com"
                    placeholder=""
                    {...register("email")}
                  />
                  <div className="invalid-message">
                    <p>{errors.email?.message}</p>
                  </div>
                </Form.Item>
              </div>

              <div className="col-md-3 col-12">
                <Form.Item label="Chức vụ:">
                  <Select
                    className="style-input"
                    defaultValue="Chọn chức vụ"
                    style={style}
                    {...register("role")}
                  >
                    <Option value="jack">Dev</Option>
                    <Option value="lucy">PM</Option>
                    <Option value="Yiminghe">Director</Option>
                  </Select>
                  <div className="invalid-message">
                    <p>{errors.role?.message}</p>
                  </div>
                </Form.Item>
              </div>

              <div className="col-md-3 col-12">
                {" "}
                <Form.Item label="Hoa hồng:">
                  <Input
                    className="style-input"
                    defaultValue="300,000"
                    placeholder=""
                  />
                </Form.Item>
              </div>

              <div className="col-md-3 col-12">
                <Form.Item label="Mật khẩu mới:">
                  <Input className="style-input" placeholder="Mật khẩu mới" />
                </Form.Item>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <Form.Item label="Địa chỉ">
                  <TextArea
                    className="style-input"
                    placeholder="..."
                    autoSize={{ minRows: 5, maxRows: 8 }}
                  />
                </Form.Item>
              </div>
            </div>
          </Form>
        </div>
      </Modal>
    </>
  );
}

export default AddStaffModal;

import {
  Avatar,
  Card,
  DatePicker,
  Divider,
  Form,
  Input,
  message,
  Rate,
  Select,
  Upload,
} from "antd";
import ImgCrop from "antd-img-crop";
import React, { useEffect, useState } from "react";
import LayoutBase from "~/components/LayoutBase";
import { useRouter } from "next/router";
import {
  AimOutlined,
  DeploymentUnitOutlined,
  InboxOutlined,
  MailOutlined,
  UserOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import { useForm } from "react-hook-form";
import moment from "moment";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

function Profile() {
  const router = useRouter();
  const { Option } = Select;
  const { Dragger } = Upload;
  const fileList = [];
  const dateFormat = "DD-MM-YYYY";
  const [isSubmit, setIsSubmit] = useState(false);

  // Validate regre
  const schema = Yup.object().shape({
    fullName: Yup.string().required("Full name is required"),
    phoneNumber: Yup.string()
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Phone number is not valid"
      )
      .required("Phone number is required"),
    birdthDay: Yup.string().matches(
      /^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d$/,
      "Day of birdth is not valid"
    ),
    email: Yup.string().matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Email is not valid"
    ),
    newPassword: Yup.string().matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Password is not valid"
    ),
  });

  const formOptions = { resolver: yupResolver(schema) };
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm(formOptions);

  const _onSubmit = (data) => {
    console.log(data);
    setIsSubmit(!isSubmit);
  };

  const handleChangeDate = (date, dateString) => {
    setValue("birdthDay", dateString);
  };

  const handleChangeGentle = (value) => {
    console.log(value);
    setValue("gentle", value);
  };

  const props = {
    name: "file",
    multiple: false,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange(info) {
      const { status } = info.file;
      console.log(info);

      if (status !== "uploading") {
        console.log(info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
        setValue("avatar", info.file);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  return (
    <>
      <div className="row">
        <div className="col-md-3 col-12">
          <Card className="info-profile-left">
            <div className="row">
              <div className="col-12 d-flex align-items-center justify-content-center flex-wrap">
                <Avatar size={64} src={<img src="/images/user.png" />} />
                {/* {path === "teacher-detail" && (
                  <Rate
                    disabled
                    value={4}
                    style={{
                      width: "100%",
                      textAlign: "center",
                      marginTop: "10px",
                    }}
                  />
                )} */}
              </div>
            </div>
            <div className="row pt-3">
              <div className="col-2">
                <UserOutlined />
              </div>
              <div className="col-10  d-flex ">Nguyễn An</div>
            </div>
            <div className="row pt-4">
              <div className="col-2">
                <DeploymentUnitOutlined />
              </div>
              <div className="col-10  d-flex ">Teacher</div>
            </div>
            <div className="row pt-4">
              <div className="col-2">
                <WhatsAppOutlined />
              </div>
              <div className="col-10  d-flex ">0978111222</div>
            </div>
            <div className="row pt-4">
              <div className="col-2">
                <MailOutlined />
              </div>
              <div className="col-10  d-flex ">anhandsome@gmail.com</div>
            </div>
            <div className="row pt-4">
              <div className="col-2">
                <AimOutlined />
              </div>
              <div className="col-10  d-flex ">London, England</div>
            </div>
          </Card>
        </div>
        <div className="col-md-9 col-12">
          <Card className="space-top-card">
            <Form layout="vertical" onFinish={handleSubmit(_onSubmit)}>
              <div className="row d-flex justify-content-center align-items-center">
                <h5>Thông Tin Tài Khoản</h5>

                <Divider></Divider>
              </div>

              <div className="row">
                <div className="col-md-6 col-12">
                  <Form.Item label="Họ và tên">
                    <Input
                      className="style-input"
                      size="large"
                      {...register("fullName")}
                      // addonBefore={<Select />}
                      // addonAfter={<Select />}
                    />
                    <div className="invalid-message">
                      <p>{errors.fullName?.message}</p>
                      {console.log(errors.fullName?.message)}
                    </div>
                  </Form.Item>
                </div>
                <div className="col-md-6 col-12 row pe-0">
                  <div className="col-md-6 col-12 pe-0">
                    <Form.Item label="Giới tính">
                      <Select
                        className="style-input"
                        size="large"
                        defaultValue="Không xác định"
                        {...register("gentle")}
                        onChange={handleChangeGentle}
                      >
                        <option value="Nam">Nam</option>
                        <option value="Nữ">Nữ</option>
                        <option value="Không xác định">Không xác định</option>
                      </Select>
                    </Form.Item>
                  </div>
                  <div className="col-md-6 col-12 pe-0">
                    <Form.Item label="Ngày sinh">
                      <DatePicker
                        size="large"
                        className="w-100 style-input"
                        defaultValue={moment("01-07-2021", "DD-MM-YYYY")}
                        format={dateFormat}
                        {...register("birdthDay")}
                        onChange={() => {
                          handleChangeDate;
                        }}
                      />
                      <div className="invalid-message">
                        <p>{errors.birdthDay?.message}</p>
                        {console.log(errors.birdthDay?.message)}
                      </div>
                    </Form.Item>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-12">
                  <Form.Item label="Địa chỉ email">
                    <Input
                      className="style-input"
                      size="large"
                      defaultValue="vun400@gmail.com"
                      {...register("email")}
                    />
                    <div className="invalid-message">
                      <p>{errors.email?.message}</p>
                      {console.log(errors.email?.message)}
                    </div>
                  </Form.Item>
                </div>
                <div className="col-md-6 col-12">
                  <Form.Item label="Số điện thoại">
                    <Input
                      className="style-input"
                      size="large"
                      defaultValue="0803040235"
                      {...register("phoneNumber")}
                    />
                    <div className="invalid-message">
                      <p>{errors.phoneNumber?.message}</p>
                      {console.log(errors.phoneNumber?.message)}
                    </div>
                  </Form.Item>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <Form.Item label="Địa chỉ">
                    <Input
                      className="style-input"
                      size="large"
                      placeholder="Địa chỉ"
                      {...register("address")}
                    />
                  </Form.Item>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-12">
                  <Form.Item label="Tên tài khoản">
                    <Input
                      className="style-input"
                      size="large"
                      placeholder="Tên tài khoản"
                      {...register("account")}
                    />
                  </Form.Item>
                </div>
                <div className="col-md-6 col-12">
                  <Form.Item label="Mật khẩu mới">
                    <Input
                      className="style-input"
                      size="large"
                      type="password"
                      placeholder="Mật khẩu mới"
                      {...register("newPassword")}
                    />
                    <div className="invalid-message">
                      <p>{errors.newPassword?.message}</p>
                      {console.log(errors.newPassword?.message)}
                    </div>
                  </Form.Item>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <Form.Item label="Hình đại diện">
                    <ImgCrop grid>
                      <Dragger {...register("avatar")} {...props}>
                        <p className="ant-upload-drag-icon">
                          <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">
                          Click or drag file to this area to upload
                        </p>
                      </Dragger>
                      ,
                    </ImgCrop>
                  </Form.Item>
                </div>
              </div>
              <div className="row">
                <div className="col-12 d-flex justify-content-center">
                  <button className="btn btn-primary" onSubmit={_onSubmit}>
                    Cập nhật thông tin
                  </button>
                </div>
              </div>
            </Form>
          </Card>
        </div>
      </div>
    </>
  );
}

Profile.layout = LayoutBase;
export default Profile;

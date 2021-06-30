import React, { useState } from "react";
import {
  Row,
  Col,
  Form,
  Card,
  Divider,
  Input,
  Select,
  DatePicker,
  Button,
  Avatar,
  Upload,
} from "antd";
import ImgCrop from "antd-img-crop";
import {
  UserOutlined,
  DeploymentUnitOutlined,
  WhatsAppOutlined,
  MailOutlined,
  AimOutlined,
} from "@ant-design/icons";
import ProfileBase from "~/components/Profile";
import LayoutBase from "~/components/LayoutBase";
const ProFileStaff = () => {
  const [fileList, setFileList] = useState([]);

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };
  return <ProfileBase />;
};

ProFileStaff.layout = LayoutBase;
export default ProFileStaff;

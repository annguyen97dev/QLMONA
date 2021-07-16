import { FileDoneOutlined } from "@ant-design/icons";
import { Modal, Form, Input, Select, DatePicker, Table } from "antd";
import React, { useState } from "react";

function DetailModal() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { Option } = Select;

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const dataSource = [];
  for (let i = 0; i < 4; i++) {
    dataSource.push({
      key: i,
      time: "12 tháng",
      start: "22-02-2021",
      end: "22-04-2021",
      cost: "12,000,000",
    });
  }

  const columns = [
    {
      title: "Thời gian",
      dataIndex: "time",
      key: "time",
    },
    {
      title: "Bắt đầu",
      dataIndex: "start",
      key: "start",
    },
    {
      title: "Kết thúc",
      dataIndex: "end",
      key: "end",
    },
    {
      title: "Số tiền",
      dataIndex: "cost",
      key: "cost",
    },
  ];

  return (
    <>
      <span
        className="font-weight-black"
        style={{ fontSize: "20px", cursor: "pointer" }}
        onClick={showModal}
      >
        <FileDoneOutlined />
      </span>
      <Modal
        title="Lịch sử gia hạn dịch vụ"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1000}
      >
        <div className="box-form">
          <Form layout="vertical">
            <div className="row">
              <div className="col-12">
                <Form.Item label="Dịch vụ">
                  <Input
                    className="style-input"
                    defaultValue="Hosting"
                    placeholder=""
                    width="100%"
                  />
                </Form.Item>
              </div>
            </div>

            <div className="row">
              <div className="col-md-3 col-12">
                <Form.Item label="Giá tiền:">
                  <Input className="style-input" placeholder="12,000,000" />
                </Form.Item>
              </div>

              <div className="col-md-3 col-12">
                <Form.Item label="Ngày gia hạn:">
                  <DatePicker
                    className="style-input"
                    placeholder="DD-MM-YYYY"
                    style={{ width: "100%" }}
                  />
                </Form.Item>
              </div>

              <div className="col-md-3 col-12">
                <Form.Item label="Thời gian:">
                  <Input className="style-input" placeholder="Mật khẩu mới" />
                </Form.Item>
              </div>

              <div className="col-md-3 col-12">
                <Form.Item label="Thời gian:">
                  <Select
                    defaultValue="Tháng"
                    className="style-input"
                    style={{ width: "100%" }}
                  >
                    <Option value="Tháng">Tháng</Option>
                    <Option value="Năm">Năm</Option>
                  </Select>
                </Form.Item>
              </div>
            </div>

            <div className="row flex-row-reverse">
              <div className="col-3 flex-row-reverse">
                <span className="btn btn-primary" style={{ width: "100%" }}>
                  Gia hạn dịch vụ
                </span>
              </div>
            </div>

            <div className="detail-history">
              <h5>Lịch sử</h5>
              <div className="row">
                <Table columns={columns} dataSource={dataSource} />
              </div>
            </div>
          </Form>
        </div>
      </Modal>
    </>
  );
}

export default DetailModal;

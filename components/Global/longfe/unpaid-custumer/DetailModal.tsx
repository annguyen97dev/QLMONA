import { Modal, Table } from "antd";
import React, { useState } from "react";
import PowerTable from "~/components/PowerTable";

function DetailModal({ record }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const dataSource = [
    {
      key: 1,
      Project: "Arm-chromehearts.com",
      Cost: "15,000,000",
      DateOfPay: "14-06-2021",
      Note: "Thanh toán 50% còn lại và thanh lý hợp đồng",
    },
  ];

  const columns = [
    {
      title: "Tên dự án",
      dataIndex: "Project",
      key: "Project",
    },
    {
      title: "Số tiền",
      dataIndex: "Cost",
      key: "Cost",
    },
    {
      title: "ngày thanh toán",
      dataIndex: "DateOfPay",
      key: "DateOfPay",
    },
    {
      title: "Ghi chú",
      dataIndex: "Note",
      key: "Note",
    },
  ];

  return (
    <>
      <button className="btn btn-primary" onClick={showModal}>
        Xem
      </button>
      {console.log(record)}
      <Modal
        title={`Danh sách phiên thanh toán ${record.Custumer}`}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1000}
        footer={
          <>
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
        <Table dataSource={dataSource} columns={columns} pagination={false} />
      </Modal>
    </>
  );
}

export default DetailModal;

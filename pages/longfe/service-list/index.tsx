import { FileDoneOutlined } from "@ant-design/icons";
import { Checkbox, notification } from "antd";
import React from "react";
import DetailModal from "~/components/Global/longfe/service-list/DetailModal";
import FilterTable from "~/components/Global/longfe/service-list/FilterTable";
import Selector from "~/components/Global/longfe/service-list/Selector";
import LayoutBase from "~/components/LayoutBase";
import PowerTable from "~/components/PowerTable";
import FilterColumn from "~/components/Tables/FilterColumn";
import { LaptopOutlined } from "@ant-design/icons";

function ServiceList() {
  const dataSource = [];
  for (let i = 0; i < 50; i++) {
    dataSource.push({
      key: i,
      Service: "Thuê VPS 350k/tháng",
      Project: "neurosurgery.vn",
      Fee: "2,400,000",
      DateCreate: "20-07-2021",
      Deadline: "22-07-2021",
      Status: "Đang hoạt động",
      UsingStatus: "Ngưng sử dụng",
      Regist: "",
    });
  }

  const handleCheckbox = (type) => {
    notification[type]({
      message: "Thông báo",
      description: "Thành công",
      duration: 1,
      className: "notification-success-custom",
    });
  };

  const columns = [
    {
      title: "Dịch vụ",
      dataIndex: "Service",
      key: "Service",
      ...FilterColumn("Service"),
      render: (text) => <p className="font-weight-blue">{text}</p>,
    },
    {
      title: "Tên dự án",
      dataIndex: "Project",
      key: "Project",
      ...FilterColumn("Project"),
      render: (text) => (
        <p className="font-weight-black">
          <a href="neurosurgery.vn">{text}</a>
        </p>
      ),
    },
    {
      title: "Chi phí",
      dataIndex: "Fee",
      key: "Fee",
      ...FilterColumn("Fee"),
    },
    {
      title: "Bắt đầu",
      dataIndex: "DateCreate",
      key: "DateCreate",
      ...FilterColumn("DateCreate"),
    },
    {
      title: "Hết hạn",
      dataIndex: "Deadline",
      key: "Deadline",
      ...FilterColumn("Deadline"),
    },
    {
      title: "Trạng thái",
      dataIndex: "Status",
      key: "Status",
      filters: [
        {
          text: "Đang hoạt động",
          value: "Đang hoạt động",
        },
        {
          text: "Ngưng hoạt động",
          value: "Ngưng hoạt động",
        },
      ],
      onFilter: (value, record) => record.Status.indexOf(value) === 0,
      render: (Status) => {
        let color = "";
        if (Status === "Đang hoạt động") {
          color = "green";
        }
        if (Status === "Ngưng hoạt động") {
          color = "red";
        }
        return (
          <>
            <span className={`tag ${color} staffList-status`}>{Status}</span>
          </>
        );
      },
    },
    {
      title: "Trạng thái sử dụng",
      dataIndex: "UsingStatus",
      key: "address",
      ...FilterColumn("Address"),
      render: () => (
        <Checkbox
          className="service-status-check"
          onClick={() => {
            handleCheckbox("success");
          }}
        >
          Ngưng sử dụng
        </Checkbox>
      ),
    },
    {
      title: "",
      dataIndex: "Regist",
      key: "Regist",
      render: (text) => <DetailModal />,
    },
  ];
  return (
    <div>
      <PowerTable
        columns={columns}
        dataSource={dataSource}
        TitlePage="Danh sách dịch vụ dự án"
        TitleCard={
          <div className="extra-table">
            {" "}
            <Selector />
            <FilterTable />
          </div>
        }
        Extra={<div className="extra-table"></div>}
      ></PowerTable>
    </div>
  );
}

ServiceList.layout = LayoutBase;
export default ServiceList;

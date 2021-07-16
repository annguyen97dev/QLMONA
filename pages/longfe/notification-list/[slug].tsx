import React from "react";
import LayoutBase from "~/components/LayoutBase";
import { useRouter } from "next/router";
import PowerTable from "~/components/PowerTable";
import FilterColumn from "~/components/Tables/FilterColumn";
import { Checkbox } from "antd";
import DetailModal from "~/components/Global/longfe/service-list/DetailModal";

function NotificationListDetail() {
  const router = useRouter();
  //   Get path and slug
  const path: string = router.pathname;
  const pathString: string[] = path.split("/");
  const slug = router.query.slug;
  //   ===============
  const dataSource = [
    {
      key: 1,
      Service: "Thuê VPS 350k/tháng",
      Project: "neurosurgery.vn",
      Fee: "2,400,000",
      DateCreate: "20-07-2021",
      Deadline: "22-07-2021",
      Status: "Đang hoạt động",
      UsingStatus: "Ngưng sử dụng",
      Regist: "",
    },
    {
      key: 2,
      Service: "SSL",
      Project: "dongduongco.com",
      Fee: "2,400,000",
      DateCreate: "20-07-2021",
      Deadline: "22-07-2021",
      Status: "Đang hoạt động",
      UsingStatus: "Ngưng sử dụng",
      Regist: "",
    },
    {
      key: 3,
      Service: "Thuê VPS 350k/tháng",
      Project: "neurosurgery.vn",
      Fee: "2,400,000",
      DateCreate: "20-07-2021",
      Deadline: "22-07-2021",
      Status: "Đang hoạt động",
      UsingStatus: "Ngưng sử dụng",
      Regist: "",
    },
  ];

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
        <Checkbox className="service-status-check">Ngưng sử dụng</Checkbox>
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
    <>
      <PowerTable
        TitlePage="Danh sách dịch vụ dự án"
        columns={columns}
        dataSource={dataSource}
      ></PowerTable>
    </>
  );
}

NotificationListDetail.layout = LayoutBase;
export default NotificationListDetail;

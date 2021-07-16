import { LaptopOutlined } from "@ant-design/icons";
import React from "react";
import LayoutBase from "~/components/LayoutBase";
import PowerTable from "~/components/PowerTable";
import Link from "next/link";

function NotificationList() {
  const dataSource = [];
  for (let i = 0; i < 50; i++) {
    dataSource.push({
      key: i,
      Detail: {
        Icon: <LaptopOutlined />,
        Title: "Lê Kim Bào - Front End Developer",
        Day: "Monday 04/05/2021 02:32",
        Text: "Dự án [NHTQ - Nhận ship hàng] đang dùng dịch vụ [VPS 350k/tháng] sẽ hết hạn vào ngày [28/05/2021]",
      },
      Type: ["Dịch vụ", "Task"],
    });
  }
  const columns = [
    {
      title: "Chi tiết",
      dataIndex: "Detail",
      key: "Detail",
      render: (text, record, index) => {
        console.log(record.Detail);
        console.log(index);
        return (
          <>
            <div>
              <span className="notification-detail-icon">
                {record.Detail.Icon}
              </span>
              <span className="notification-detail-title">
                {record.Detail.Title}
              </span>
              <span className="notification-detail-day">
                {record.Detail.Day}
              </span>
            </div>
            <div>
              <Link
                href={{
                  pathname: "/longfe/notification-list/[slug]",
                  query: { slug: 2 },
                }}
              >
                {record.Detail.Text}
              </Link>
            </div>
          </>
        );
      },
    },
    {
      title: "Loại",
      dataIndex: "Type",
      key: "Type",
      render: (text, record, index) => {
        let color = "";
        if (index % 2 === 0) {
          color = "green";
        } else {
          color = "red";
        }
        return (
          <span className={`tag ${color}`}>
            {index % 2 === 0 ? record.Type[0] : record.Type[1]}
          </span>
        );
      },
    },
  ];
  return (
    <>
      <PowerTable
        dataSource={dataSource}
        TitlePage="Danh sách khách hàng có phiên chưa thanh toán"
        columns={columns}
      >
        {" "}
      </PowerTable>
    </>
  );
}

NotificationList.layout = LayoutBase;
export default NotificationList;

import React from "react";
import DetailModal from "~/components/Global/longfe/unpaid-custumer/DetailModal";
import Sort from "~/components/Global/longfe/unpaid-custumer/Sort";
import LayoutBase from "~/components/LayoutBase";
import PowerTable from "~/components/PowerTable";
import FilterColumn from "~/components/Tables/FilterColumn";

function UnpaidCustumers() {
  const dataSource = [];
  for (let i = 0; i < 50; i++) {
    dataSource.push({
      key: i,
      ID: 1111,
      Custumer: "Mr. Quốc Anh",
      Session: 3,
      TotalCost: "14,000,000",
      Action: "",
    });
  }
  const columns = [
    {
      title: "ID",
      dataIndex: "ID",
      key: "ID",
      ...FilterColumn("ID"),
    },
    {
      title: "Tên khách hàng",
      dataIndex: "Custumer",
      key: "Custumer",
      ...FilterColumn("Custumer"),
    },
    {
      title: "Sô phiên",
      dataIndex: "Session",
      key: "Session",
      ...FilterColumn("Session"),
    },
    {
      title: "Tổng tiền",
      dataIndex: "TotalCost",
      key: "TotalCost",
      ...FilterColumn("TotalCost"),
    },
    {
      title: "",
      dataIndex: "Action",
      key: "Action",
      render: (text, record) => <DetailModal record={record} />,
    },
  ];
  return (
    <div>
      <PowerTable
        dataSource={dataSource}
        columns={columns}
        TitlePage="Danh sách khách hàng có phiên chưa thanh toán"
        TitleCard={
          <div className="extra-table">
            {" "}
            <Sort />
          </div>
        }
      ></PowerTable>
    </div>
  );
}

UnpaidCustumers.layout = LayoutBase;
export default UnpaidCustumers;

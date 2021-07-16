import { EditOutlined } from "@ant-design/icons";
import React from "react";
import SortBox from "~/components/Elements/SortBox";
import FilterTable from "~/components/Global/CostList/FilterTable";
import AddStaffModal from "~/components/Global/longfe/staff-list/AddStaffModal";
import Selector from "~/components/Global/longfe/staff-list/Selector";
import LayoutBase from "~/components/LayoutBase";
import PowerTable from "~/components/PowerTable";
import FilterColumn from "~/components/Tables/FilterColumn";

function StaffList() {
  const dataSource = [];

  for (let i = 0; i < 50; i++) {
    dataSource.push({
      key: i,
      FullName: "Hoàng Linh",
      Role: "Giám đốc",
      Account: "0808080808",
      PhoneNumber: "0909323243",
      Email: "hoanglinh@gmail.com",
      Bonus: "300,000",
      Address: "New York, NY",
      Status: "Đang hoạt động",
    });
  }

  const columns = [
    {
      title: "Họ và tên",
      dataIndex: "FullName",
      key: "fullname",
      ...FilterColumn("FullName"),
      render: (text) => <p className="font-weight-blue">{text}</p>,
    },
    {
      title: "Chức vụ",
      dataIndex: "Role",
      key: "role",
      ...FilterColumn("Role"),
      render: (text) => <p className="font-weight-black">{text}</p>,
    },
    {
      title: "Tài khoản",
      dataIndex: "Account",
      key: "account",
      ...FilterColumn("Account"),
    },
    {
      title: "Số điện thoại",
      dataIndex: "PhoneNumber",
      key: "phonenumber",
      ...FilterColumn("PhoneNumber"),
    },
    {
      title: "Email",
      dataIndex: "Email",
      key: "email",
      ...FilterColumn("Email"),
    },
    {
      title: "Hoa hồng",
      dataIndex: "Bonus",
      key: "bonus",
    },
    {
      title: "Địa chỉ",
      dataIndex: "Address",
      key: "address",
      ...FilterColumn("Address"),
    },
    {
      title: "Trạng thái",
      dataIndex: "Status",
      key: "status",
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
            <span>
              <AddStaffModal typeButton={"edit-button"} />
            </span>
          </>
        );
      },
    },
  ];
  return (
    <>
      <PowerTable
        columns={columns}
        dataSource={dataSource}
        TitlePage="Danh sách nhân viên"
        TitleCard={
          <div className="extra-table">
            <Selector />
            <FilterTable />
          </div>
        }
        Extra={
          <div className="extra-table">
            <AddStaffModal typeButton={"add-button"} />
          </div>
        }
      ></PowerTable>
    </>
  );
}

StaffList.layout = LayoutBase;
export default StaffList;
